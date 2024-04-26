import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import main from "../../assets/main.png";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME TO LEARNHUB</Text>
      <Image source={main} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          color="#01E986"
          title="NEXT"
          onPress={() => console.log("Next button pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "#2A3332",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#2A3332",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "50px",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: "30%",
  },
  buttonContainer: {
    marginTop: 250,
    borderRadius: 8,
    width: 200,
    backgroundColor: "#2A3332",
    overflow: "hidden", // to clip the button's border radius
  },
});

export default MainPage;
