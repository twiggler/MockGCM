var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.post("/gcm/send", function(req, res) {
        res.send({
            multicast_id: 'multicast_id',
            success: 1,
            failure: 0,
            canonical_ids: 1,
            results: [
                {
                    message_id: 'message_id',
                    registration_id: 'registration_id',
                }
            ]    
        })
    });
    
}
 
module.exports = appRouter;