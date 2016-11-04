const express = require('express');

const router = express.Router();

const controller = require('../controllers/bmController');

router.get('/bookmarks', controller.getAll);
router.get('/bookmarks/:id', controller.getOne);
router.post('/bookmarks', controller.add);
router.put('/bookmarks/:id', controller.modify);
router.delete('/bookmarks/:id', controller.remove);

module.exports = router;
