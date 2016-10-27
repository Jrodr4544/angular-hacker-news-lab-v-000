angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'index.html',
        controller: 'NewsController as news',
        // posts: "NewsService",
        resolve: {
          news: function ($http) {
            return $http.get('http://localhost:8080/top');
            // return posts.getNews()
            // return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'index.html',
        controller: 'NewsController as news',
        resolve: {
          news: function (NewsService, $stateParams) {
            return $http.get('https://hacker-news.firebaseio.com/v0/item/'+$stateParams.id+'.json');
          }
        }          
      })
  })
