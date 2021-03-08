const router = require('express').Router();
let Books = require('../model/books')

//get request to run the mongoose command, finds the books in the data base and returns a json respinse or gives an error
router.route('/').get((req, res) =>  {
    Books.find()
     .then(books=> res.json(books))
     .catch(err => res.status(400).json('error' + err))
});


router.route('/add').post((req, res) => {
    const title = req.body.title;
    const authors = req.body.authors;
    const link = req.body.link;
    const description = req.body.description;
    const image = req.body.image;

    //create a new instance of book
    const newBooks = new Books({
        title,
        authors,
        link,
        description,
        image,
    });

    newBooks.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('error ' + err));
});

router.route('/:id').get((req, res) => {
    Books.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Books.findByIdAndDelete(req.params.id)
      .then(() => res.json('Book deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Books.findById(req.params.id)
      .then(data => {
        data.title = req.body.title;
        data.authors = req.body.authors;
        data.links = req.body.links;
        data.description = req.body.description;
        data.image = req.body.image;
  
        data.save()
          .then(() => res.json('Book updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;


