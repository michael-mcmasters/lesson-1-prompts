import React, { Component } from 'react';

class ShipInfo extends Component {
  render() {
    const { currentStation, crewMembers } = this.props;
    return (
      <div>
        {crewMembers.map(member => <li>{member}</li>)}
        <h3>Currently taking on repairs at: {currentStation}</h3>
      </div>
    );
  }
}

export default ShipInfo;