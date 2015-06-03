var app = angular.module('movieapp',  ['ngRoute', 'ngMessages', 'ngSanitize', 'ngCookies']);

app.controller('MainCtrl', function ($scope, $http) {
		$scope.test = 'hello wordl';

		//新增
		$scope.postMovie = function ($http) {
			var moive = { 'name': $scope.name, 'type': $scope.type, 'date': $scope.date };
			console.log(moive);
			$http({
				url: '/upsnail',
				method: "POST",
				data: JSON.stringify(moive),
				headers: { 'Content-Type': 'application/json' }
			}).success(function (data, status, headers, config) {
                    console.log(data);
			});
		};
	}
);
//
//app.factory('dataService', ['$http', function ($http) {
//    var serviceBase = '/Check/',
//                    dataFactory = {};
//    dataFactory.checkUniqueValue = function (property, value) {
//        return $http.get(serviceBase + 'UniqueCheck/?property=' +
//                      property + '&value=' + escape(value)).then(
//                        function (results) {
//                            if (results.status == 200) {
//                                return results.data;
//                            }
//                            else {
//                                return "系统异常" + results.data;
//                            }
//                        });
//    };
//    return dataFactory;
//} ]);

