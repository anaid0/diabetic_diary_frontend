var UseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UseCase = (function() {

  function UseCase() {
    this.getMeasurementTypes = __bind(this.getMeasurementTypes, this);

    this.getInsulinTypes = __bind(this.getInsulinTypes, this);

    this.entryFound = __bind(this.entryFound, this);

    this.getEntryToEdit = __bind(this.getEntryToEdit, this);

    this.setInitialEntries = __bind(this.setInitialEntries, this);

    this.getEntries = __bind(this.getEntries, this);

    this.start = __bind(this.start, this);

  }

  UseCase.prototype.start = function() {
    return this.getEntries();
  };

  UseCase.prototype.getEntries = function() {};

  UseCase.prototype.setInitialEntries = function(entries) {};

  UseCase.prototype.getEntryToEdit = function(entryId) {};

  UseCase.prototype.entryFound = function(entry, iList, mList) {};

  UseCase.prototype.getInsulinTypes = function(userId) {
    return console.log("jestem w usecase.getInsulinTypes");
  };

  UseCase.prototype.getMeasurementTypes = function(userId) {
    return console.log("jestem w usecase.getMeasureTypes");
  };

  return UseCase;

})();
