const router = require('express').Router();
const auth = require('../middlewares/auth');
let Note = require('../models/note.model');

router.route('/').get(auth, (req, res) => {
  console.log("**********");
  console.log(req.userId);
  console.log("**********");
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(auth, (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const done = Boolean(req.body.done);
  // const authorId = localStorage.getItem('profile')?JSON.parse(localStorage.getItem('profile')).result._id: "";
  const authorId=req.userId;
  console.log("idd");
  console.log(authorId);
  console.log("idd");

  const newNote = new Note({
    title,
    desc,
    done,
    authorId
  });

  newNote.save()
  .then((savedNote) => res.json(savedNote.toJSON()))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(auth, (req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete(auth, (req,res) => {
Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(auth, (req, res) => {
Note.findById(req.params.id)
    .then(note => {
    note.title = req.body.title;
    note.desc = req.body.desc;
    note.done = Boolean(req.body.done);
    note.authorId = req.body.authorId;

    note.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;