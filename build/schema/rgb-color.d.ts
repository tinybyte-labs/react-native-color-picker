import { z } from "zod";
export declare const rgbColorSchema: z.ZodObject<{
    r: z.ZodNumber;
    g: z.ZodNumber;
    b: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    r: number;
    g: number;
    b: number;
}, {
    r: number;
    g: number;
    b: number;
}>;
export type RGBColor = z.infer<typeof rgbColorSchema>;
//# sourceMappingURL=rgb-color.d.ts.map