import React from 'react';

class Child extends React.Component {
  render() {
    let adjective = 'boring';

    if (this.props.gentle) {
      adjective = 'kind and gentle';
    }
    else if (this.props.willful) {
      adjective = 'unique';
    }

    console.log(this.props);
    return <strong>{this.props.name} is {adjective}</strong>
  }
}

export default Child;
