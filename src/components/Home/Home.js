import React from 'react';
import BuildingCorral from '../BuildingCorral/BuildingCorral';
import buildingData from '../../helpers/data/buildingData';

import './Home.scss';

class Home extends React.Component {
  state = {
    buildings: [],
  }

  // getBuildings = () => {
  //   buildingData.getBuildings()
  //     .then(buildings => this.setState({ buildings }))
  //     .catch(err => console.error('no buildings from home', err));
  // };

  componentDidMount() {
    buildingData.getBuildings()
      .then(buildings => this.setState({ buildings }))
      .catch(err => console.error('no buildings from home', err));
  }

  render() {
    const { buildings } = this.state;

    return (
       <div className="Home">
         <div className="row">
           <BuildingCorral buildings={buildings} />

         </div>
       </div>
    );
  }
}

export default Home;
