


//  var App = angular.module('workshop',[]);
   
//    App.controller('workshopController',function($scope) {
//          console.log("yes");

//     var a = "kk";
//         console.log("yes"+a);
//    });


var mainApp = angular.module ('workshop', ['ngRoute']);


 mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/', {
               templateUrl: 'pages/home.html',
               controller: 'workshopController'
            }).
            
            when('/about', {
               templateUrl: 'pages/about.html',
               controller: 'aboutController'
            }).
             when('/contact', {
               templateUrl: 'pages/contact.html',
               controller: 'contactController'
            }).
            otherwise({
               redirectTo: '/'
            });
         }]);

mainApp.controller('workshopController',function ($scope) {
  console.log("Main Controller is working");
});
mainApp.controller('homeColltroler',function ($scope) {
  console.log("Home Controller called");

$scope.submit =function() {
                // $scope.shah =studentSetup.studenOne.admission;
                console.log("Submit function send request of post");
                console.log($scope.admission);

    //     $http.post('/home',$scope.admission).success(function(response) {
    //     console.log(response);
    //     console.log("http here");
    //     // $location.path("/");
    //     //    $window.location.href = '/';
    //     //  alert('Add data in Patient');
    // });
    
        
        //$scope.contactsArray.push();//pushing your object here     

    };
  
});

mainApp.controller('aboutController',function ($scope) {
   console.log("About Controller called");



     
});



mainApp.controller('contactController',function ($scope) {
   console.log("contactController");

$scope.submit =function() {
                // $scope.shah =studentSetup.studenOne.admission;
                console.log("Here controller send requst to server on submit button click");
                console.log($scope.admission);

    //     $http.post('/home',$scope.admission).success(function(response) {
    //     console.log(response);
    //     console.log("http here");
    //     // $location.path("/");
    //     //    $window.location.href = '/';
    //     //  alert('Add data in Patient');
    // });
    
        
        //$scope.contactsArray.push();//pushing your object here     

    };

     
});