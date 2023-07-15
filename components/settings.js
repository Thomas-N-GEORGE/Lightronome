// This is our settings screen for tempo, meter and flash division.

import { Pressable, StyleSheet, Text, View } from "react-native";

export default Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>This is the SETTINGS screen !</Text>
      <Text style={styles.label}>BPM : </Text>
      <Text style={styles.label}>Meter : </Text>
      <Text style={styles.label}>Flash : </Text>
      <Pressable onPress={() => navigation.navigate("Lightronome")}>
        <Text style={[styles.button]}>Play</Text>
      </Pressable>
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
  button: {
    backgroundColor: "#3a5fa4",
    margin: 50,
    padding: 20,
    borderRadius: 50,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
  },
  label: {
    
  }
});
