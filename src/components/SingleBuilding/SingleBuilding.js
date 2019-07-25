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

  saveNewNote = (note) => {
    notesData.postNote(note)
      .then(() => {
        this.getNotes();
      });
  }

  render() {
    const { building } = this.props;
    const { notes } = this.state;
    return (
      <div className="SingleBuilding row">
        <div className="card m-3">
          <div className="card-body">
            <h4 className="card-title">{building.name}</h4>
            <h4 className="card-text">Year demolished: {building.yearDemolished}</h4>
            <a href={building.mapViewBefore} target="_blank" rel="noopener noreferrer">Map view before</a>
            <h4 className="card-text">Address: {building.address}</h4>
            <NotesCorral notes={ notes } deleteNote={this.deleteNote}/>
            <AddNoteForm buildingId = { building.id } saveNewNote={ this.saveNewNote } />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBuilding;
