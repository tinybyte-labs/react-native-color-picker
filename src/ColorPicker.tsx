import * as React from "react";
import { hexToRgb, rgbToHex } from "./utils";
import { RGBColor } from "./schema/rgb-color";

export type ColorPickerContextType = {
  color: RGBColor;
  setColor: (color: RGBColor) => void;
};
export const ColorPickerContext =
  React.createContext<ColorPickerContextType | null>(null);

export type ColorPickerProps = {
  children: React.ReactNode;
  initColor?: string;
  onColorChange?: (color: string) => void;
};

export const ColorPicker = ({
  children,
  initColor = "#000000",
  onColorChange,
}: ColorPickerProps) => {
  const [color, _setColor] = React.useState<RGBColor>(hexToRgb(initColor));

  const setColor = React.useCallback(
    (color: RGBColor) => {
      _setColor(color);
      onColorChange?.(rgbToHex(color));
    },
    [onColorChange]
  );

  return (
    <ColorPickerContext.Provider value={{ color, setColor }}>
      {children}
    </ColorPickerContext.Provider>
  );
};

export const useColorPicker = () => {
  const context = React.useContext(ColorPickerContext);
  if (!context) throw new Error("useColorPicker must use inside ColorPicker");
  return context;
};
