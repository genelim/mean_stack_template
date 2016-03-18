var user = require('./controllers/user');

module.exports = function(app) {
    app.get('/api/user', user.get_user);

    app.all('/*', function(req, res, next) {
        res.sendFile('../public/index.html', { root: __dirname });
    }); 
};

