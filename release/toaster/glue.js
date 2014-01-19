var Glue;

Glue = (function() {

  function Glue(useCase, gui, sampleData) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    this.sampleData = sampleData;
    After(this.useCase, "getEntries", function() {
      return _this.sampleData.getEntries();
    });
    After(this.sampleData, "entriesLoaded", function(entries) {
      return _this.useCase.setInitialEntries(entries);
    });
    After(this.useCase, "setInitialEntries", function(entries) {
      return _this.gui.showEntries(entries);
    });
    LogAll(this.useCase);
    LogAll(this.gui);
    LogAll(this.sampleData);
  }

  return Glue;

})();
