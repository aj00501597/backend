const Comment = require('../../mongoose/model/commentSchema');
const addNewCommentController = async (req, res) => {
  try {
    let newData = new Comment({
      id: req.body.id,
      comment: req.body.comment,
    });
    let data = await newData.save();
    res.status(201).send({
      success: true,
      response: data,
      message: 'Comment added successfully',
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err,
    });
  }
};

module.exports = addNewCommentController;
