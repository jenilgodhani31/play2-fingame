import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
    <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-10944338984"
        />
        <Script
          id="google-ads-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: 
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'AW-10944338984');
            ,
          }}
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/gameImage/launch-icon.png" />
        <link rel="stylesheet" type="text/css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/neuicons/css/neu.min.css"
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
