import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";

const Find=({navigation}) =>{
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <Text style={styles.loremIpsum}>100m</Text>
          </View>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            customMapStyle={[]}
            style={styles.mapView}
          ></MapView>
        </View>
        <View style={styles.rect1}>
          <View style={styles.loremIpsum2Stack}>
            <Text style={styles.loremIpsum2}>500m</Text>
            <Text style={styles.loremIpsum3}>500m</Text>
          </View>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum5}>1km</Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum4}>2km</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 639,
    left: 0,
    width: 90,
    height: 80,
    position: "absolute",
    backgroundColor: "#b0c4de",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 28,
    marginLeft: 19
  },
  mapView: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 640,
    width: 360
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 360,
    height: 719,
    position: "absolute"
  },
  rect1: {
    top: 639,
    left: 90,
    width: 90,
    height: 80,
    position: "absolute",
    backgroundColor: "#b0c4de",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum3: {
    top: 0,
    left: 0,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum2Stack: {
    width: 51,
    height: 24,
    marginTop: 28,
    marginLeft: 20
  },
  rect2: {
    top: 639,
    left: 180,
    width: 90,
    height: 80,
    position: "absolute",
    backgroundColor: "rgba(0,151,136,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  loremIpsum5: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 28,
    marginLeft: 25
  },
  rect3: {
    top: 639,
    left: 270,
    width: 90,
    height: 80,
    position: "absolute",
    backgroundColor: "rgba(0,151,136,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  loremIpsum4: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 28,
    marginLeft: 26
  },
  rectStackStack: {
    width: 360,
    height: 719,
    marginTop: 21
  }
});

export default Find;
