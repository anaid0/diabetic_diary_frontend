var Activity, Dose, Entry, Meal, Measurement, Note, UseCase, User,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UseCase = (function() {

  function UseCase() {
    this.entryFound = __bind(this.entryFound, this);

    this.getEntryToEdit = __bind(this.getEntryToEdit, this);

    this.setInitialEntries = __bind(this.setInitialEntries, this);

    this.getEntries = __bind(this.getEntries, this);

    this.start = __bind(this.start, this);
    this.entries = [];
  }

  UseCase.prototype.start = function() {
    return this.getEntries();
  };

  UseCase.prototype.getEntries = function() {};

  UseCase.prototype.setInitialEntries = function(entries) {
    return this.entries = entries;
  };

  UseCase.prototype.getEntryToEdit = function(entryId) {};

  UseCase.prototype.entryFound = function(entry) {};

  return UseCase;

})();

Entry = (function() {

  function Entry(id, user, date, time, measurement, dose, meal, activity, note) {
    var now;
    this.id = id;
    this.user = user;
    this.date = date;
    this.time = time;
    this.measurement = measurement;
    this.dose = dose;
    this.meal = meal;
    this.activity = activity;
    this.note = note;
    if (arguments.length === 0) {
      now = new Date;
      this.date = "" + (now.getFullYear()) + "-" + (now.getMonth() + 1) + "-" + (now.getDate());
      this.time = "" + (now.getHours()) + ":" + (now.getMinutes());
    }
  }

  return Entry;

})();

User = (function() {

  function User(id, name) {
    this.id = id;
    this.name = name;
  }

  return User;

})();

Measurement = (function() {

  function Measurement(value, type) {
    this.value = value;
    this.type = type;
  }

  return Measurement;

})();

Dose = (function() {

  function Dose(value, insulin_type) {
    this.value = value;
    this.insulin_type = insulin_type;
  }

  return Dose;

})();

Meal = (function() {

  function Meal(carbs, kcal) {
    this.carbs = carbs;
    this.kcal = kcal;
    this.ww = this.carbs / 10;
    this.wbt = (this.kcal - this.carbs * 4) / 100;
  }

  return Meal;

})();

Activity = (function() {

  function Activity(time, type) {
    this.time = time;
    this.type = type;
  }

  return Activity;

})();

Note = (function() {

  function Note(content) {
    this.content = content;
  }

  return Note;

})();
