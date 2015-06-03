var app = angular.module('movieapp', []);

app.controller('MainCtrl', function ($scope, $http) {
	$scope.test = 'hello www.upsnail.com';

	//新增
	$scope.postMovie = function () {
		var moive = { 'name': $scope.name, 'type': $scope.type, 'date': $scope.date };
		$http({
			url: '/upsnail',
			method: "POST",
			data: JSON.stringify(moive),
			headers: { 'Content-Type': 'application/json' }
		}).success(function (data, status, headers, config) {
			if (status == 200) {
				alert('新增成功!');
			}
		}).error(function (data, status, headers, config) {
			alert('系统异常!');
		});

	};
		
	//删除电影
	$scope.delMovie = function () {
		if ($scope.del_id != '') {
			$http.delete('/upsnail/' + $scope.del_id).
				success(function (data, status, headers, config) {
				if (status == 200) {
					alert('删除成功!');
				}
			}).error(function (data, status, headers, config) {
				alert('系统异常!');
			});
		}
	};
	
	//获取电影
	$scope.getMovie = function () {
		if ($scope.search_id != '') {
			$http.get('/upsnail/' + $scope.search_id).
				success(function (data, status, headers, config) {
				if (status == 200) {
					console.log(data);
				}
			}).error(function (data, status, headers, config) {
				alert('系统异常!');
			});
		}
	};
	
	//更新电影上映时间
	$scope.updateMovie = function () {
		if ($scope.update_id != '') {
			$http.put('/upsnail/' + $scope.update_id).
				success(function (data, status, headers, config) {
				if (status == 200) {
					console.log(data);
				}
			}).error(function (data, status, headers, config) {
				alert('系统异常!');
			});
		}
	};

});
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

