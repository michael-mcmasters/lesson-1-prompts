import React, { Component } from 'react';
import ShipInfo from './ShipInfo'

class Station extends Component {
  constructor() {
    super();

    this.state = {
      shipName: "The Rocinante",
      currentStation: "Tyco Station",
      crewMembers: [
        'Captain James Holden',
        'Executive Officer Naomi Nagata',
        'Pilot Alex Kamal',
        'Chief Engineer Amos Burton'
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>
          Here is the Crew Manifest for the {this.state.shipName}
        </h1>
        <ShipInfo
          currentStation={this.state.currentStation}
          crewMembers={this.state.crewMembers}
        />
      </div>
    );
  }
}

export default Station;