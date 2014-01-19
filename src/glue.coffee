class Glue
  constructor: (@useCase, @gui, @sampleData)->
    After(@useCase, "getEntries", => @sampleData.getEntries())
    After(@sampleData, "entriesLoaded", (entries) => @useCase.setInitialEntries(entries))
    After(@useCase, "setInitialEntries", (entries) => @gui.showEntries(entries))

    LogAll(@useCase)
    LogAll(@gui)
    LogAll(@sampleData)