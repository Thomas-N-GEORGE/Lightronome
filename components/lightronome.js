// This is our lightronome screen for metronome flashes.

import React, { useContext, useRef, useEffect, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { BeatContext } from "./utils";

export default Lightronome = () => {
  const { beat, setBeat } = useContext(BeatContext);
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
      <BlinkSquare style={styles.square} duration={beat.period}></BlinkSquare>
    </View>
  );
};

function BlinkSquare(props) {
  const [count, setCount] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  // useEffect(() => {
  Animated.loop(
    Animated.timing(fadeAnim, {
      toValue: 1,
      // duration: 10000,
      duration: props.duration,
      useNativeDriver: true,
    })
  ).start();
  // setCount((count) => count + 1);
  // }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {/* {props.children} */}
    </Animated.View>
  );
}

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
    backgroundColor: "#000000",
    padding: 50,
  },
});
