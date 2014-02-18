var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.showEntryForm = __bind(this.showEntryForm, this);

    this.editEntryClicked = __bind(this.editEntryClicked, this);

    this.addNewEntryClicked = __bind(this.addNewEntryClicked, this);

    this.setEditEntryButton = __bind(this.setEditEntryButton, this);

    this.showEntries = __bind(this.showEntries, this);

    this.createElementFor = __bind(this.createElementFor, this);

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
    console.log(button.attr("entry-id"));
    button.click(function() {
      return _this.editEntryClicked(button.attr('entry-id'));
    });
  };

  Gui.prototype.addNewEntryClicked = function() {
    return this.showEntryForm(null);
  };

  Gui.prototype.editEntryClicked = function(entryId) {
    return console.log("edit entry clicked");
  };

  Gui.prototype.showEntryForm = function(entry) {
    var form;
    $("#accordion").accordion({
      collapsible: true
    });
    form = this.createElementFor("#entry-form-template", entry);
    $(".main").append(form);
    $("#entry-form").dialog({
      autoOpen: true,
      modal: true,
      draggable: false,
      resizable: false,
      position: ['center', 300],
      width: 700,
      buttons: {
        Ok: function() {
          return $("#entry-form").remove();
        }
      }
    });
    return $("#accordion").accordion();
  };

  return Gui;

})();
