class Glue
  constructor: (@useCase, @gui, @sampleData)->
    After(@useCase, "getEntries", => @sampleData.getEntries())
    After(@sampleData, "entriesLoaded", (entries) => @useCase.setInitialEntries(entries))
    After(@useCase, "setInitialEntries", (entries) => @gui.showEntries(entries))

    After(@gui, "editEntryClicked", (entryId) => @useCase.getEntryToEdit(entryId))
    After(@useCase, "getEntryToEdit", (entryId) => @sampleData.getEntry(entryId))
    After(@sampleData, "entryFound", (entry) => @useCase.entryFound(entry))
    After(@useCase, "entryFound", (entry) => @gui.showEntryForm(entry))

    LogAll(@useCase)
    LogAll(@gui)
    LogAll(@sampleData)