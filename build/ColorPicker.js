import * as React from "react";
import { hexToRgb, rgbToHex } from "./utils";
export const ColorPickerContext = React.createContext(null);
export const ColorPicker = ({ children, initColor = "#000000", onColorChange, }) => {
    const [color, _setColor] = React.useState(hexToRgb(initColor));
    const setColor = React.useCallback((color) => {
        _setColor(color);
        onColorChange?.(rgbToHex(color));
    }, [onColorChange]);
    return (<ColorPickerContext.Provider value={{ color, setColor }}>
      {children}
    </ColorPickerContext.Provider>);
};
export const useColorPicker = () => {
    const context = React.useContext(ColorPickerContext);
    if (!context)
        throw new Error("useColorPicker must use inside ColorPicker");
    return context;
};
//# sourceMappingURL=ColorPicker.js.map