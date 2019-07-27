import React from 'react';
import buildingShape from '../../helpers/propz/buildingShape';
import notesData from '../../helpers/data/notesData';
import NotesCorral from '../NotesCorral/NotesCorral';
import AddNoteForm from '../AddNoteForm/AddNoteForm';

import './SingleBuilding.scss';


class SingleBuilding extends React.Component {
  static propTypes = {
    building: buildingShape.buildingShape,
  }

  state = {
    notes: [],
    isNew: false,
  }

  getNotes = () => {
    const buildingId = this.props.building.id;

    notesData.getNotes(buildingId)
      .then(notes => this.setState({ notes }))
      .catch(err => console.error('no notes from SingleBuilding', err));
  }

  componentDidMount() {
    this.getNotes();
  }

  deleteNote = (noteId) => {
    notesData.deleteNote(noteId)
      .then(() => this.getNotes())
      .catch(err => console.error('error deleting', err));
  }

  editNote = (note) => {
    const newNote = { ...note };
    const noteId = newNote.id;
    delete newNote.id;
    notesData.editNote(noteId, newNote)
      .then(() => this.getNotes())
      .catch(err => console.error('error editing', err));
  }

  saveNewNote = (note) => {
    notesData.postNote(note)
      .then(() => {
        this.getNotes();
        this.toggleAddNote();
      });
  }

  toggleAddNote = () => {
    this.setState({ isNew: !this.state.isNew });
  }


  render() {
    const { building } = this.props;
    const { notes, isNew } = this.state;

    return (
      <div className="SingleBuilding container col-4">
        <div className="row">
        <div className="card m-3">
          <div className="card-body">
            <h4 className="card-title">{building.name}</h4>
            <h4 className="card-text">Year demolished: {building.yearDemolished}</h4>
            <a href={building.mapViewBefore} target="_blank" rel="noopener noreferrer">Map view before</a>
            <h4 className="card-text">Address: {building.address}</h4>
            <NotesCorral notes={ notes } deleteNote={this.deleteNote} editNote={this.editNote}/>
            {isNew ? (
              <AddNoteForm buildingId = { building.id } saveNewNote={ this.saveNewNote } />
            ) : (
              <button className="btn btn-secondary" onClick={this.toggleAddNote}>Add a note</button>
            )}

          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBuilding;
