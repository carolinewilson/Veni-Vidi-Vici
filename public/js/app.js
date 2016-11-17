<<<<<<< HEAD
"use strict";function Router(o,t){o.state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("home",{url:"/",templateUrl:"/templates/home.html",controller:"LocationsIndexController as locationsIndex"}).state("locationsShow",{url:"/locations/:id",templateUrl:"/templates/locationsShow.html",controller:"LocationsShowController as locationsShow"}),t.otherwise("/")}function Auth(o){o.loginUrl="/login",o.signupUrl="/register",o.tokenPrefix=""}function RegisterController(o,t){function e(){o.signup(n.user).then(function(){t.go("locations")})}var n=this;n.user={},n.submit=e}function LoginController(o,t){function e(){o.login(n.credentials).then(function(){t.go("locations")})}var n=this;n.credentials={},n.submit=e}function LocationsIndexController(o){var t=this;t.all=o.query(),console.log(t)}function Location(o){return new o("/locations/:id",{id:"@_id"},{update:{method:"PUT"}})}function LocationsShowController(o,t){var e=this;e.location=o.get(t.params),console.log(e.location)}function MainController(o,t){function e(){o.logout().then(function(){t.go("login")})}var n=this;n.isLoggedIn=o.isAuthenticated,n.logout=e}angular.module("travelApp",["ngResource","ui.router","satellizer"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("travelApp").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("travelApp").controller("LocationsIndexController",LocationsIndexController),LocationsIndexController.$inject=["Location"],angular.module("travelApp").factory("Location",Location),Location.$inject=["$resource"],angular.module("travelApp").controller("LocationsShowController",LocationsShowController),LocationsShowController.$inject=["Location","$state"],angular.module("travelApp").controller("MainController",MainController),MainController.$inject=["$auth","$state"];
=======
"use strict";function Router(e,t){e.state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("budgetPlanner",{url:"/locations/:id/budget",templateUrl:"/templates/budgetPlanner.html",controller:"BudgetPlannerController as budgetPlanner"}),t.otherwise("/")}function Auth(e){e.loginUrl="/login",e.signupUrl="/register",e.tokenPrefix=""}function RegisterController(e,t){function r(){e.signup(n.user).then(function(){t.go("home")})}var n=this;n.user={},n.submit=r}function LoginController(e,t){function r(){console.log("login"),e.login(n.credentials).then(function(){t.go("home")})}var n=this;n.credentials={},n.submit=r}function BudgetPlannerController(e,t,r,n,o,i){function l(){s.newTrip.flightCost=500}function a(){s.newTrip.totalCost=s.newTrip.flightCost+s.newTrip.expenses+s.newTrip.accomCost-s.newTrip.totalSavings,s.newTrip.location=s.location._id,console.log(s.newTrip);var e=s.isLoggedIn();e?(console.log("Logged in!"),s.newTrip.$update(function(){console.log(s.newTrip)})):(console.log("Logged out!"),i.saveTrip(s.newTrip),alert("You need to be signed in to save a trip"),r.go("register"))}var s=this;s.isLoggedIn=o.isAuthenticated,s.newTrip={},e.get(r.params,function(e){s.newTrip={departDate:"2017-01-01",returnDate:"2017-01-20",origin:"LGW",destination:e.closestAirport,duration:1,flightCost:0,accomCost:0,expenses:0,totalSavings:0,totalCost:0}}),s.newTrip.totalCost=s.newTrip.flightCost+s.newTrip.expenses+s.newTrip.accomCost-s.newTrip.totalSavings,s.createTrip=a,s.getFlights=l}function FlightService(e){function t(t,r,n,o){return e({method:"GET",url:"/flights",params:{origin:t,destination:r,departDate:n,returnDate:o}}).then(function(e){return e.data},function(e){console.log(e)})}this.getPrice=t}function Location(e){return new e("/locations/:id",{id:"@_id"},{update:{method:"PUT"}})}function MainController(e,t){function r(){e.logout().then(function(){t.go("login")})}var n=this;n.isLoggedIn=e.isAuthenticated,n.logout=r}function Trip(e){return new e("/trips/:id",{id:"@_id"},{update:{method:"PUT"}})}function TripService(e){function t(t){e.localStorage.setItem("tripData",JSON.stringify(t))}function r(){return JSON.parse(e.localStorage.getItem("tripData"))}function n(){return e.localStorage.removeItem("tripData")}this.saveTrip=t,this.getTrip=r,this.deleteTrip=n}angular.module("travelApp",["ngResource","ui.router","satellizer"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("travelApp").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("travelApp").controller("BudgetPlannerController",BudgetPlannerController),BudgetPlannerController.$inject=["Location","Trip","$state","FlightService","$auth","TripService"],angular.module("travelApp").service("FlightService",FlightService),FlightService.$inject=["$http"],angular.module("travelApp").factory("Location",Location),Location.$inject=["$resource"],angular.module("travelApp").controller("MainController",MainController),MainController.$inject=["$auth","$state"],angular.module("travelApp").factory("Trip",Trip),Trip.$inject=["$resource"],angular.module("travelApp").service("TripService",TripService),TripService.$inject=["$window"];
>>>>>>> development
//# sourceMappingURL=app.js.map
