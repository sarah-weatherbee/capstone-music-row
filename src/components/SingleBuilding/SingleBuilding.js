import React from 'react';
import buildingShape from '../../helpers/propz/buildingShape';

import './SingleBuilding.scss';

class SingleBuilding extends React.Component {
  static propTypes = {
    building: buildingShape.buildingShape,
  }

  render() {
    const { building } = this.props;
    return (
      <div className="Building row">
        <div className="card m-3">
          <div className="card-body">
            <h4 className="card-title">{building.name}</h4>
            <h4 className="card-text">Year demolished: {building.yearDemolished}</h4>
            <a href={building.mapViewBefore} target="_blank">Map view before</a>
            <h4 className="card-text">Address: {building.address}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBuilding;
