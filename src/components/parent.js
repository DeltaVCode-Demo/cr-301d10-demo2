import React from 'react';
import Child from './child';

class Parent extends React.Component {
  render() {
    return (
      <div>
        <p>My name is Keith</p>
        <ol>
          <li><Child name="TBD" /></li>
          <li><Child name="FDD" /></li>
        </ol>
      </div>
    )
  }
}

export default Parent;
