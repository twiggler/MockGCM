var impl = require("./Impl/response.js");

var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.post("/gcm/send", function(req, res) {
        if (req.body.text = 'Canonical') {
            impl.respondCanonical(req.body, res);            
        }
    });
    
}
 
module.exports = appRouter;