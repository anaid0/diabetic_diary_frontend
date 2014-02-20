var SampleData,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SampleData = (function() {

  function SampleData() {
    this.loadMeasurementTypes = __bind(this.loadMeasurementTypes, this);

    this.loadInsulinTypes = __bind(this.loadInsulinTypes, this);

    this.removeEntry = __bind(this.removeEntry, this);

    this.addEntry = __bind(this.addEntry, this);

    this.entryFound = __bind(this.entryFound, this);

    this.getEntry = __bind(this.getEntry, this);

    this.entriesNotLoaded = __bind(this.entriesNotLoaded, this);

    this.entriesLoaded = __bind(this.entriesLoaded, this);

    this.getEntries = __bind(this.getEntries, this);
    this.entries = [];
    this.user1 = new User(0, "Jan Kowalski");
    this.insulinTypesLists = [];
    this.insulinTypesLists.push(["Humalog (krótkodziałająca, analog)", "Lantus (długodziałająca, analog)", "Humulin R (krótkodziałająca, ludzka)"]);
    this.measurementTypesLists = [];
    this.measurementTypesLists.push(["po posiłku", "przed posiłkiem", "na czczo", "przed snem", "inne"]);
    this.entries.push(new Entry(0, this.user1, "2014-01-01", "17:30", new Measurement(130, "przed posilkiem"), new Dose(5, "Humalog"), new Meal(50, 300), null, null));
    this.entries.push(new Entry(1, this.user1, "2014-01-09", "11:27", new Measurement(240, "po posilku"), new Dose(4, "Humalog"), null, null, new Note("Korekta")));
    this.entries.push(new Entry(2, this.user1, "2014-01-15", "22:56", new Measurement(45, "inny"), null, new Meal(20, 80), null, new Note("Hipoglikemia")));
  }

  SampleData.prototype.getEntries = function() {
    if (this.entries === [] && this.entries === null) {
      return this.entriesNotLoaded();
    } else {
      return this.entriesLoaded(this.entries);
    }
  };

  SampleData.prototype.entriesLoaded = function(entries) {};

  SampleData.prototype.entriesNotLoaded = function() {
    return console.log("entries not loaded");
  };

  SampleData.prototype.getEntry = function(entryId) {
    var entry;
    entry = this.entries[entryId];
    return this.entryFound(entry, this.loadInsulinTypes(entry.user.id), this.loadMeasurementTypes(entry.user.id));
  };

  SampleData.prototype.entryFound = function(entry, insulinTypes, measurementTypes) {};

  SampleData.prototype.addEntry = function(entry) {
    return this.entries.push(entry);
  };

  SampleData.prototype.removeEntry = function(entryId) {
    return this.entries.remove(entryId);
  };

  SampleData.prototype.newEntry = function() {
    var entry;
    entry = new Entry();
    entry.user = this.user1;
    return this.entryFound(entry, this.loadInsulinTypes(entry.user.id), this.loadMeasurementTypes(entry.user.id));
  };

  SampleData.prototype.loadInsulinTypes = function(userId) {
    var len;
    console.log("jestem w sampledata.loadInsulinTypes");
    if (this.insulinTypesLists === null) {
      this.insulinTypesNotLoaded();
    } else {
      len = this.insulinTypesLists.length;
      if (len === 0 || userId >= len || userId < 0) {
        return [];
      } else {
        return this.insulinTypesLists[userId];
      }
    }
    return [];
  };

  SampleData.prototype.loadMeasurementTypes = function(userId) {
    var len;
    console.log("jestem w sampledata.loadMeasurementTypes");
    if (this.measurementTypesLists === null) {
      this.measurementTypesNotLoaded();
    } else {
      len = this.measurementTypesLists.length;
      if (len === 0 || userId >= len || userId < 0) {
        return [];
      } else {
        return this.measurementTypesLists[userId];
      }
    }
    return [];
  };

  return SampleData;

})();
