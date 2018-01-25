module.exports = (app, db) => {

	app.get('/tags', (req, res) => {					
		if (req.session.userid) {			
			db.Tag.findAll({
				where: {userId: req.session.userid}
			})
			.then((data) => {
				res.render('tags', {tags: data } )
			})
			.catch(e => {
				console.error('An error has occured:', e.stack)
			});
		} else {
		res.redirect("login")
		}	
	});
};
