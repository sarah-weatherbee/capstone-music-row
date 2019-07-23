import React from 'react';
import PropTypes from 'prop-types';
import noteShape from '../../helpers/propz/noteShape';
import './SingleNote.scss';

class SingleNote extends React.Component {
  static propTypes = {
    building: noteShape.noteShape,
    deleteNote: PropTypes.func.isRequired,
  }

  deleteNoteEvent = (e) => {
    const { note, deleteNote } = this.props;
    e.preventDefault();
    deleteNote(note.id);
  }

  render() {
    const { note } = this.props;
    return (
      <div className="SingleNote">
        <div className="card m-3">
          <div className="card-body">
            <h4 className="card-text">{note.note}</h4>
            <button className="btn btn-danger" onClick={this.deleteNoteEvent}>x</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleNote;
