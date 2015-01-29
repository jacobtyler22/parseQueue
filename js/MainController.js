var app = angular.module('parseQ');

app.controller('MainController', function(parseService, $scope){
	$scope.questions = [];
	$scope.getQuestions = function(){
		parseService.getData().then(function(data){
			console.log(data);
			$scope.questions = data;
		});
	}
	$scope.getQuestions();

	$scope.addQuestion = function(){
		parseService.postData($scope.question).then(function(){
			$scope.getQuestions();
		})
	}

	$scope.changeStatus = function(id){
		parseService.updateData(id).then(function(){
			$scope.getQuestions();
		});
	}

	$scope.removeQuestion = function(id){
		parseService.deleteData(id).then(function(){
			$scope.getQuestions();
		});
	}
});