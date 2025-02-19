const Comment = require('../../mongoose/model/commentSchema');
const getCommentController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Comment.find({ id });
    res.status(201).send({
      success: true,
      response: data,
      message: 'Comment fetched successfully',
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err,
    });
  }
};

module.exports = getCommentController;
