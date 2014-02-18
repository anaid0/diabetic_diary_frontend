#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< sample_data
#<< glue

class App
  constructor: ->
    HandlebarsFormHelpers.register(Handlebars)
    Handlebars.registerHelper('maybeNull', (item) => if item == null then "" else item)
    useCase = new UseCase()
    window.useCase = useCase
    gui = new Gui()
    sampleData = new SampleData()
    glue = new Glue(useCase, gui, sampleData)
    useCase.start()

new App()

