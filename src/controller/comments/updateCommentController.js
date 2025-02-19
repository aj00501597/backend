const Comment = require('../../mongoose/model/commentSchema');
const updateCommentController = async (req, res) => {
  try {
    let id = req.params.id;
    // let newData = new Comment({
    //   id: req.body.id,
    //   comment: req.body.comment,
    // });
    let data = await Comment.updateOne({ id }, { comment: req.body.comment });
    res.status(201).send({
      success: true,
      response: data,
      message: 'Comment updated successfully',
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err,
    });
  }
};

module.exports = updateCommentController;
