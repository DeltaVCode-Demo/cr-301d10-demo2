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
        { childName: 'Bob' },
        { childName: 'Bob' }
      ]
    };
  }

  render() {
    return (
      <div>
        <p>My name is {this.state.name}</p>
        <ol>
          {
            this.state.children.map((child, childIndex) => (
              <li key={childIndex}>
                <Child
                  name={child.childName}
                  gentle={child.gentle}
                  willful={child.willful}
                />
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

export default Parent;
