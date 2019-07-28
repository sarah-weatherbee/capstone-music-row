import React from 'react';
import BuildingCorral from '../BuildingCorral/BuildingCorral';
import buildingData from '../../helpers/data/buildingData';

import './Home.scss';


class Home extends React.Component {
  state = {
    buildings: [],
    selectedBuildings: [],
  }

  componentDidMount() {
    buildingData.getBuildings()
      .then(buildings => this.setState({ buildings, selectedBuildings: buildings }))
      .catch(err => console.error('no buildings from home', err));
  }

  toggleYear = (e) => {
    e.preventDefault();
    const selectedYear = e.target.innerHTML;
    let buildingsByYear = [];
    if (selectedYear === 'All') {
      buildingsByYear = this.state.buildings;
    } else {
      buildingsByYear = this.state.buildings.filter(x => x.yearDemolished === selectedYear);
    }
    this.setState({ selectedBuildings: buildingsByYear });
  }


  render() {
    const { selectedBuildings } = this.state;


    return (
       <div className="Home">
         <div className="col-lg-8 mx-auto">
           <h2 className="m-2">Demolished Buildings on music row: 2013 to 2018</h2>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>All</button>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>2013</button>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>2014</button>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>2015</button>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>2016</button>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>2017</button>
           <button className="btn btn-secondary m-2" onClick={this.toggleYear}>2018</button>
         </div>
         <BuildingCorral buildings={ selectedBuildings } />
       </div>
    );
  }
}

export default Home;
