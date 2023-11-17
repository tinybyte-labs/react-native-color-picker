import * as React from "react";
import { RGBColor } from "./schema/rgb-color";
export type ColorPickerContextType = {
    color: RGBColor;
    setColor: (color: RGBColor) => void;
};
export declare const ColorPickerContext: React.Context<ColorPickerContextType | null>;
export type ColorPickerProps = {
    children: React.ReactNode;
    initColor?: string;
    onColorChange?: (color: string) => void;
};
export declare const ColorPicker: ({ children, initColor, onColorChange, }: ColorPickerProps) => React.JSX.Element;
export declare const useColorPicker: () => ColorPickerContextType;
//# sourceMappingURL=ColorPicker.d.ts.map