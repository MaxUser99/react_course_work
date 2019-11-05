import React, {useEffect, useState} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  withMobileDialog
} from "@material-ui/core";
import {connect} from "react-redux";
import { editItem } from "store/actions";

const defaultPerson = {
  image: '',
  name: '',
  status: '',
  species: '',
};

const EditDialog = ({ fullScreen, isOpen, closeHandler, person, saveChanges }) => {
  const [editPerson, changeHandler] = useState(person || defaultPerson);

  useEffect(() => {
    changeHandler(person);
  }, [person]);

  const personDataChangeHandler = propName =>
    ({target: {value}}) => {
      changeHandler(prevVal => ({ ...prevVal, [propName]: value }));
    };

  const resetClickHandler = () => {
    changeHandler(person);
  };

  const saveChangesClickHandler = () => {
    saveChanges(editPerson);
    closeHandler();
  };

  if (!editPerson) return null;

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      onClose={closeHandler}
      open={isOpen}
      keepMounted={false}

    >
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Image URL"
          type="url"
          fullWidth
          value={editPerson.image}
          onChange={personDataChangeHandler("image")}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={editPerson.name}
          onChange={personDataChangeHandler("name")}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Status"
          type="text"
          fullWidth
          value={editPerson.status}
          onChange={personDataChangeHandler("status")}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Species"
          type="text"
          fullWidth
          value={editPerson.species}
          onChange={personDataChangeHandler("species")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>Cancel</Button>
        <Button type='reset' onClick={resetClickHandler}>Reset</Button>
        <Button onClick={saveChangesClickHandler}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = dispatch => ({
  saveChanges: changedItem => dispatch(editItem(changedItem))
});

export default withMobileDialog()(connect(null, mapDispatchToProps)(EditDialog));
