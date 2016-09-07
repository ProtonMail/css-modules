import ui from './home.css';

const $inject = [];

const Home = function () {
  const link = $scope => {
    $scope.ui = ui;
  };

  return {
    template: require('./home.html'),
    restrict: 'E',
    link,
    replace: true,
    scope: {}
  };
};

Home.$inject = $inject;

export default Home;
