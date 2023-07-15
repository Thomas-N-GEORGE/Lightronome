// This is our lightronome screen for metronome flashes.

import { StyleSheet, Text, View } from "react-native";

export default Lightronome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>This is the FLASHING screen !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
