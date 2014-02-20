class Entry
  constructor: (@id, @user, @date, @time, @measurement, @dose, @meal, @activity, @note) ->
    if arguments.length == 0
      now = new Date
      @date = "#{now.getFullYear()}-#{now.getMonth()+1}-#{now.getDate()}"
      @time = "#{now.getHours()}:#{now.getMinutes()}"

class User
  constructor: (@id, @name, @insulinTypes = [], @measurementTypes = [], @activityTypes = []) ->

class Measurement
  constructor: (@value, @type) ->

class Dose
  constructor: (@value, @insulin_type) ->

class Meal
  constructor: (@carbs, @kcal) ->
    @ww = @carbs / 10
    @wbt = (@kcal - @carbs * 4) / 100
    if @wbt < 0 then @wbt = 0
# class Meal
#   @ww
#   constructor: (@meal_items, @carbs, @kcal, @wbt) ->
#     @ww = @carbs/10

# class MealItem
#   @ww
#   constructor: (@name, @weight, @carbs, @kcal, @wbt) ->
#     @ww = @carbs/10

class Activity
  constructor: (@minutes, @type) ->
    @kcal = @type.kcal_per_hour * @minutes / 60 

class Note
  constructor: (@content) ->

class InsulinType
  constructor: (@name, @acting, @type) ->
    @description = "#{@name} (#{@type}, #{@acting})"

class MeasurementType
  constructor: (@name) ->

class ActivityType
  constructor: (@name, @kcal_per_hour) ->
