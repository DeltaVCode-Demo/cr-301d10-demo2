import React from 'react';
import Child from './child';
import kidsData from '../data/kids.json';

class Parent extends React.Component {
  // You have to have a constructor to use state*
  // *ish
  constructor(props) {
    super(props);

    console.log(kidsData);

    this.state = {
      name: 'Samantha',
      children: kidsData
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
                  name={child.name}
                  gentle={child.gentle}
                  willful={child.willful}

                  {...child}
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
