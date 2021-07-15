const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/community", async (req, res) => {
  try {
    res.render("community");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/my-block", async (req, res) => {
  try {
    res.render("my-block");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
