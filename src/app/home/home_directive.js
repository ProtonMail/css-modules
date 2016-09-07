import ui from './home.css';

const $inject = [];

const Home = function () {
  const link = $scope => {
    $scope.ui = ui;
  };

  return {
    template: require('./home.ejs'),
    restrict: 'E',
    link,
    replace: true,
    scope: {}
  };
};

Home.$inject = $inject;

export default Home;
