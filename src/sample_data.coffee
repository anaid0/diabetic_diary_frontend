class SampleData
  constructor: ->
    @entries = []
    @user1 = new User(1, "Jan Kowalski")

    @entries.push(new Entry(0, @user1, "2014-01-01", "17:30", new Measurement(130, "przed posilkiem"), 
                new Dose(5, "Humalog"), 
                new Meal(50, 300),
                null,
                null ))
    @entries.push(new Entry(1, @user1, "2014-01-09", "11:27", new Measurement(240, "po posilku"), 
                new Dose(4, "Humalog"),
                null, 
                null, 
                new Note("Korekta")))
    @entries.push(new Entry(2, @user1, "2014-01-15", "22:56", new Measurement(45, "inny"), 
                null,
                new Meal(20, 80),
                null, 
                new Note("Hipoglikemia")))
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
    @entryFound(@entries[entryId])
  
  entryFound: (entry) =>