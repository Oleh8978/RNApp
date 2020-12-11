import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages } from "./../bll/actions/imgactions";
import {
  updateFirstName,
  updateLastName,
  updateBothName
} from "./../bll/actions/textactions";

import Splash from "./splash/Splash";
import Forms from "./withRoter/Forms";

class App extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  checker = (arg) => {
    let value;
    if (arg === false) {
      value = false;
    } else {
      value = true;
    }
    return value;
  };
  render() {
    //  console.log(this.props.names);
    //console.log(this.props.updateFirstName)
      console.log(this.props.randomImages.images);
    // console.log(this.checker(this.props.randomImages.isFetching));
    // console.log(this.checker(this.props.randomImages.isFetching));
   //  console.log(this.checker(this.props.randomImages));
    let updateNames = [
      this.props.updateFirstName,
      this.props.updateLastName,
      this.props.updateBothName
    ];
    return (
      <>
        {this.checker(this.props.randomImages.isFetching) ? (
          <Splash />
        ) : (
          <Forms
            image={this.props.randomImages.images}
            names={this.props.names}
            updateNames={updateNames}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomImages: state.imageReducer,
    names: state.nameReducer
  };
};

const mapDispatchToProps = {
  updateFirstName,
  updateLastName,
  updateBothName,
  fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
