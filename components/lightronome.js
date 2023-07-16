// This is our lightronome screen for metronome flashes.

import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { BeatContext } from "./utils";

export default Lightronome = () => {
  const { beat, setBeat } = useContext(BeatContext);
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>This is the FLASHING screen !</Text>
      <Text style={styles.label}>you just entered BPM : {beat.bpm}</Text>
      <Text style={styles.label}>you just entered Meter : {beat.meterNum} / {beat.meterDenom}</Text>
      <Text style={styles.label}>you just entered Division : {beat.division}</Text>
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
