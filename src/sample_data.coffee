class SampleData
  constructor: ->
    @entries = []
    @user1 = new User(0, "Jan Kowalski")
    @insulinTypesLists = []
    @insulinTypesLists.push([new InsulinType("Humalog", "krótkodziałająca", "analog"), new InsulinType("Lantus", "długodziałająca", "analog"), new InsulinType("Humulin R", "krótkodziałająca", "ludzka")])
    @measurementTypesLists = []
    @measurementTypesLists.push([new MeasurementType("po posiłku"), new MeasurementType("przed posiłkiem"), new MeasurementType("na czczo"), new MeasurementType("przed snem"), new MeasurementType("inne")])
    @activities = []
    @activities.push([new ActivityType("bieganie", 700), new ActivityType("jeżdżenie rowerem", 600), new ActivityType("pływanie", 400)])

    @entries.push(new Entry(0, @user1, "2014-01-01", "17:30", 
                    new Measurement(130, @measurementTypesLists[0][1]), 
                    new Dose(5, @insulinTypesLists[0][2]), 
                    new Meal(50, 300),
                    null,
                    null ))
    @entries.push(new Entry(1, @user1, "2014-01-09", "11:27", 
                    new Measurement(240, @measurementTypesLists[0][0]), 
                    new Dose(4, @insulinTypesLists[0][0]),
                    null, 
                    null, 
                    new Note("Korekta")))
    @entries.push(new Entry(2, @user1, "2014-01-15", "22:56", 
                    new Measurement(45, @measurementTypesLists[0][4]), 
                    null,
                    new Meal(20, 80),
                    null, 
                    new Note("Hipoglikemia")))
    @entries.push(new Entry(3, @user1, "2014-02-13", "06:30", 
                    new Measurement(175, @measurementTypesLists[0][4]), 
                    null,
                    new Meal(15, 120),
                    new Activity(30, @activities[0][1]), 
                    new Note("Poranne bieganie")))
    #             new Meal([new MealItem("pieczywo", 60, 30, 180, 0.5), new MealItem("dzem", 30, 20, 120, 0.5)], 50, 300, 1),
    #             new Meal([new MealItem("sok", 200, 20, 80, 0)], 20, 80, 0),

  getEntries: =>
    if (@entries == [] && @entries == null)
      @entriesNotLoaded()
    else
      @entriesLoaded(@entries)

  entriesLoaded: (entries) =>

  entriesNotLoaded: =>
    console.log("entries not loaded")

  getEntry: (entryId) =>
    entry = @entries[entryId]
    @entryFound(entry, @loadInsulinTypes(entry.user.id), @loadMeasurementTypes(entry.user.id))
  
  entryFound: (entry, insulinTypes, measurementTypes, activityTypes) =>

  addEntry: (entry) =>
    @entries.push(entry)

  removeEntry: (entryId) =>
    @entries.remove(entryId)

  newEntry: ->
    entry = new Entry()
    entry.user = @user1
    @entryFound(entry, @loadInsulinTypes(entry.user.id), @loadMeasurementTypes(entry.user.id), @loadActivityTypes(entry.user.id))
  
  loadInsulinTypes: (userId) =>
    console.log("jestem w sampledata.loadInsulinTypes")
    if (@insulinTypesLists == null)
      @insulinTypesNotLoaded()
    else
      len = @insulinTypesLists.length
      if (len == 0 or userId >= len or userId < 0)
        return []
      else
        return @insulinTypesLists[userId]
    return []

  loadMeasurementTypes: (userId) =>
    console.log("jestem w sampledata.loadMeasurementTypes")
    if (@measurementTypesLists == null)
      @measurementTypesNotLoaded()
    else
      len = @measurementTypesLists.length
      if (len == 0 or userId >= len or userId < 0)
        return []
      else
        return @measurementTypesLists[userId]
    return []

  loadActivityTypes: (userId) =>
    console.log("jestem w sampledata.loadActivityTypes")
    if (@activities == null)
      @activityTypesNotLoaded()
    else
      len = @activities.length
      if (len == 0 or userId >= len or userId < 0)
        return []
      else
        return @activities[userId]
    return []