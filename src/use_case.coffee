class UseCase
  constructor: ->
    @entries = []
    
  start: =>
    @getEntries()

  getEntries: =>

  setInitialEntries: (entries) =>
    @entries = entries

  #addNewEntry: (entry) =>
    #@entries.push(entry)

  #deleteEntry: =>
    #@entries.remove(entry)

  #editEntry: =>

class Entry
  constructor: (@user, @date, @time, @measurement, @dose, @meal, @activity, @note) ->

class User
  constructor: (@id, @name) ->

class Measurement
  constructor: (@value, @type) ->

class Dose
  constructor: (@value, @insulin_type) ->

class Meal
  @ww
  constructor: (@meal_items, @carbs, @kcal, @wbt) ->
    @ww = @carbs/10

class MealItem
  @ww
  constructor: (@name, @weight, @carbs, @kcal, @wbt) ->
    @ww = @carbs/10

class Activity
  constructor: (@time, @type) ->

class Note
  constructor: (@content) ->