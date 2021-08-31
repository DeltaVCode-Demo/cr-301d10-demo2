import React from 'react';
import Child from './child';
import data from '../data/data.json';

class Parent extends React.Component {
  // You have to have a constructor to use state*
  // *ish
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samantha',
      children: [
        { childName: 'TBD', gentle: true },
        { childName: 'FDD', willful: true },
      ]
    };
  }

  render() {
    let hornedChild = data[0];

    return (
      <div>
        <p>My name is {this.state.name}</p>
        <ol>
          <li>
            <Child
              name={this.state.children[0].childName}
              gentle={this.state.children[0].gentle} />
          </li>
          <li>
            <Child
              name={this.state.children[1].childName}
              willful={this.state.children[1].willful} />
          </li>
          <li>
            <Child
              name={hornedChild.title} />
          </li>
        </ol>
      </div>
    )
  }
}

export default Parent;
