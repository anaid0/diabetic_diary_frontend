# Templates:
# add-new-entry-button
# entries-list
# entry-form

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
    addNewEntryButton = $("#add-new-entry-button")
    addNewEntryButton.click( => @addNewEntryClicked())
    $(".edit-button").each( => @setEditEntryButton($(this)))
    #$(".edit-button").each( => console.log($(this).attr[1]))
    return

  setEditEntryButton: (button) =>
    console.log(button.attr("entry-id"))
    button.click( => @editEntryClicked(button.attr('entry-id')))
    return

  addNewEntryClicked: =>
    @showEntryForm(null)

  editEntryClicked: (entryId) =>
    console.log("edit entry clicked")

  showEntryForm: (entry) =>
    #$(".add-new-entry-button").remove()
    #$(".entries-list").remove()
    form = @createElementFor("#entry-form-template", entry)
    $(".main").append(form)
    $("#entry-form").dialog({
　　　　　　autoOpen: true,
　　　　　　modal: true,
　　　　　　draggable: false,
　　　　　　resizable: false,
　　　　　　position: ['center', 300],
　　　　　　width: 700,
　　　　　　buttons: {
　　　　　　　　Ok: -> $("#entry-form").remove()
　　　　　　　　}
　　　　});
    