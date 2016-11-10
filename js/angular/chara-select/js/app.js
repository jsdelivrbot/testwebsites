(function() {
    var app = angular.module("charaSelect", []);

    app.directive('charaDisplay', function() {
        return {
            restrict: 'E',
            templateUrl: 'chara-display.html',
            controller: ['$http', function($http) {
                var character = this;
                character.stats = [];
                $http.get('js/characters.json').success(function(data){
                    character.stats = data;
                });
            }],
            controllerAs: 'characters'
        };
    });

})();