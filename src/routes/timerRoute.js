const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController.js");
const jwtMiddleware = require("../middlewares/jwtMiddleware.js");

router
  .route("/")
  .get(postController.listAllPosts)
  .post(postController.createPost);

router
  .route("/:id_post")
  .get(postController.getPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
