(->

  'use strict'

  routeConfig = ($stateProvider) ->
    $stateProvider
      .state 'public', {
        abstract: true,
        templateUrl: 'public/public.html'
      }
      .state 'public.home', {
        url: '/',
        templateUrl: 'public/home/home.html'
      }
      .state 'public.menu', {
        url: '/menu',
        templateUrl: 'public/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: ['MenuService', (MenuService) ->
            MenuService.getCategories()]
        }
      }
      .state 'public.menuitems', {
        url: '/menu/{category}',
        templateUrl: 'public/menu-items/menu-items.html',
        controller: 'MenuItemsController',
        controllerAs: 'menuItemsCtrl',
        resolve: {
          menuItems: ['$stateParams','MenuService',
          ($stateParams,MenuService) ->
            MenuService.getMenuItems($stateParams.category)]
        }
      }
      .state 'public.signup', {
        url: '/signup',
        templateUrl: 'public/signup/signup.html',
        controller: 'SignUpController',
        controllerAs: 'signupCtrl'
      }
      .state 'public.myinfo', {
        url: '/my-info',
        templateUrl: 'public/my-info/my-info.html',
        controller: 'MyInfoController',
        controllerAs: 'infoCtrl',
        resolve: {
          user: ['UserService', (UserService) ->
            UserService.getUserInfo()]
        }
      }
    return

  routeConfig.$inject = ['$stateProvider']

  angular.module 'public'
  .config routeConfig

)()
