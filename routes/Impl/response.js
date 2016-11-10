exports.respondCanonical = function(message, res) {
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
    });
};