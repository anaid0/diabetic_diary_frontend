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
    buttonElement = @createElementFor("#add-new-entry-button-template")
    $(".main").append(buttonElement)
    entriesElement = @createElementFor("#show-entries-template", entries : entries)
    $(".main").append(entriesElement)
  #addNewEntry: (entry) =>
    