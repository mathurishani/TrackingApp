import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Quickfind(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(84,111,122,1)"
  }
});

export default Quickfind;