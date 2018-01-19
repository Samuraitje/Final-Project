module.exports = (app, db) => {

	app.get("/", (req, res) => {
		res.render("login", { 
			title: 'Login'
		});
	});
};



// 	app.get("/", (req, res) => {
// 		if (req.session.user) {
// 		res.render("home")
// 		} else {
// 		res.redirect("login")
// 		};
// 	});
// };
