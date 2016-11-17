angular.module('travelApp')
  .controller('LocationsEditController', LocationsEditController)
  .controller('LocationsNewController', LocationsNewController);

//////new
LocationsNewController.$inject = ['Location', '$state'];

function LocationsNewController(Location, $state) {
  const locationsNew = this;
  locationsNew.location = {};

  function createLocation() {
    locationsNew.location.images = [locationsNew.location.tempImage.one, locationsNew.location.tempImage.two, locationsNew.location.tempImage.three];
    Location.save(locationsNew.location, () => {
      $state.go('login');
    });
  }
  locationsNew.createLocation = createLocation;
}

//edit
LocationsEditController.$inject = ['Location', '$state'];

function LocationsEditController(location, $state) {
  const locationsEdit = this;
  locationsEdit.location = location.get($state.params);

  function update() {
    location.update({ id: locationsEdit.location._id }, locationsEdit.location, () => {
      $state.go('login', $state.params);


    });
  }

  this.update = update;
}