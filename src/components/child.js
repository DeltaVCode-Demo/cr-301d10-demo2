import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goldStars: 0,
    };
  }

  render() {
    let adjective = 'boring';

    if (this.props.gentle) {
      adjective = 'kind and gentle';
    }
    else if (this.props.willful) {
      adjective = 'unique';
    }

    console.log(this.props);
    return (
      <>
        <strong>{this.props.name} is {adjective} and they have {this.state.goldStars} gold stars!</strong>
        <p><button>+1</button></p>
      </>
    );
  }
}

export default Child;
