import { StyleSheet } from "react-native";
import {
  RGBSliders,
  ColorPicker,
} from "@tinybyte-labs/react-native-color-picker";

export default function App() {
  return (
    <ColorPicker>
      <RGBSliders />
    </ColorPicker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
