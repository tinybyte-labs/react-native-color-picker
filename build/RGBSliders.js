import * as React from "react";
import { Text, View } from "react-native";
export const RGBSliders = () => {
    return (<View>
      <ColorSlider type="red"/>
      <ColorSlider type="green"/>
      <ColorSlider type="blue"/>
    </View>);
};
export const ColorSlider = ({ type }) => {
    const label = {
        red: "Red",
        blue: "Blue",
        green: "Green",
    };
    return (<View>
      <Text>{label[type]}</Text>
    </View>);
};
//# sourceMappingURL=RGBSliders.js.map