import { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import "@/styles/global.css";

const roboto = Roboto({
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
