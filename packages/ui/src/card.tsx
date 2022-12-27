import React from "react";
import { ViewStyle, StyleSheet, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card = ({ children, style }: CardProps) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export type { CardProps };
export { Card };
