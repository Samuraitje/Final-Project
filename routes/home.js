module.exports = (app, db) => {

	app.get("/home", (req, res) => {
		if (req.session.userid) {
			res.render("home", {
				title: 'Home',
				user: req.session.user})
		} else {
			res.redirect("login", {
				title: 'Login'
			});
		};
	});

	app.post("/newMemo", (req, res) => {
		let ItemTag = db.Item.hasMany(db.Tag)
		let userItem = db.User.hasMany(db.Item)
		let userTag = db.User.hasMany(db.Tag)

		db.Item.create({
		     itemName: req.body.itemName,
		     userId: req.session.userid
		},{ 
			include: [{
				association: userItem
			}]
		})
		res.render("home")
	});
};
