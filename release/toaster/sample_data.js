var SampleData,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SampleData = (function() {

  function SampleData() {
    this.entriesNotLoaded = __bind(this.entriesNotLoaded, this);

    this.entriesLoaded = __bind(this.entriesLoaded, this);

    this.getEntries = __bind(this.getEntries, this);
    this.entries = [];
    this.user1 = new User(1, "Jan Kowalski");
    this.entries.push(new Entry(this.user1, "2014-01-01", "17:30", new Measurement(130, "przed posilkiem"), new Dose(5, "Humalog"), new Meal([new MealItem("pieczywo", 60, 30, 180, 0.5), new MealItem("dzem", 30, 20, 120, 0.5)], 50, 300, 1), null, null));
    this.entries.push(new Entry(this.user1, "2014-01-09", "11:27", new Measurement(240, "po posilku"), new Dose(4, "Humalog"), null, null, new Note("Korekta")));
    this.entries.push(new Entry(this.user1, "2014-01-15", "22:56", new Measurement(45, "inny"), null, new Meal([new MealItem("sok", 200, 20, 80, 0)], 20, 80, 0), null, new Note("Hipoglikemia")));
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

  return SampleData;

})();
