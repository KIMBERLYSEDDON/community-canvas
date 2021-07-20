const router = require("express").Router();
const { User } = require("../models");
const { Post } = require("../models");
const { Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
        },
      ],
    });
    const post = postData.get({ plain: true });
    for (let i = 0; i < post.comments.length; i++) {
      if (post.comments[i].username === req.session.username) {
        post.comments[i].displayDelete = true;
      }
    }

    console.log("THIS", post);
    res.render("post", {
      ...post,
      user_id: req.session.user_id,
      userLoggedIn: req.session.username,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
