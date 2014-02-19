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

  getEntryToEdit: (entryId) =>

  entryFound: (entry) =>

  #showEntry: (entry) =>

class Entry
  constructor: (@id, @user, @date, @time, @measurement, @dose, @meal, @activity, @note) ->
    if arguments.length == 0
      now = new Date
      @date = "#{now.getFullYear()}-#{now.getMonth()+1}-#{now.getDate()}"
      @time = "#{now.getHours()}:#{now.getMinutes()}"
class User
  constructor: (@id, @name) ->

class Measurement
  constructor: (@value, @type) ->

class Dose
  constructor: (@value, @insulin_type) ->
    
class Meal
  constructor: (@carbs, @kcal) ->
    @ww = @carbs / 10
    @wbt = (@kcal - @carbs * 4) / 100
# class Meal
#   @ww
#   constructor: (@meal_items, @carbs, @kcal, @wbt) ->
#     @ww = @carbs/10

# class MealItem
#   @ww
#   constructor: (@name, @weight, @carbs, @kcal, @wbt) ->
#     @ww = @carbs/10

class Activity
  constructor: (@time, @type) ->

class Note
  constructor: (@content) ->