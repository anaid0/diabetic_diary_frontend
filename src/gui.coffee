# Templates:
# add-new-entry-button
# entries-list
# new-entry-form
# edit-entry-form

class Gui
  constructor: ->

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)
  
  showEntries: (entries) =>
    element = @createElementFor("#show-entries-template", entries : entries)
    $(".main").append(element)
  #addNewEntry: (entry) =>
    