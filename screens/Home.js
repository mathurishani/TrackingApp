import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Quickfind from "../components/QuickFind";
import QuickFind from "../components/QuickFind";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Home=({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.icon3Stack}>
          <MaterialCommunityIconsIcon
            name="human-female"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="human-male"
            style={styles.icon6}
          ></MaterialCommunityIconsIcon>
          <View style={styles.rect2}></View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button2}
      >
        <View style={styles.quickfindStack}>
          <Quickfind style={styles.quickfind}></Quickfind>
          <QuickFind style={styles.quickFind}></QuickFind>
          <Text style={styles.quickFind}>QUICK FIND</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen3")}
        style={styles.button}
      >
        <View style={styles.rect1}>
          <View style={styles.icon4Row}>
            <IoniconsIcon
              name="md-bookmark"
              style={styles.icon4}
            ></IoniconsIcon>
            <Text style={styles.markToilet}>MARK TOILET</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.toiletFinder}>TOILET FINDER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191970"
  },
  group: {
    width: 234,
    height: 170,
    marginTop: 191,
    alignSelf: "center"
  },
  icon3: {
    top: 0,
    left: 78,
    position: "absolute",
    color: "rgba(0,151,136,1)",
    fontSize: 156
  },
  icon6: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,151,136,1)",
    fontSize: 156
  },
  rect2: {
    top: 14,
    left: 110,
    width: 7,
    height: 143,
    position: "absolute",
    backgroundColor: "rgba(0,151,136,1)",
    borderRadius: 8
  },
  icon3Stack: {
    width: 234,
    height: 170
  },
  button2: {
    width: 257,
    height: 50,
    marginTop: 90,
    alignSelf: "center"
  },
  quickfind: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 257
  },
  quickFind: {
    top: 14,
    left: 94,
    position: "absolute",
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  quickfindStack: {
    width: 257,
    height: 50
  },
  button: {
    width: 257,
    height: 50,
    marginTop: 44,
    alignSelf: "center"
  },
  rect1: {
    width: 257,
    height: 50,
    backgroundColor: "rgba(84,111,122,1)",
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    height: 39,
    width: 20
  },
  markToilet: {
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 8,
    marginTop: 9
  },
  icon4Row: {
    height: 39,
    flexDirection: "row",
    flex: 1,
    marginRight: 71,
    marginLeft: 43,
    marginTop: 5
  },
  toiletFinder: {
    // fontFamily: "roboto-700",
    color: "rgba(144,144,144,1)",
    fontSize: 25,
    marginTop: -225,
    alignSelf: "center"
  }
});

export default Home;
