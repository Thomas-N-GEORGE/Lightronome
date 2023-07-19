// This is our settings screen for tempo, meter and flash division.

import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BeatContext, Beat } from "./utils";

export default Settings = ({ navigation }) => {
  const { beat, setBeat } = useContext(BeatContext);
  const [bpm, setBpm] = useState("120");
  const [count, setCount] = useState("4");
  const [division, setDivision] = useState("1");

  const submit = () => {
    const beat = new Beat(bpm, count, division);
    setBeat(beat);
    navigation.navigate("Lightronome");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={[styles.title, { flex: 1 }]}>Lightronome</Text>
          <View style={{ flex: 10 }}>
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
            <View style={styles.inputRow}>
              <Text style={styles.label}>Count : </Text>
              <TextInput
                style={styles.textInput}
                placeholder="4"
                onChangeText={(newCount) => setCount(newCount)}
                defaultValue={count}
                inputMode="numeric"
              />
            </View>
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
            <Pressable
              onPress={() => {
                submit();
              }}
            >
              <Text style={[styles.button]}>Play</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    textAlign: "center",
    textAlignVertical: "center",
  },
  button: {
    backgroundColor: "#3a5fa4",
    margin: 50,
    paddingVertical: 20,
    paddingHorizontal: 60,
    textAlign: "center",
    textAlignVertical: "center",
    // overflow: "hidden",
    // borderRadius: 50,
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  label: {
    fontSize: 35,
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 35,
  },
});
