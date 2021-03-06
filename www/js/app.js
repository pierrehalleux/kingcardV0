// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.myshop', {
    url: "/myshop",
    views: {
      'menuContent': {
        templateUrl: "templates/myshop.html"
      }
    }
  })

.state('app.shopDetails', {
  url: "/shopDetails",
  views: {
    'menuContent': {
      templateUrl: "templates/shopDetails.html"
    }
  }
})


  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html"
      }
    }
  })
  
  
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })
  
  /*.state('app.rewards', {
    url: "/rewards",
    views: {
      'menuContent': {
        templateUrl: "templates/rewards.html"
      }
    }
  })*/
  
  .state('app.logout', {
    url: "/logout",
    views: {
      'menuContent': {
        templateUrl: "templates/logout.html"
      }
    }
  })
  
  .state('app.help', {
    url: "/help",
    views: {
      'menuContent': {
        templateUrl: "templates/help.html"
      }
    }
  })
  
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

.state('app.enter_points', {
  url: "/enter_points",
  views: {
    'menuContent': {
      templateUrl: "templates/enter_points.html",
      controller: 'PlaylistsCtrl'
    }
  }
})

.state('app.register', {
  url: "/register",
  views: {
    'menuContent': {
      templateUrl: "templates/register.html",
      controller: 'PlaylistsCtrl'
    }
  }
})


  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
