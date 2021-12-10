import Head from "next/head";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../public/demo/css/style.css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setPreloader(false);
    if (typeof window !== "undefined") {
      const WOW = require('wowjs');
      window.wow = new WOW.WOW({
        live: false
      });
    }
    window.wow.init();
  }, []);
  return (
    <VideoState>  
    <Head>
      <title>Ausavi.</title>
      <meta name="description" content="Ausavi enables you to find high-intent buyers, close sales, and scale more quickly." />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="favicon.ico"
      />
      <meta property="og:title" content="Ausavi." key="title" />
      <meta property="og:description" content="Ausavi enables you to find high-intent buyers, close sales, and scale more quickly." />
    </Head>
      {preloader && <PreLoader />}
      <Component {...pageProps} />
    </VideoState>
  );
}

export default MyApp;
