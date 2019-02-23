/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View, Animated, Text, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(0);
    });
  }
  
  render() {

    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"],
      //outputRange: ["0deg", "180deg"],
      // outputRange: ["0deg", "-360deg"],
      // outputRange: ["0deg", "1080deg"],
    });

    const animatedStyles = {
      transform: [
        { rotate: rotateInterpolate },
        // { rotateX: rotateInterpolate },
        // { rotateY: rotateInterpolate },
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>Hello Rotate!</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  }
});