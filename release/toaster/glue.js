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
    After(this.gui, "editEntryClicked", function(entryId) {
      return _this.useCase.getEntryToEdit(entryId);
    });
    After(this.useCase, "getEntryToEdit", function(entryId) {
      return _this.sampleData.getEntry(entryId);
    });
    After(this.sampleData, "entryFound", function(entry, insList, measList) {
      return _this.useCase.entryFound(entry, insList, measList);
    });
    After(this.useCase, "entryFound", function(entry, insList, measList) {
      return _this.gui.showEntryForm(entry, insList, measList);
    });
    After(this.gui, "addNewEntryClicked", function() {
      return _this.useCase.newEntry();
    });
    After(this.useCase, "newEntry", function() {
      return _this.sampleData.newEntry();
    });
    LogAll(this.useCase);
    LogAll(this.gui);
    LogAll(this.sampleData);
  }

  return Glue;

})();
