import Color from "color";
import { RGBColor } from "../schema/rgb-color";

export const hexToRgb = (color: string): RGBColor => {
  const c = Color(color);

  return {
    r: c.red(),
    g: c.green(),
    b: c.blue(),
  };
};

export const rgbToHex = (color: RGBColor): string => {
  const c = Color(color);
  return c.hex();
};
