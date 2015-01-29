 var app = angular.module('parseQ');

app.service('parseService', function($http, $q){

	this.postData = function(quest){
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/testapp',
			headers: {
				'X-Parse-Application-Id': 'QGpLttoJWZgn3upkX6MKqZtOWsAOncrDSJRoA8ta',
				'X-Parse-REST-API-Key': '1yJ3LbKR8Tb5judaIEtMvdk9SO9ApFImPleNpC3r'
			},
			data: {text: quest, status: 'red'}
		});
	}

	this.getData = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/testapp',
			headers: {
				'X-Parse-Application-Id': 'QGpLttoJWZgn3upkX6MKqZtOWsAOncrDSJRoA8ta',
				'X-Parse-REST-API-Key': '1yJ3LbKR8Tb5judaIEtMvdk9SO9ApFImPleNpC3r'
			}
		}).then(function(data){
			dfd.resolve(data.data.results);
		});
		return dfd.promise;
	}

	this.updateData = function(id){
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/testapp/'+id,
			headers: {
				'X-Parse-Application-Id': 'QGpLttoJWZgn3upkX6MKqZtOWsAOncrDSJRoA8ta',
				'X-Parse-REST-API-Key': '1yJ3LbKR8Tb5judaIEtMvdk9SO9ApFImPleNpC3r'
			},
			data: {status: 'yellow'}
		});
	}

	this.deleteData = function(id){
		return $http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/testapp/'+id,
			headers: {
				'X-Parse-Application-Id': 'QGpLttoJWZgn3upkX6MKqZtOWsAOncrDSJRoA8ta',
				'X-Parse-REST-API-Key': '1yJ3LbKR8Tb5judaIEtMvdk9SO9ApFImPleNpC3r'
			}
		});
	}

});