import Color from "color";
export const hexToRgb = (color) => {
    const c = Color(color);
    return {
        r: c.red(),
        g: c.green(),
        b: c.blue(),
    };
};
export const rgbToHex = (color) => {
    const c = Color(color);
    return c.hex();
};
//# sourceMappingURL=index.js.map