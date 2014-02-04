var App;

App = (function() {

  function App() {
    var glue, gui, sampleData, useCase;
    HandlebarsFormHelpers.register(Handlebars);
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
