var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.showEntryForm = __bind(this.showEntryForm, this);

    this.editEntryClicked = __bind(this.editEntryClicked, this);

    this.setEditEntryButton = __bind(this.setEditEntryButton, this);

    this.showEntries = __bind(this.showEntries, this);

    this.createElementFor = __bind(this.createElementFor, this);
    this.insulinTypes = [];
    this.measurementTypes = [];
  }

  Gui.prototype.createElementFor = function(templateId, data) {
    var element, html, source, template;
    source = $(templateId).html();
    template = Handlebars.compile(source);
    html = template(data);
    return element = $(html);
  };

  Gui.prototype.showEntries = function(entries) {
    var addNewEntryButton, buttonElement, entriesElement,
      _this = this;
    buttonElement = this.createElementFor("#add-new-entry-button-template");
    $(".main").append(buttonElement);
    entriesElement = this.createElementFor("#show-entries-template", {
      entries: entries
    });
    $(".main").append(entriesElement);
    addNewEntryButton = $("#add-new-entry-button");
    addNewEntryButton.click(function() {
      return _this.addNewEntryClicked();
    });
    $(".edit-button").each(function(index, element) {
      return _this.setEditEntryButton($(element));
    });
  };

  Gui.prototype.setEditEntryButton = function(button) {
    var _this = this;
    button.click(function() {
      return _this.editEntryClicked(button.attr('entry-id'));
    });
  };

  Gui.prototype.addNewEntryClicked = function() {};

  Gui.prototype.editEntryClicked = function(entryId) {};

  Gui.prototype.showEntryForm = function(entry, insulinTypes, measurementTypes, activityTypes) {
    var activitySelect, form, insulinSelect, measurementSelect;
    form = this.createElementFor("#entry-form-template", entry);
    $(".main").append(form);
    insulinSelect = this.createElementFor("#insulin-select-template", {
      insulinTypes: insulinTypes
    });
    $("#insulin-select").append(insulinSelect);
    measurementSelect = this.createElementFor("#measurement-select-template", {
      measurementTypes: measurementTypes
    });
    $("#measurement-select").append(measurementSelect);
    activitySelect = this.createElementFor("#activity-select-template", {
      activityTypes: activityTypes
    });
    $("#activity-select").append(activitySelect);
    return this.renderFormElements();
  };

  Gui.prototype.renderFormElements = function() {
    $("#entry-form").dialog({
      autoOpen: true,
      modal: true,
      draggable: false,
      resizable: false,
      closeOnEscape: false,
      position: ['center', 300],
      width: 700,
      buttons: [
        {
          text: "Ok",
          click: function() {
            return this.tryToAddNewEntry;
          }
        }, {
          text: "Anuluj",
          click: function() {
            return $("#entry-form").remove();
          }
        }
      ]
    });
    $("#accordion").accordion({
      collapsible: true
    });
    $("#measurement-value-spinner").spinner({
      min: 0,
      max: 2000
    });
    $("#dose-value-spinner").spinner({
      step: 0.1,
      min: 0.1,
      max: 100
    });
    $("#activity-time-spinner").spinner({
      min: 1,
      max: 1440
    });
    $("#ww-spinner").spinner({
      step: 0.1,
      min: 0,
      max: 50
    });
    $("#wbt-spinner").spinner({
      step: 0.1,
      min: 0,
      max: 50
    });
    $("#datepicker").datepicker();
    $("#help-balloon").balloon({
      contents: '<p id="help-balloon-text">Aby dodać któryś element wpisu, kliknij w jego nazwę poniżej. <br> Do jednego wpisu możesz dodać dowolnie wybrane z poniższych elementów<br>(jedynym wymaganym elementem jest data i czas).</p>'
    });
  };

  Gui.prototype.tryToAddNewEntry = function() {};

  return Gui;

})();
