import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const { width, height } = Dimensions.get("window");

const HomePageSalutation = () => {
  return (
    <View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome, </Text>
        <Text style={styles.subWelcomeText}>Jude Vale</Text>
        <FontAwesomeIcon icon={faBell} size={20} />
      </View>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.text}>Learning just got</Text>
          <Text style={styles.text}>more interesting</Text>
        </View>
        <View style={styles.headerImage}>
          <Image source={require("../../resources/girlReading.png")} style={styles.mainImage} />
        </View>
      </View>
    </View>
  );
};

export default HomePageSalutation;

const styles = StyleSheet.create({
  welcome: {
    flexDirection: "row",
    paddingTop: 29,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 17,
  },
  subWelcomeText: {
    marginLeft: -190,
    fontSize: 17,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingTop: 20,
    borderRadius: 20,
    backgroundColor: "#FAE7C2",
    borderColor: "#FAE7C2",
    width: 390,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  headerText: {
    flexDirection: "column",
    width: (40 / 100) * width,
  },
  headerImage: {
    // borderRadius: 50,
    alignItems: "center",
    width: (60 / 100) * width,
  },
  text: {
    fontSize: 20,
    color: "#ED9412",
  },
  mainImage: {
    width: 150,
    height: 100,
    // borderRadius: 50,
    // padding: 50,
  },
});
