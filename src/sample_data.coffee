class SampleData
  constructor: ->
    @entries = []
    @user1 = new User(1, "Jan Kowalski")
    
    @entries.push(new Entry(@user1, "2014-01-01", "17:30", new Measurement(130, "przed posilkiem"), 
                new Dose(5, "Humalog"), 
                new Meal([new MealItem("pieczywo", 60, 30, 180, 0.5), new MealItem("dzem", 30, 20, 120, 0.5)], 50, 300, 1),
                null,
                "Jakies cos" ))
    @entries.push(new Entry(@user1, "2014-01-09", "11:27", new Measurement(240, "po posilku"), 
                new Dose(4, "Humalog"),
                null, 
                null, 
                "Korekta"))
    @entries.push(new Entry(@user1, "2014-01-15", "22:56", new Measurement(45, "inny"), 
                null,
                new Meal([new MealItem("sok", 200, 20, 80, 0)], 20, 80, 0),
                null, 
                "Hipo"))
  getEntries: =>
    
    
    if (@entries == [] && @entries == null)
      @entriesNotLoaded()
    else
      @entriesLoaded(@entries)

  entriesLoaded: (entries) =>

  entriesNotLoaded: =>
    console.log("entries not loaded")

# class Entry
#   constructor: (@user, @date, @time, @measurement, @dose, @meal, @activity, @note) ->
# class User
#   constructor: (@id, @name) ->
# class Measurement
#   constructor: (@value, @type) ->
# class Dose
#   constructor: (@value, @insulin_type) ->
# class Meal
#   constructor: (@meals, @carbs, @kcal, @wbt) ->
# class MealItem
#   contructor: (@name, @weight, @carbs, @kcal, @wbt) ->
# class Activity
#   constructor: (@time, @type) ->
# class Note
#   constructor: (@content) ->