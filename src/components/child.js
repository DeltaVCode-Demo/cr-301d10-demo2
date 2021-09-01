import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goldStars: 0,
    };
  }

  addGoldStarClickHandler = () => {
    // this.state.goldStars++; // NO

    this.setState({
      goldStars: this.state.goldStars + 1,
      lastUpdated: new Date(),
    });

    console.log(this.state);
  };

  render() {
    let adjective = 'boring';

    if (this.props.gentle) {
      adjective = 'kind and gentle';
    }
    else if (this.props.willful) {
      adjective = 'unique';
    }

    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <>
        <strong>{this.props.name} is {adjective} and they have {this.state.goldStars} gold stars!</strong>
        <p><button onClick={this.addGoldStarClickHandler}>+1</button></p>
        <img src={this.props.imgLink} alt="" />
      </>
    );
  }
}

export default Child;
