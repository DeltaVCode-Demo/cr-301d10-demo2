import React from 'react';
import Child from './child';

class Parent extends React.Component {
  render() {
    return (
      <div>
        <p>My name is Keith</p>
        <ol>
          <li><Child name="TBD" gentle={true} /></li>
          <li><Child name="FDD" willful={true} /></li>
        </ol>
      </div>
    )
  }
}

export default Parent;
