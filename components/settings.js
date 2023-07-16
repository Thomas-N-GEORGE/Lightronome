// This is our settings screen for tempo, meter and flash division.

import React, { useState, useContext } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { BeatContext, Beat } from "./utils";


export default Settings = ({ navigation }) => {
  const { beat, setBeat } = useContext(BeatContext);
  const [bpm, setBpm] = useState("120");
  const [meterNum, setMeterNum] = useState("4");
  const [meterDenom, setMeterDenom] = useState("4");
  const [division, setDivision] = useState("1");

  const submit = () => {
    const beat = new Beat(bpm, meterNum, meterDenom, division);
    setBeat(beat);
    navigation.navigate("Lightronome")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>SETTINGS</Text>
      <View style={styles.inputRow}>
        <Text style={styles.label}>BPM : </Text>
        <TextInput
          style={styles.textInput}
          placeholder="120"
          onChangeText={(newBpm) => setBpm(newBpm)}
          defaultValue={bpm}
          inputMode="numeric"
        />
      </View>
      <Text style={styles.label}>you just entered BPM : {bpm}</Text>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Meter : </Text>
        <TextInput
          style={styles.textInput}
          placeholder="4"
          onChangeText={(newMeterNum) => setMeterNum(newMeterNum)}
          defaultValue={meterNum}
          inputMode="numeric"
        />
        <Text style={styles.label}> / </Text>
        <TextInput
          style={styles.textInput}
          placeholder="4"
          onChangeText={(newMeterDenom) => setMeterDenom(newMeterDenom)}
          defaultValue={meterDenom}
          inputMode="numeric"
        />
      </View>
      <Text style={styles.label}>you just entered Meter : {meterNum} / {meterDenom}</Text>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Division : </Text>
        <TextInput
          style={styles.textInput}
          placeholder="1"
          onChangeText={(newDivision) => setDivision(newDivision)}
          defaultValue={division}
          inputMode="numeric"
        />
      </View>
      <Text style={styles.label}>you just entered Division : {division}</Text>
      <Pressable onPress={() => { submit() }}>
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
    // overflow: "hidden",
    // borderRadius: 50,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 25,
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 25,
  }
});
