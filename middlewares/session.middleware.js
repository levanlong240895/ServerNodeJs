const shortid = require('shortid');
// var db = require('../db')
var Session = require('../models/session.model')

module.exports = async (req, res, next) => {
    if (!req.signedCookies.sessionId) {
        var sessionId = shortid.generate()
        res.cookie('sessionId', sessionId, {
            signed: true
        })
        // db.get('sessions').push({ id: sessionId }).write()
        // db.get('sessions').set('id', [
        //     {
        //         "id": "odanufdak"
        //     }
        // ]).write()

        await Session.updateOne({ sessionId: sessionId })

        // db.set('sessions', [
        //     {
        //         "id": sessionId
        //     }
        // ])
        //     .write()
    }


    next()
}