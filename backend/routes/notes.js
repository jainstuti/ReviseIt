const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const done = Boolean(req.body.done);

  const newNote = new Note({
    title,
    desc,
    done,
  });

  newNote.save()
  .then((savedNote) => res.json(savedNote.toJSON()))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Note.findById(req.params.id)
    .then(note => {
    note.title = req.body.title;
    note.desc = req.body.desc;
    note.done = Boolean(req.body.done);

    note.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;