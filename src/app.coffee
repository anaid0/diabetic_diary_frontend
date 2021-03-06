#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< sample_data
#<< glue
#<< models

class App
  constructor: ->
    Handlebars.registerHelper('nullToString', (item) => if item == null then "" else item)
    useCase = new UseCase()
    window.useCase = useCase
    gui = new Gui()
    sampleData = new SampleData()
    glue = new Glue(useCase, gui, sampleData)
    useCase.start()

new App()

