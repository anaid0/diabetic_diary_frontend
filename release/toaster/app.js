var App;

App = (function() {

  function App() {
    var glue, gui, sampleData, useCase,
      _this = this;
    HandlebarsFormHelpers.register(Handlebars);
    Handlebars.registerHelper('maybeNull', function(item) {
      if (item === null) {
        return "";
      } else {
        return item;
      }
    });
    useCase = new UseCase();
    window.useCase = useCase;
    gui = new Gui();
    sampleData = new SampleData();
    glue = new Glue(useCase, gui, sampleData);
    useCase.start();
  }

  return App;

})();

new App();
