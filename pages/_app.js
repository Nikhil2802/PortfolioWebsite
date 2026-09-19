import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MotionConfig } from "framer-motion";
import { Archivo, Martian_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-martian",
});

export default function App({ Component, pageProps }) {
  return (
    // reducedMotion="user" makes every framer animation honour the OS setting.
    <MotionConfig reducedMotion="user">
      <div className={`${archivo.variable} ${martian.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
      <SpeedInsights />
    </MotionConfig>
  );
}
