var express = require('express');
const router = express.Router();

const genres = [
    { id: 501, name: 'Drama' },
    { id: 502, name: 'Comedy' },
    { id: 503, name: 'Thriller' },
    { id: 503, name: 'Suspense' }
]

// GET Request: http://localhost:3000/genres
router.get('/', (req, res) => {
    res.send(genres)
})

// GET Request with Parameter: http://localhost:3000/genres/501
router.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id == req.params.id);
    if (!genre)
        return res.status(404).send('The genre with the given Id was not found.');
    res.send(genre);
})

module.exports = router;