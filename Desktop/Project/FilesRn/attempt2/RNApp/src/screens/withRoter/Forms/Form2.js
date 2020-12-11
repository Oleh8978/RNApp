import React, { Component } from "react";
import { Button, Image, StyleSheet, TextInput, Text, View } from "react-native";

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      fFilled: false,
      lName: "",
      lFilled: false,
      image: ""
    };
  }

  inputter = (e) => {
    this.props.updateNames[0](e);
    /* this.setState({
      fName: e
    });
    if (e.length > 0 && e !== " ") {
      this.setState({
        fFilled: true
      });
    } else {
      this.setState({
        fFilled: false
      });
    } */
  };
  inputterL = (e) => {
    this.props.updateNames[1](e);
    /* this.setState({
      lName: e
    });
    if (e.length > 0 && e !== " ") {
      this.setState({
        lFilled: true
      });
    } else {
      this.setState({
        lFilled: false
      });
    } */
  };

  render() {
    // console.log(this.state.fFilled);
    // console.log(this.state.lFilled);
    const updater = (arg1, arg2) => {
      if (arg1 !== " " && arg2 !== " ") {
        this.props.updateNames[2](arg1, arg2);
        this.props.to1(this.props.pages[0], this.props.pages[1]);
      }
    };
    console.log(this.props.names.firstName);
    return (
      <View style={styles.app}>
        <View style={styles.inputData}>
          <View style={styles.container}>
            <Image style={styles.loading} source={{uri: `data:image/gif;base64,${this.props.image}`}} />
          </View>
          <View>
            <TextInput
              style={{ height: 40, outline: "none" }}
              placeholder="First name"
              onChangeText={this.inputter}
              defaultValue={this.props.names.firstName}
            />
            <TextInput
              style={{ height: 40, outline: "none" }}
              placeholder="Last name"
              onChangeText={this.inputterL}
              defaultValue={this.props.names.lastName}
            />
            {this.props.names.firstName && this.props.names.lastName ? (
              <Button
                title={"Upadate"}
                onPress={() =>
                  updater(this.props.names.firstName, this.props.names.lastName)
                }
              />
            ) : (
              <Button
                disabled
                title={"Upadate"}
                onPress={() => console.log("Pressed2")}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    margin: 0,
    backgroundColor: "white"
  },
  loading: {
    flex: 1,
    resizeMode: "contain"
  },
  inputData: {
    width: "70%",
    height: "80%",
    marginLeft: "15%",
    marginTop: "10%"
  },
  container: {
    marginTop: "10%",
    marginLeft: "10%",
    width: "80%",
    height: "40%"
  }
});

export default Form2;
