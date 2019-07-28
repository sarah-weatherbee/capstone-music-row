import React from 'react';
import PropTypes from 'prop-types';
import buildingShape from '../../helpers/propz/buildingShape';
import SingleBuilding from '../SingleBuilding/SingleBuilding';

import './BuildingCorral.scss';


class BuildingCorral extends React.Component {
  static propTypes = {
    buildings: PropTypes.arrayOf(buildingShape.buildingShape),
  }

  render() {
    const buildingComponents = this.props.buildings.map(building => (
      <SingleBuilding key={building.id} building={building} />
    ));
    return (
        <div className="BuildingCorral d-flex flex-wrap">
          {buildingComponents}
        </div>
    );
  }
}

export default BuildingCorral;
