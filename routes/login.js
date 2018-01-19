module.exports = (app, db, bcrypt) => {
	
	app.get('/login', (req, res) => {
		res.render('home', {
			title: 'Home',
		});
	});
};





// app.get('/login', (req, res) => {
// 		if (req.session.userid) {
// 			res.render('home', { 
// 				title: 'Home',
// 				user: req.session.user } )
// 		} else {
// 			res.render('login', {
// 				title: 'Login'
// 			})
// 		}
// 	});


