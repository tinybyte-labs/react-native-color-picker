import { z } from "zod";

export const rgbColorSchema = z.object({
  r: z.number().min(0).max(255),
  g: z.number().min(0).max(255),
  b: z.number().min(0).max(255),
});

export type RGBColor = z.infer<typeof rgbColorSchema>;
