import * as React from "react";
import { Text, View } from "react-native";

export const RGBSliders = () => {
  return (
    <View>
      <ColorSlider type="red" />
      <ColorSlider type="green" />
      <ColorSlider type="blue" />
    </View>
  );
};

export type ColorSliderProps = {
  type: "red" | "green" | "blue";
};

export const ColorSlider = ({ type }: ColorSliderProps) => {
  const label: Record<ColorSliderProps["type"], string> = {
    red: "Red",
    blue: "Blue",
    green: "Green",
  };
  return (
    <View>
      <Text>{label[type]}</Text>
    </View>
  );
};
