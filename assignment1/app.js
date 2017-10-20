(function() {
    'use strict';

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
        $scope.output = "";
        $scope.list = "";
        $scope.submit = function() {
            // Count the number of items in the list
            let count = 1;
            for (let c of $scope.list) {
                if (c == ',') ++count;
            }

            // Do stuff with the numbers
            if ($scope.list == "")
                $scope.output = "Please enter data first";
            else if (count <= 3)
                $scope.output = "Enjoy!";
            else
                $scope.output = "Too much!";
        };
    }
})();
