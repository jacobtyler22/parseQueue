var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
	return{
		request: function(config){
			config.headers = {'X-Parse-Application-Id': 'QGpLttoJWZgn3upkX6MKqZtOWsAOncrDSJRoA8ta', 'X-Parse-REST-API-Key': '1yJ3LbKR8Tb5judaIEtMvdk9SO9ApFImPleNpC3r'}
			return config;
		}
	}
})