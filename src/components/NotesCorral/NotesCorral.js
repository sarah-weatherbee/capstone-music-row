import React from 'react';
import PropTypes from 'prop-types';
import noteShape from '../../helpers/propz/noteShape';
import SingleNote from '../SingleNote/SingleNote';

import './NotesCorral.scss';

class NotesCorral extends React.Component {
  static propTypes = {
    notes: PropTypes.arrayOf(noteShape.noteShape),
    deleteNote: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
  }

  render() {
    const noteComponents = this.props.notes.map(note => (
      <SingleNote
        key={note.id}
        note={note}
        deleteNote={this.props.deleteNote}
        editNote={this.props.editNote}
      />
    ));
    return (
      <div className="NotesCorral">
        <h4>Building Notes</h4>
        {noteComponents}
      </div>
    );
  }
}

export default NotesCorral;
