import React from 'react';
import buildingShape from '../../helpers/propz/buildingShape';
import notesData from '../../helpers/data/notesData';
import NotesCorral from '../NotesCorral/NotesCorral';

import './SingleBuilding.scss';


class SingleBuilding extends React.Component {
  static propTypes = {
    building: buildingShape.buildingShape,
  }

  state = {
    notes: [],
  }

  componentDidMount() {
    const buildingId = this.props.building.id;

    notesData.getNotes(buildingId)
      .then(notes => this.setState({ notes }))
      .catch(err => console.error('no notes from SingleBuilding', err));
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
            <NotesCorral notes={ notes }/>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBuilding;
