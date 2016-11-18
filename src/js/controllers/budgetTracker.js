angular.module('travelApp')
  .controller('BudgetTrackerController', BudgetTrackerController);

BudgetTrackerController.$inject = ['Trip', '$state'];

function BudgetTrackerController(Trip, $state) {
  const budgetTracker = this;

  budgetTracker.trip = Trip.get($state.params);
  budgetTracker.departDay = moment(budgetTracker.trip.departDate).format('DD');
  budgetTracker.departMonth = moment(budgetTracker.trip.departDate).format('MMM');

}
