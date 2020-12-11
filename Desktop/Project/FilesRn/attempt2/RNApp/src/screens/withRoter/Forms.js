import React, { Component } from "react";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: true,
      page2: false
    };
  }

  page1 = (arg1, arg2) => {
    if (arg1 === true && arg2 === false) {
      this.setState({
        page1: false,
        page2: true
      });
    }
  };

  page2 = (arg1, arg2) => {
    if (arg1 === false && arg2 === true) {
      this.setState({
        page1: true,
        page2: false
      });
    }
  };

  render() {
    let pages = [this.state.page1, this.state.page2];
    return (
      <>
        {this.state.page1 ? (
          <Form1
            image={this.props.image}
            to2={this.page1}
            pages={pages}
            names={this.props.names}
            updateNames={this.props.updateNames}
          />
        ) : (
          <Form2
            image={this.props.image}
            to1={this.page2}
            pages={pages}
            names={this.props.names}
            updateNames={this.props.updateNames}
          />
        )}
      </>
    );
  }
}

export default Forms;
