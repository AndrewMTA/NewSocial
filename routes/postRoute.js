const router = require('express').Router();
const Post = require('../model/Post');

router.post("/", (req, res) => {
    const { user, description } = req.body;

    const newPost = new Post({
      user,
      description
    });

    newPost
      .save()
      .then(doc => {
        doc.populate('user').then(doc => {
          console.log(doc)
          res.send(doc);
        })
        .catch(e => {
          console.log(e)
          res.status(400).json(e.message)
        });
      })
      .catch(e => {
        console.log(e)
        res.status(400).json(e.message)
      });
  });

  router.get("/", (req, res) => {
    const start = 0;

    Post.find()
      .sort({createdAt: 'desc'})
      .populate('user')
      .skip(start)
      .limit(30)
      .then((items) => res.json(items))
      .catch(e => {
        console.log(e)
        res.status(400).json(e.message)
      });
  });

  router.delete("/:id", (req, res) => {
    console.log(req.params);
    Post.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch(e => {
        console.log(e)
        res.status(400).json(e.message)
      });
  });

  module.exports = router
