var Activity,App,Dose,Entry,Glue,Gui,LocalStorage,Meal,MealItem,Measurement,Note,SampleData,UseCase,User,__hasProp={}.hasOwnProperty,__bind=function(a,b){return function(){return a.apply(b,arguments)}};_.defaults(this,{Before:function(a,b,c){return YouAreDaBomb(a,b).before(c)},BeforeAnyCallback:function(a,b,c){return YouAreDaBomb(a,b).beforeAnyCallback(c)},After:function(a,b,c){return YouAreDaBomb(a,b).after(c)},Around:function(a,b,c){return YouAreDaBomb(a,b).around(c)},AfterAll:function(a,b,c){var d,e,f,g;g=[];for(e=0,f=b.length;e<f;e++)d=b[e],g.push(After(a,d,c));return g},LogAll:function(a){var b,c,d;d=[];for(b in a){if(!__hasProp.call(a,b))continue;c=a[b],_.isFunction(c)?d.push(function(b){return Before(a,b,function(){return console.log("calling: "+b)})}(b)):d.push(void 0)}return d},AutoBind:function(a,b){var c,d,e;e=[];for(c in a)d=a[c],_.isFunction(d)?e.push(function(c){if(c.endsWith("Clicked")&&b[c.remove("Clicked")])return After(a,c,function(a){return b[c.remove("Clicked")](a)})}(c)):e.push(void 0);return e}}),LocalStorage=function(){function a(a){this.namespace=a,this.flush=__bind(this.flush,this),this.remove=__bind(this.remove,this),this.get=__bind(this.get,this),this.set=__bind(this.set,this)}return a.prototype.set=function(a,b){return console.log(b),$.jStorage.set(""+this.namespace+"/"+a,b)},a.prototype.get=function(a){return $.jStorage.get(""+this.namespace+"/"+a)},a.prototype.remove=function(a){return $.jStorage.deleteKey(""+this.namespace+"/"+a)},a.prototype.flush=function(){var a,b,c,d,e;d=$.jStorage.index(),e=[];for(b=0,c=d.length;b<c;b++)a=d[b],a.match("^"+this.namespace)?e.push($.jStorage.deleteKey(a)):e.push(void 0);return e},a}(),UseCase=function(){function a(){this.entryFound=__bind(this.entryFound,this),this.getEntryToEdit=__bind(this.getEntryToEdit,this),this.setInitialEntries=__bind(this.setInitialEntries,this),this.getEntries=__bind(this.getEntries,this),this.start=__bind(this.start,this),this.entries=[]}return a.prototype.start=function(){return this.getEntries()},a.prototype.getEntries=function(){},a.prototype.setInitialEntries=function(a){return this.entries=a},a.prototype.getEntryToEdit=function(a){},a.prototype.entryFound=function(a){},a}(),Entry=function(){function a(a,b,c,d,e,f,g,h,i){var j;this.id=a,this.user=b,this.date=c,this.time=d,this.measurement=e,this.dose=f,this.meal=g,this.activity=h,this.note=i,arguments.length===0&&(j=new Date,this.date=""+j.getFullYear()+"-"+(j.getMonth()+1)+"-"+j.getDate(),this.time=""+j.getHours()+":"+j.getMinutes())}return a}(),User=function(){function a(a,b){this.id=a,this.name=b}return a}(),Measurement=function(){function a(a,b){this.value=a,this.type=b}return a}(),Dose=function(){function a(a,b){this.value=a,this.insulin_type=b}return a}(),Meal=function(){function a(a,b,c,d){this.meal_items=a,this.carbs=b,this.kcal=c,this.wbt=d,this.ww=this.carbs/10}return a.ww,a}(),MealItem=function(){function a(a,b,c,d,e){this.name=a,this.weight=b,this.carbs=c,this.kcal=d,this.wbt=e,this.ww=this.carbs/10}return a.ww,a}(),Activity=function(){function a(a,b){this.time=a,this.type=b}return a}(),Note=function(){function a(a){this.content=a}return a}(),Gui=function(){function a(){this.showEntryForm=__bind(this.showEntryForm,this),this.editEntryClicked=__bind(this.editEntryClicked,this),this.addNewEntryClicked=__bind(this.addNewEntryClicked,this),this.setEditEntryButton=__bind(this.setEditEntryButton,this),this.showEntries=__bind(this.showEntries,this),this.createElementFor=__bind(this.createElementFor,this)}return a.prototype.createElementFor=function(a,b){var c,d,e,f;return e=$(a).html(),f=Handlebars.compile(e),d=f(b),c=$(d)},a.prototype.showEntries=function(a){var b,c,d,e=this;c=this.createElementFor("#add-new-entry-button-template"),$(".main").append(c),d=this.createElementFor("#show-entries-template",{entries:a}),$(".main").append(d),b=$("#add-new-entry-button"),b.click(function(){return e.addNewEntryClicked()}),$(".edit-button").each(function(a,b){return e.setEditEntryButton($(b))})},a.prototype.setEditEntryButton=function(a){var b=this;console.log(a.attr("entry-id")),a.click(function(){return b.editEntryClicked(a.attr("entry-id"))})},a.prototype.addNewEntryClicked=function(){return this.showEntryForm(new Entry)},a.prototype.editEntryClicked=function(a){return console.log("edit entry clicked")},a.prototype.showEntryForm=function(a){var b;b=this.createElementFor("#entry-form-template",a),$(".main").append(b),$("#entry-form").dialog({autoOpen:!0,modal:!0,draggable:!1,resizable:!1,position:["center",300],width:700,buttons:{Ok:function(){return $("#entry-form").remove()}}}),$("#accordion").accordion({collapsible:!0}),$("#measurement-value-spinner").spinner({min:0,max:2e3}),$("#dose-value-spinner").spinner({step:.1,numberFormat:"n",culture:"pl-PL",min:.1,max:100}),$("#activity-time-spinner").spinner({min:1,max:1440}),$("#datepicker").datepicker()},a}(),SampleData=function(){function a(){this.entryFound=__bind(this.entryFound,this),this.getEntry=__bind(this.getEntry,this),this.entriesNotLoaded=__bind(this.entriesNotLoaded,this),this.entriesLoaded=__bind(this.entriesLoaded,this),this.getEntries=__bind(this.getEntries,this),this.entries=[],this.user1=new User(1,"Jan Kowalski"),this.entries.push(new Entry(0,this.user1,"2014-01-01","17:30",new Measurement(130,"przed posilkiem"),new Dose(5,"Humalog"),new Meal([new MealItem("pieczywo",60,30,180,.5),new MealItem("dzem",30,20,120,.5)],50,300,1),null,null)),this.entries.push(new Entry(1,this.user1,"2014-01-09","11:27",new Measurement(240,"po posilku"),new Dose(4,"Humalog"),null,null,new Note("Korekta"))),this.entries.push(new Entry(2,this.user1,"2014-01-15","22:56",new Measurement(45,"inny"),null,new Meal([new MealItem("sok",200,20,80,0)],20,80,0),null,new Note("Hipoglikemia")))}return a.prototype.getEntries=function(){return this.entries===[]&&this.entries===null?this.entriesNotLoaded():this.entriesLoaded(this.entries)},a.prototype.entriesLoaded=function(a){},a.prototype.entriesNotLoaded=function(){return console.log("entries not loaded")},a.prototype.getEntry=function(a){return this.entryFound(this.entries[a])},a.prototype.entryFound=function(a){},a}(),Glue=function(){function a(a,b,c){var d=this;this.useCase=a,this.gui=b,this.sampleData=c,After(this.useCase,"getEntries",function(){return d.sampleData.getEntries()}),After(this.sampleData,"entriesLoaded",function(a){return d.useCase.setInitialEntries(a)}),After(this.useCase,"setInitialEntries",function(a){return d.gui.showEntries(a)}),After(this.gui,"editEntryClicked",function(a){return d.useCase.getEntryToEdit(a)}),After(this.useCase,"getEntryToEdit",function(a){return d.sampleData.getEntry(a)}),After(this.sampleData,"entryFound",function(a){return d.useCase.entryFound(a)}),After(this.useCase,"entryFound",function(a){return d.gui.showEntryForm(a)}),LogAll(this.useCase),LogAll(this.gui),LogAll(this.sampleData)}return a}(),App=function(){function a(){var a,b,c,d,e=this;Handlebars.registerHelper("nullToString",function(a){return a===null?"":a}),d=new UseCase,window.useCase=d,b=new Gui,c=new SampleData,a=new Glue(d,b,c),d.start()}return a}(),new App