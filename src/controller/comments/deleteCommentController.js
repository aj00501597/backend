const Comment = require('../../mongoose/model/commentSchema');
const deleteCommentController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Comment.deleteOne({ id });
    res.status(201).send({
      success: true,
      response: data,
      message: 'Comment deleted successfully',
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err,
    });
  }
};

module.exports = deleteCommentController;
