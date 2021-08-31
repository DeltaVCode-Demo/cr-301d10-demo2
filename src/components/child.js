import React from 'react';
import Button from 'react-bootstrap/Button';

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goldStars: 0,
    };
  }

  addGoldStar = () => {
    this.setState({
      goldStars: this.state.goldStars + 1,
    });
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
        <strong>
          {this.props.name} is {adjective} and has {this.state.goldStars} gold stars!
        </strong>
        <div><Button onClick={this.addGoldStar}>+1</Button></div>
      </>
    );
  }
}

export default Child;
