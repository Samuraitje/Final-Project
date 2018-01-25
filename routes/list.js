module.exports = (app, db) => {

	app.get('/list', (req, res) => {					
		if (req.session.userid) {			
			db.Item.findAll({
				where: {userId: req.session.userid}
			})
			.then((data) => {
				res.render('list', {items: data } )
			})
			.catch(e => {
				console.error('An error has occured:', e.stack)
			});
		} else {
		res.redirect("login")
		}	
	});
};
