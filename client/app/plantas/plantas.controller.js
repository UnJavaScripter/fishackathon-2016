'use strict';
(function(){

class PlantasComponent {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.plantas = [];



    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('planta');
    });
  }

  $onInit() {
    this.$http.get('/api/plantas').then(response => {
      this.plantas = response.data;
      this.socket.syncUpdates('planta', this.plantas);
    });

    this.resetModel();
  }

  addPlanta() {
    if (this.newPlanta) {
      console.log(this.newPlanta)
      this.$http.post('/api/plantas', this.newPlanta);
      this.resetModel();
    }
  }


  resetModel() {
    // Array hack ~ chambonada
    this.newPlanta = {};
    this.newPlanta.colloquial_names = [];
    this.newPlanta.pictures = [];
    this.newPlanta.location = [{lat: 4, lng: -74}];
  }

}

angular.module('fishackatonApp')
  .component('plantas', {
    templateUrl: 'app/plantas/plantas.html',
    controller: PlantasComponent
  });

})();
