Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/About', function () {
  this.render('About');
});
Router.route('/news', function () {
  this.render('news');
});
