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
    const [street, city, state] = building.address.split(', ');

    return (
      <div className="SingleBuilding container col-lg-4">
        <div className="row">
        <div className="card m-4">
        <img src={building.imgUrl} className="card-img-top image" alt="building"/>
          <div className="card-body">
            <h4 className="card-title building-name">{building.name}</h4>
            <h6 className="card-text justify-content-start address">{street}</h6>
            <h6 className="card-text justify-content-start address">{`${city}, ${state}`}</h6>
            <h5 className="card-text justify-content-start demolished">Year demolished: {building.yearDemolished}</h5>
            <a href={building.mapViewBefore} target="_blank" rel="noopener noreferrer" className="d-flex justify-content-start mb-2">Map view before</a>
            <NotesCorral notes={ notes } deleteNote={this.deleteNote} editNote={this.editNote}/>
            {isNew ? (
              <AddNoteForm buildingId = { building.id } saveNewNote={ this.saveNewNote }
              toggleForm={this.toggleAddNote}/>
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
