import React from 'react';
import Child from './child';

class Parent extends React.Component {
  // You have to have a constructor to use state*
  // *ish
  constructor(props) {
    super(props);

    this.state = {
      name: 'Keith',
      children: [
        { childName: 'TBD', gentle: true },
        { childName: 'FDD', willful: true },
      ]
    };
  }

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
