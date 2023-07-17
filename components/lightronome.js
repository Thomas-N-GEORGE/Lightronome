// This is our lightronome screen for metronome flashes.

import React, { useContext, useRef, useEffect, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

import { BeatContext } from "./utils";

export default Lightronome = () => {
  const { beat, setBeat } = useContext(BeatContext);
  const [count, setCount] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  function lightronome() {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: beat.period,
        easing: Easing.poly(8),
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Logic whenever an iteration finishes...
      fadeAnim.setValue(1);
      setCount((count) => count + 1);
      lightronome();
    });
  }

  useEffect(() => {
    lightronome();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>This is the FLASHING screen !</Text>
      <Text style={styles.label}>you just entered BPM : {beat.bpm}</Text>
      <Text style={styles.label}>
        which means a flash every {beat.period} ms
      </Text>
      <Text style={styles.label}>
        you just entered Meter : {beat.meterNum} / {beat.meterDenom}
      </Text>
      <Text style={styles.label}>
        you just entered Division : {beat.division}
      </Text>
      <Animated.View
        style={[
          styles.square,
          {
            opacity: fadeAnim, // Bind opacity to animated value
            backgroundColor: (count % (beat.meterNum * beat.division))==0 ? "#aa5fa4" : "#3a5fa4", // The first beat is red, the rest are blue.
          },
        ]}
      >
        <Text style={[styles.squareText]}>{(Math.floor(count / beat.division)) % beat.meterNum + 1}</Text>
      </Animated.View>
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
  square: {
    backgroundColor: "#3a5fa4",
    padding: 50,
  },
  squareText: {
    color: "#fff",
  },
});
