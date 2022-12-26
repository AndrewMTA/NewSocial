const router = require('express').Router();
const User = require('../model/User');

// creating user

router.get('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({user})
  } catch (e) {
    res.status(400).send(e.message);
  }
});





router.post('/', async(req, res)=> {
  try {
    const {name, email, password, picture} = req.body;
    console.log(req.body);
    const user = await User.create({name, email, password, picture});
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if(e.code == 11000){
      msg = "User already exists"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg)
  }
})


//update bio
router.put('/:id', async(req, res)=> {

  try {
    const id = req.params.id
    const updates = req.body

    // https://stackoverflow.com/questions/30419575/mongoose-findbyidandupdate-not-returning-correct-model
    const result = await User.findByIdAndUpdate(id, updates, {new: true});
    res.send(result)
  } catch (error) {
    console.log(error.message)
  }
  })

// login user

router.post('/login', async(req, res)=> {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
})


module.exports = router
