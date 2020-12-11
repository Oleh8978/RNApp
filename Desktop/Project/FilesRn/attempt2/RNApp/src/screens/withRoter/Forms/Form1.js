import React, { Component } from "react";
import { Button, Image, StyleSheet, TextInput, Text, View, PermissionsAndroid, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';

//const myIcon = <Icon name="arrow-right" size={30} color="#900" />;

class Form1 extends Component {
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
    /*   this.setState({
      fName: e
    }); */
    this.props.updateNames[0](e);
    /*  if (e.length > 0 && e !== " ") {
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
    /* this.setState({
      fName: e
    }); */
    this.props.updateNames[1](e);
    /*   if (e.length > 0 && e !== " ") {
      this.setState({
        lFilled: true
      });
    } else {
      this.setState({
        lFilled: false
      });
    } */
  };

  //

  render() {
    console.log(this.props.image);
    // console.log(this.state.fFilled);
    // console.log(this.state.lFilled);
    const Rocket = <Icon name="rocket" size={30} color="#900" />
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
              
            <TouchableOpacity 
              onPress={() => {
                  this.props.to2(this.props.pages[0], this.props.pages[1]);
                }}>
              <View style={{backgroundColor: "gray", width: "100%", height: 30}}>
               <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View>{Rocket}</View>
                  <View><Text> Next Screen</Text></View>
                  </View>
               </LinearGradient>
              </View>
            </TouchableOpacity>
              
            ) : (
             <TouchableOpacity
             disabled
              onPress={() => {
                  this.props.to2(this.props.pages[0], this.props.pages[1]);
                }}>
              <View style={{backgroundColor: "gray", width: "100%", height: 30}}>
               <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View>{Rocket}</View>
                  <View><Text> Next Screen </Text></View>
                  </View>
               </LinearGradient>
              </View>
            </TouchableOpacity>

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
  },
    linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default Form1;
