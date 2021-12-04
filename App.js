import React from "react";
import WelcomeScreen from "./src/Welcome"
import { StyleSheet,Text, View } from "react-native";

export default function App() {
  return (
    <View styles={styles.centered}>
      <WelcomeScreen/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  centered: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


