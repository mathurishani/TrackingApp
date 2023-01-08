import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Switch } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";

const Mark=({navigation})=> {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen1")}
          style={styles.button}
        >
          <View style={styles.rect1}>
            <Text style={styles.cancel}>CANCEL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen1")}
          style={styles.button2}
        >
          <View style={styles.rect2}>
            <Text style={styles.add}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect3}>
        <View style={styles.placeTypeRow}>
          <Text style={styles.placeType}>Place Type</Text>
          <EntypoIcon
            name="chevron-thin-right"
            style={styles.icon6}
          ></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect7}>
        <View style={styles.rect4}>
          <Text style={styles.free}>Free</Text>
          <Switch
            value={false}
            disabled={false}
            trackColor={{
              true: "rgba(230, 230, 230,1)",
              false: "rgba(155,155,155,1)"
            }}
            style={styles.switch3}
          ></Switch>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>Rating</Text>
          <View style={styles.group}>
            <View style={styles.icon4Row}>
              <FontAwesomeIcon
                name="star"
                style={styles.icon4}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star"
                style={styles.icon5}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star"
                style={styles.icon}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star-half-empty"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="star-o"
                style={styles.icon3}
              ></FontAwesomeIcon>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect6}>
        <Text style={styles.disabledAccess}>Disabled Access</Text>
        <Switch
          value={false}
          disabled={false}
          trackColor={{
            true: "rgba(230, 230, 230,1)",
            false: "rgba(155,155,155,1)"
          }}
          style={styles.switch2}
        ></Switch>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 135,
    height: 50
  },
  rect1: {
    width: 135,
    height: 50,
    backgroundColor: "rgba(84,111,122,1)",
    borderRadius: 5
  },
  cancel: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 34
  },
  button2: {
    width: 135,
    height: 50,
    marginLeft: 36
  },
  rect2: {
    width: 135,
    height: 50,
    backgroundColor: "rgba(84,111,122,1)",
    borderRadius: 5
  },
  add: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 50
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 665,
    marginLeft: 27,
    marginRight: 27
  },
  rect3: {
    width: 360,
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(223,223,223,1)",
    flexDirection: "row",
    marginTop: -140
  },
  placeType: {
    // fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 17
  },
  icon6: {
    color: "rgba(74,74,74,1)",
    fontSize: 18,
    height: 20,
    width: 18,
    marginLeft: 196
  },
  placeTypeRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 37,
    marginLeft: 27,
    marginTop: 25
  },
  rect7: {
    width: 360,
    height: 70,
    marginTop: -280
  },
  rect4: {
    width: 360,
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  free: {
    // fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 17,
    marginLeft: 28,
    marginTop: 25
  },
  switch3: {
    marginLeft: 222,
    marginTop: 25
  },
  rect5: {
    width: 360,
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(223,223,223,1)",
    flexDirection: "row",
    marginTop: 70
  },
  rating: {
    // fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 17
  },
  group: {
    width: 100,
    height: 23,
    flexDirection: "row",
    marginLeft: 172
  },
  icon4: {
    color: "rgba(0,151,136,1)",
    fontSize: 22
  },
  icon5: {
    color: "rgba(0,151,136,1)",
    fontSize: 22
  },
  icon: {
    color: "rgba(0,151,136,1)",
    fontSize: 22
  },
  icon2: {
    color: "rgba(0,151,136,1)",
    fontSize: 22
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    marginTop: 1
  },
  icon4Row: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  ratingRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 28,
    marginTop: 25
  },
  rect6: {
    width: 360,
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(223,223,223,1)",
    flexDirection: "row",
    marginTop: -140
  },
  disabledAccess: {
    // fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 17,
    marginLeft: 27,
    marginTop: 25
  },
  switch2: {
    marginLeft: 131,
    marginTop: 25
  },
  mapView: {
    height: 343,
    width: 360,
    marginTop: -483
  }
});

export default Mark;
