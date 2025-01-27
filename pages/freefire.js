import Freefire from "@containers/freefire";
import Head from "next/head";
import { Fragment } from "react";

function freefire() {
  return (
    <Fragment>
      <Head>
        <title>{"fingameon "}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VWXQ4EGHNY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VWXQ4EGHNY');
</script>
      </Head>
      <div
        style={{
          backgroundImage: "url('/gameImage/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Freefire />
      </div>
    </Fragment>
  );
}

export default freefire;
