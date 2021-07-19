const router = require("express").Router();
const { User } = require("../models");
const { Post } = require("../models");
const { Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment
          }
        ],
      });
      const post = postData.get({ plain: true });
      console.log(post)
      res.render('post', {
        ...post,
        user_id: req.session.user_id,
        user: req.session.username,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;