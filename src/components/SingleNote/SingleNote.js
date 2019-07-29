import React from 'react';
import PropTypes from 'prop-types';
import noteShape from '../../helpers/propz/noteShape';
import './SingleNote.scss';

class SingleNote extends React.Component {
  static propTypes = {
    building: noteShape.noteShape,
    deleteNote: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
  }

  state = {
    isEditing: false,
    note: {
      uid: '',
      buildingId: '',
      note: '',
      id: '',
    },
  }


  componentDidMount() {
    this.setState({ note: this.props.note });
  }

  deleteNoteEvent = (e) => {
    const { note, deleteNote } = this.props;
    e.preventDefault();
    deleteNote(note.id);
  }

  editNoteToggle = (e) => {
    e.preventDefault();
    this.setState({ isEditing: true });
  }

  editNoteEvent = (e) => {
    e.preventDefault();
    this.props.editNote(this.state.note);
    this.setState({ isEditing: false });
  }

  cancelNoteEvent= (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  }

  formFieldStringState = (name, e) => {
    const tempNote = { ...this.state.note };
    tempNote[name] = e.target.value;
    this.setState({ note: tempNote });
  }

  noteChange = e => this.formFieldStringState('note', e);


  render() {
    const { isEditing, note } = this.state;
    return (
      <div className="SingleNote">
        <div className="card m-3 col-sm-12 col-lg-12">

            {isEditing ? (
              <div className="card-body">
                <button className="btn-xs btn-primary" onClick={this.cancelNoteEvent}>cancel edit</button>
                <input value={note.note} onChange={this.noteChange}/>
                <button className="btn btn-secondary" onClick={this.editNoteEvent}>Submit</button>
              </div>
            ) : (
              <div className="card-body">
                <h6 className="card-text">{note.note}</h6>
                <button className="btn btn-primary" onClick={this.editNoteToggle}>Edit Note</button>
                <button className="btn btn-danger" onClick={this.deleteNoteEvent}>x</button>
              </div>
            ) }
        </div>
      </div>
    );
  }
}

export default SingleNote;
