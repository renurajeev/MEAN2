var users = require('/home/renuka/MEANProjects/MEAN2/app/controllers/users.server.controller.js'),

	passport=require('passport');

module.exports=function(app){
app.route('/signup')
	.get(users.renderSignup)
	.post(users.signup);

app.route('/signin')
	.get(users.renderSignin)
	.post(passport.authenticate('local',{
	 successRedirect:'/',
	 failureRedirect:'/signin',
	 failureFlash:true
}));

app.get('/signout',users.signout);

};
/*module.exports = function(app) {
app.route('/users')
.post(users.create)
.get(users.list);

app.route('/users/:userId')
.get(users.read)
.put(users.update);
app.param('userId',users.userByID);
};*/
