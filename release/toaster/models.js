var Activity, ActivityType, Dose, Entry, InsulinType, Meal, Measurement, MeasurementType, Note, User;

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

  function Activity(minutes, type) {
    this.minutes = minutes;
    this.type = type;
    this.kcal = this.type.kcal_per_hour * this.minutes / 60;
  }

  return Activity;

})();

Note = (function() {

  function Note(content) {
    this.content = content;
  }

  return Note;

})();

InsulinType = (function() {

  function InsulinType(name, acting, type) {
    this.name = name;
    this.acting = acting;
    this.type = type;
    this.description = "" + this.name + " (" + this.type + ", " + this.acting + ")";
  }

  return InsulinType;

})();

MeasurementType = (function() {

  function MeasurementType(name) {
    this.name = name;
  }

  return MeasurementType;

})();

ActivityType = (function() {

  function ActivityType(name, kcal_per_hour) {
    this.name = name;
    this.kcal_per_hour = kcal_per_hour;
  }

  return ActivityType;

})();
