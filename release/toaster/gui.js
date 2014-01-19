var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
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
    var buttonElement, entriesElement;
    buttonElement = this.createElementFor("#add-new-entry-button-template");
    $(".main").append(buttonElement);
    entriesElement = this.createElementFor("#show-entries-template", {
      entries: entries
    });
    return $(".main").append(entriesElement);
  };

  return Gui;

})();
