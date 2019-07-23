import React from 'react';
import noteShape from '../../helpers/propz/noteShape';

import './SingleNote.scss';

class SingleNote extends React.Component {
  static propTypes = {
    building: noteShape.noteShape,
  }

  render() {
    const { note } = this.props;
    return (
      <div className="SingleNote">
        <div className="card m-3">
          <div className="card-body">
            <h4 className="card-text">{note.note}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleNote;
