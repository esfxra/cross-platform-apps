import React from "react";
import { StyleSheet, View } from "react-native";

interface SpacerProps {
  size?: "s" | "m";
}

const Spacer = ({size = 'm'}: SpacerProps) => {
  return <View style={styles[size]}></View>;
};

const styles = StyleSheet.create({
  s: {
    height: 8,
  },
  m: {
    height: 12,
  }
});

export type { SpacerProps };
export { Spacer };
