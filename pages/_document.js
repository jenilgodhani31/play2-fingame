import { Html, Head, Main, NextScript } from "next/document"; 
import Script from "next/script"; 

export default function Document() { 
  return ( 
    <Html lang="en"> 
      <Head> 
        {/* Google Tag Manager */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TFN2TW78');`,
          }}
        />
        
        {/* Google Tag (gtag.js) */} 
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=AW-10944338984" 
        /> 
        <Script 
          id="google-analytics" 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{ 
            __html: ` 
              window.dataLayer = window.dataLayer || []; 
              function gtag() { dataLayer.push(arguments); } 
              gtag('js', new Date()); 
              gtag('config', 'AW-10944338984'); 
            `, 
          }} 
        /> 

        {/* Google AdSense */} 
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785" 
          crossOrigin="anonymous" 
        /> 

        <meta charSet="utf-8" /> 
        <link rel="icon" href="/gameImage/launch-icon.png" /> 
        <link rel="stylesheet" type="text/css" /> 
        <link 
          rel="stylesheet" 
          type="text/css" 
          href="https://cdn.jsdelivr.net/npm/neuicons/css/neu.min.css" 
        /> 
      </Head> 

      <body> 
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFN2TW78" 
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }} 
          ></iframe>
        </noscript>
        
        <Main /> 
        <NextScript /> 
      </body> 
    </Html> 
  ); 
}
