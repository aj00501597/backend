const Comment = require('../../mongoose/model/commentSchema');
const getAllCommentsController = async (req, res) => {
  try {
    let data = await Comment.find();
    res.status(200).send({
      success: true,
      response: data,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'error',
    });
  }
};

module.exports = getAllCommentsController;
