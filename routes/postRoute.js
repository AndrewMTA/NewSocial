const router = require('express').Router();
const Post = require('../model/Post');

router.post("/create", (req, res) => {
    const newPost = new Post({
      description: req.body.description,
    });
    
  
    newPost
      .save()
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
  router.get("/posts", (req, res) => {
    Post.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  });
  
  router.delete("/delete/:id", (req, res) => {
    console.log(req.params);
    Post.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

  module.exports = router