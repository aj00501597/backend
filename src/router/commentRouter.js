const express = require('express');
const commentRouter = express.Router();
const getAllComments = require('../controller/comments/getAllCommentsController');
const getCommentById = require('../controller/comments/getCommentController');
const addComment = require('../controller/comments/addNewCommentController');
const deleteComment = require('../controller/comments/deleteCommentController');
const updateComment = require('../controller/comments/updateCommentController');

commentRouter.get('/comment', getAllComments); //Get all comments
commentRouter.get('/comment/:id', getCommentById); //Get comment with specific id
commentRouter.post('/comment', addComment); //Add comment
commentRouter.put('/comment/:id', updateComment); //Update comment with specific id
commentRouter.delete('/comment/:id', deleteComment); //Delete comment with specific id

module.exports = commentRouter;
