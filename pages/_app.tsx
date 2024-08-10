import "../styles/Default.scss";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>이태일 포트폴리오</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta content="이태일 포트폴리오" />
        <meta
          property="og:description"
          content="Frontend-Developer 이태일입니다."
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:site_name" content="Portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
