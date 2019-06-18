import React, {useState} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  withMobileDialog
} from "@material-ui/core";
import {connect} from "react-redux";
import { editItem } from "store/actions";

const EditDialog = ({fullScreen, isOpen, closeHandler, person, saveChanges}) => {
  const [newPerson, personChangeHandler] = useState(person);
  const personDataChangeHandler = propName =>
    ({target: {value}}) => {
      personChangeHandler({...newPerson, [propName]: value})
    };
  const resetClickHandler = () => {
    console.log("person: ", person);
    personChangeHandler(person)
  };

  const saveChangesClickHandler = () => {
    saveChanges(newPerson);
    closeHandler();
  };

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      onClose={closeHandler}
      open={isOpen}
    >
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Image URL"
          type="url"
          fullWidth
          value={newPerson.image}
          onChange={personDataChangeHandler("image")}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={newPerson.name}
          onChange={personDataChangeHandler("name")}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Status"
          type="text"
          fullWidth
          value={newPerson.status}
          onChange={personDataChangeHandler("status")}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Species"
          type="text"
          fullWidth
          value={newPerson.species}
          onChange={personDataChangeHandler("species")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>Cancel</Button>
        <Button onClick={resetClickHandler}>Reset</Button>
        <Button onClick={saveChangesClickHandler}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state, ownProps) => ({
  person: state.items.find(x => x.id == ownProps.personId)
});

const mapDispatchToProps = dispatch => ({
  saveChanges: changedItem => dispatch(editItem(changedItem))
});

export default withMobileDialog()(connect(mapStateToProps, mapDispatchToProps)(EditDialog));
