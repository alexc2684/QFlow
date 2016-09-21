Router.configure({
  layoutTemplate:"main"
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/play', function() {
  this.render('Play');
});
