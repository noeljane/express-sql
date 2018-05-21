const express = require('express');
const DoggieRouter = express.Router();
const Dog = require('.././models/dog');


DoggieRouter.get('/', (req, res) => {
  Dog.find().then((dogs) => {
    res.json(dogs);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something Went Wrong'})
  });
});

DoggieRouter.get('/:id', (req, res) => {
  //one or none prevents SQL injection
  Dog.findById(req.params).then((dog) => {
    res.json(dog);
  }).catch((error) => {
    console.log(error);
    res.status(400).json({message: 'Bad Request'})
  });
});

DoggieRouter.post('/', (req, res) => {
  Dog.save(req.body).then((dog) => {
    res.json(dog);
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'Something went wrong'})
    });
});

DoggieRouter.put('/:id', (req, res) => {
  Dog.findByIdAndUpdate(req.params, req.body).then((dog) => {
    res.json(dog)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong.'})
  });
});

DoggieRouter.delete('/:id', (req, res) => {
  Dog.findByIdAndRemove(req.params).then((dog) => {
    res.json({message: "dog deleted", dog:dog})
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'Something went wrong.'})
  })
})



module.exports = DoggieRouter
