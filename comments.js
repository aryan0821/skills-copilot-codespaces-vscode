// Create web server

// Import modules

const express = require('express');
const router = express.Router();

// Import controllers

const commentsCtrl = require('../controllers/comments');

// Import middlewares

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes

router.post('/:id', auth, multer, commentsCtrl.createComment);
router.get('/:id', auth, commentsCtrl.getAllComments);
router.delete('/:id', auth, commentsCtrl.deleteComment);

// Export

module.exports = router;

