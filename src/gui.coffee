class Gui
  constructor: ->
    #@renderFormElements()
    @insulinTypes = []
    @measurementTypes = []

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
    $(".edit-button").each (index, element) => 
      @setEditEntryButton($(element))
    return

  setEditEntryButton: (button) =>
    button.click( => @editEntryClicked(button.attr('entry-id')))
    return

  addNewEntryClicked: ->

  editEntryClicked: (entryId) =>

  showEntryForm: (entry, insulinTypes, measurementTypes, activityTypes) =>
    form = @createElementFor("#entry-form-template", entry)
    $(".main").append(form)
    insulinSelect = @createElementFor("#insulin-select-template", insulinTypes : insulinTypes)
    $("#insulin-select").append(insulinSelect)
    measurementSelect = @createElementFor("#measurement-select-template", measurementTypes : measurementTypes)
    $("#measurement-select").append(measurementSelect)
    activitySelect = @createElementFor("#activity-select-template", activityTypes : activityTypes)
    $("#activity-select").append(activitySelect)

    @renderFormElements()    

  renderFormElements: ->
    $("#entry-form").dialog({
　　　　　　autoOpen: true,
　　　　　　modal: true,
　　　　　　draggable: false,
　　　　　　resizable: false,
　　　　　　closeOnEscape: false,
　　　　　　position: ['center', 300],
　　　　　　width: 700,
　　　　　　buttons: {
　　　　　　　　Ok: -> $("#entry-form").remove()
　　　　　　　　}
　　　　})
    $("#accordion").accordion({collapsible: true})
    $("#measurement-value-spinner").spinner({ min: 0, max: 2000 })
    #$("#dose-value-spinner").spinner({ step: 0.1, numberFormat: "n", culture: "pl-PL", min: 0.1, max: 100 })
    $("#dose-value-spinner").spinner({ step: 0.1, min: 0.1, max: 100 })
    $("#activity-time-spinner").spinner({ min: 1, max: 1440 })
    $("#ww-spinner").spinner({ step: 0.1, min: 0, max: 50 })
    $("#wbt-spinner").spinner({ step: 0.1, min: 0, max: 50 })
    $("#datepicker").datepicker()
    $("#help-balloon").balloon({ contents: '<p id="help-balloon-text">Aby dodać któryś element wpisu, kliknij w jego nazwę poniżej. <br> Do jednego wpisu możesz dodać dowolnie wybrane z poniższych elementów<br>(jedynym wymaganym elementem jest data i czas).</p>' })
    return