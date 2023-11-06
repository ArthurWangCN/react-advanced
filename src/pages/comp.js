import React from "react";

class Index extends React.Component {
  constructor(...args) {
    super(...args);
    console.log('>>>', this.props);
  }
  state = {number: 1}
  handleClick = () => {
    console.log('click1');
  }
  render() {
    return <p style={{cursor: "pointer"}} onClick={this.handleClick}>hello {this.props?.title} component { this.state.number } </p>
  }
}

export default Index