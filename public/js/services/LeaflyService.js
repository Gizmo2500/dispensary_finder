angular.module('LeaflyService', [])

.factory('leafly', ['$http', function($http) {
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $http.defaults.headers.post["app_id"] = "32488d31";
  $http.defaults.headers.post["app_key"] = "514c317ccb2edfd531acaa8b2c220dcd";
  return {
    getStrains: function () {
      return $http.post('http://data.leafly.com/strains', {
        "Page":0,
        "Take":50
      })
    },

    getLocations: function (position, selector) {
      var params = "page=0&take=50"

      if (position && position.lat() && position.lng()){
        params += "&latitude=" + position.lat() + "&longitude=" + position.lng();
      }
      
      if (selector) {
        params += "&" + selector + "=true";
      }

      return $http.post('http://data.leafly.com/locations', params);
    }

  }
}]);