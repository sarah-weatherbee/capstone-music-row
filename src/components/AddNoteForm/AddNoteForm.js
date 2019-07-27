import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class AddNoteForm extends React.Component {
  state = {
    newNote: '',
  }

formFieldStringState = (e) => {
  let tempNote = this.state.newNote;
  tempNote = e.target.value;
  this.setState({ newNote: tempNote });
}

noteChange = (e) => {
  this.formFieldStringState(e);
};

formSubmit = (e) => {
  e.preventDefault();
  const { saveNewNote } = this.props;
  const saveMe = { };
  saveMe.uid = firebase.auth().currentUser.uid;
  saveMe.buildingId = this.props.buildingId;
  saveMe.note = this.state.newNote;
  this.setState({ newNote: '' });
  saveNewNote(saveMe);
}

render() {
  const { newNote } = this.state;
  return (
    <div className="NewNote">
      <h1>new note</h1>
      <form onSubmit={this.formSubmit}>
        <div className="form-group">
          <label htmlFor="name-content">Note content</label>
          <input
          type="text"
          className="form-control"
          id="name-content"
          placeholder="type note here"
          value={newNote}
          onChange={this.noteChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
}

export default AddNoteForm;
