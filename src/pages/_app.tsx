import PagesContainer from "@/layouts/PagesContainer/PagesContainer";
import "./globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PagesContainer>
      <Component {...pageProps} />
    </PagesContainer>
  );
}
