var SampleData,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SampleData = (function() {

  function SampleData() {
    this.removeEntry = __bind(this.removeEntry, this);

    this.addEntry = __bind(this.addEntry, this);

    this.entryFound = __bind(this.entryFound, this);

    this.getEntry = __bind(this.getEntry, this);

    this.entriesNotLoaded = __bind(this.entriesNotLoaded, this);

    this.entriesLoaded = __bind(this.entriesLoaded, this);

    this.getEntries = __bind(this.getEntries, this);
    this.entries = [];
    this.insulinTypesList = [new InsulinType("Humalog", "krótkodziałająca", "analog"), new InsulinType("Lantus", "długodziałająca", "analog"), new InsulinType("Humulin R", "krótkodziałająca", "ludzka")];
    this.measurementTypesLists = [new MeasurementType("po posiłku"), new MeasurementType("przed posiłkiem"), new MeasurementType("na czczo"), new MeasurementType("przed snem"), new MeasurementType("inne")];
    this.activityTypesList = [new ActivityType("bieganie", 700), new ActivityType("jeżdżenie rowerem", 600), new ActivityType("pływanie", 400)];
    this.user1 = new User(0, "Jan Kowalski", this.insulinTypesList, this.measurementTypesLists, this.activityTypesList);
    this.entries.push(new Entry(0, this.user1, "2014-01-01", "17:30", new Measurement(130, this.user1.measurementTypes[1]), new Dose(5, this.user1.insulinTypes[2]), new Meal(50, 300), null, null));
    this.entries.push(new Entry(1, this.user1, "2014-01-09", "11:27", new Measurement(240, this.user1.measurementTypes[0]), new Dose(4, this.user1.insulinTypes[0]), null, null, new Note("Korekta")));
    this.entries.push(new Entry(2, this.user1, "2014-01-15", "22:56", new Measurement(45, this.user1.measurementTypes[4]), null, new Meal(20, 80), null, new Note("Hipoglikemia")));
    this.entries.push(new Entry(3, this.user1, "2014-02-13", "06:30", new Measurement(175, this.user1.measurementTypes[4]), null, new Meal(15, 120), new Activity(30, this.user1.activityTypes[1]), new Note("Poranne bieganie")));
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
    return this.entryFound(entry, entry.user.insulinTypes, entry.user.measurementTypes, entry.user.activityTypes);
  };

  SampleData.prototype.entryFound = function(entry, insulinTypes, measurementTypes, activityTypes) {};

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
    return this.entryFound(entry, entry.user.insulinTypes, entry.user.measurementTypes, entry.user.activityTypes);
  };

  return SampleData;

})();
