const router = require('express').Router();
const store = require('../db/store');

// GET "/api/rsvps" responds with all rsvps from the database
router.get('/rsvps', (req, res) => {
    store
        .getRSVPs()
        .then((rsvps) => {
            return res.json(rsvps);
        })
        .catch((err) => res.status(500).json(err));
});

router.post('/rsvps', (req, res) => {
    store
        .addRSVP(req.body)
        .then((rsvp) => res.json(rsvp))
        .catch((err) => res.status(500).json(err));
});


module.exports = router;
