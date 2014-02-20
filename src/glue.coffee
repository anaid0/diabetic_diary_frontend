class Glue
  constructor: (@useCase, @gui, @sampleData)->
    After(@useCase, "getEntries", => @sampleData.getEntries())
    After(@sampleData, "entriesLoaded", (entries) => @useCase.setInitialEntries(entries))
    After(@useCase, "setInitialEntries", (entries) => @gui.showEntries(entries))

    After(@gui, "editEntryClicked", (entryId) => @useCase.getEntryToEdit(entryId))
    After(@useCase, "getEntryToEdit", (entryId) => @sampleData.getEntry(entryId))
    After(@sampleData, "entryFound", (entry, insList, measList) => @useCase.entryFound(entry, insList, measList))
    After(@useCase, "entryFound", (entry, insList, measList) => @gui.showEntryForm(entry, insList, measList))

    After(@gui, "addNewEntryClicked", => @useCase.newEntry())
    After(@useCase, "newEntry", => @sampleData.newEntry())

    # After(@gui, "getInsulinTypes", (userId)=> @useCase.getInsulinTypes(userId))
    # After(@useCase, "getInsulinTypes", (userId) => @sampleData.loadInsulinTypes(userId))
    # After(@sampleData, "insulinTypesLoaded", (list) => @gui.setInsulinTypes(list))

    # After(@gui, "getMeasurementTypes", (userId) => @useCase.getMeasurementTypes(userId))
    # After(@useCase, "getMeasurementTypes", (userId) => @sampleData.loadMeasurementTypes(userId))
    # After(@sampleData, "measurementTypesLoaded", (list) => @gui.setMeasurementTypes(list))

    LogAll(@useCase)
    LogAll(@gui)
    LogAll(@sampleData)