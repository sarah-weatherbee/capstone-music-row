import React from 'react';
import PropTypes from 'prop-types';
import noteShape from '../../helpers/propz/noteShape';
import SingleNote from '../SingleNote/SingleNote';

import './NotesCorral.scss';

class NotesCorral extends React.Component {
  static propTypes = {
    notes: PropTypes.arrayOf(noteShape.noteShape),
  }

  render() {
    const noteComponents = this.props.notes.map(note => (
      <SingleNote key={note.id} note={note} />
    ));
    return (
      <div className="NotesCorral">
        <h1>Notes</h1>
        {noteComponents}
      </div>
    );
  }
}

export default NotesCorral;
