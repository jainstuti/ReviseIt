import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };
  const handleDescChange = ({ target }) => {
    setDesc(target.value);
  };
  const handleSave=()=>{
      console.log(title);
    let todo={
        id: props.id,
        title: title,
        desc: desc, 
        done: props.done
    }
    props.editTodo(todo)
    setOpen(false);
  }

  return (
    <div>
      <button onClick={handleClickOpen}>Edit</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            defaultValue={props.title}
            onChange={handleTitleChange}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            onChange={handleDescChange}
            defaultValue={props.desc}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
