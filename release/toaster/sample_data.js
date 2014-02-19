var SampleData,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SampleData = (function() {

  function SampleData() {
    this.entryFound = __bind(this.entryFound, this);

    this.getEntry = __bind(this.getEntry, this);

    this.entriesNotLoaded = __bind(this.entriesNotLoaded, this);

    this.entriesLoaded = __bind(this.entriesLoaded, this);

    this.getEntries = __bind(this.getEntries, this);
    this.entries = [];
    this.user1 = new User(1, "Jan Kowalski");
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
    return this.entryFound(this.entries[entryId]);
  };

  SampleData.prototype.entryFound = function(entry) {};

  return SampleData;

})();
