### The !important things

Have you ever wondered if you could get rid of some styles without breaking something? Wondered if the styles stood on their own or depended on other things? Or writting quick style that should work but you don't know if it can affect rendering of something else?

We have **135** `!important` in our 37 styles files, some are hacks that overide the browsers default rendering but in most case they override the **cascading**

```css
.pm_tag {
    ...
    color: $text !important;
}
```

We can't figure out in which context this `important!` has been introduced, but this class has some cascading conflict with one other **in a special context** so either commenting the style wouldn't help that much.

Sometime we tend to forgot that the order in which a class' attributes are overwritten is not specified by the order the classes are defined in the HTML class attribute, but instead where they appear in the css.

```css
.top { top:0px }
.absolute { position:absolute; top:100px }
```

```html
<span class="absolute top">
	I'm won't be at the TOP! :-/
</span>
```

https://jsfiddle.net/1xa1hq86/4
vs
https://jsfiddle.net/1xa1hq86/5

Our current solution? Use !important to set the rule level up, nobody's to blame that fast and we have no time to spend, but the next guy who have to add CSS will face the same issue.


### Maintainabily

Any time we make a change to a CSS file, we need to carefully consider the global environment in which our styles will sit.
Think about efficient dead code management...

No other front end technology requires so much discipline just to keep the code at a minimum level of maintainability.

### Global CSS

When we build an app we try to slice it into components, small reusable modules which allow us to remain DRY, help performances and code readability.

But CSS selectors all exist within the same global scope.

Anyone who has worked with CSS long enough has had to come to terms with its aggressively global nature — a model clearly designed in the age of documents, now struggling to offer a sane working environment for today’s modern web applications.

Every selector has the potential to have unintended side effects by targeting unwanted elements or clashing with other selectors. More surprisingly, our selectors may even lose out in the global specificity war, ultimately having little or no effect on the page at all.

In other languages, it’s accepted that modifying the global
environment is something to be done rarely, if ever


### CSS Module


Writing maintainable CSS is now encouraged, not by careful adherence to a naming convention like BEM, but by style encapsulation during development, thanks to **webpack** :


```css
.box {
  composes: flex vertical centered from "./shared/layout.css";
  justify-content:center;
}
```



```js
import styles from "./message.css";

element.innerHTML =
  `<div class="${styles.box}">
     I'm a box
   </div>`;
```


When you read the js file you know that everything related to the style of this component is located in message.css.

It’s critical to recognise the massive shift that’s occurring here. We can now make changes to our CSS with confidence that we’re not accidentally affecting elements elsewhere in the page. We’ve introduced a sane scoping model to our CSS.


You can find a full description of what CSS Module fix over CSS at https://glenmaddern.com/articles/css-modules


### Transition

We can plan a smooth and progressive transition from the global to local CSS, which sound like less a suicide move then putting everything in a single release :-)

### Requirements

We will have to move from gulp to webpack

It look like webpack HMR is possible with angular, which could be awesome cause reloading he whole app is painfull for the CSS tasks

http://shmck.herokuapp.com/webpack-angular-part-1/
https://github.com/dmachat/angular-webpack-cookbook/wiki
