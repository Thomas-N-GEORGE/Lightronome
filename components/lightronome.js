// This is our lightronome screen for metronome flashes.

import React, { useContext, useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Animated, Easing, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { BeatContext } from "./utils";

export default Lightronome = () => {
  const { beat, setBeat } = useContext(BeatContext);
  const [counter, setCounter] = useState(0);
  const {height, width, scale, fontScale} = useWindowDimensions();
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
      setCounter((counter) => counter + 1);
      lightronome();
    });
  }

  useEffect(() => {
    lightronome();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.label}>BPM = {beat.bpm},  Count = {beat.count},  Division = {beat.division}</Text>
      <Animated.View
        style={[
          styles.square,
          {
            opacity: fadeAnim, // Bind opacity to animated value
            backgroundColor:
              counter % (beat.count * beat.division) === 0
                ? "#aa5fa4"   // Beat 1 is red,
                : "#3a5fa4",  // the rest are blue.
            width: width,
            height: height,
          },
        ]}
      >
      {counter % beat.division !== 0 ? null : (   // Display counter only on beat.
        <Text style={[styles.squareText]}>
          {(Math.floor(counter / beat.division) % beat.count) + 1}
        </Text>
        )}
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
    flex: 1,
    justifyContent: "center",
  },
  squareText: {
    color: "#fff",
    fontSize: 400,
    textAlign: "center",
  },
});
