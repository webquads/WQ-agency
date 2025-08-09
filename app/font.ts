// app/fonts.ts
import { Instrument_Serif, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});


