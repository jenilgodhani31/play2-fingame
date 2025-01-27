import VisitPage from "../containers/visit";
import Head from "next/head";
import { Fragment } from "react";

function Visit() {
  return (
    <Fragment>
      <Head>
        <title>{"fingameon "}</title>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VWXQ4EGHNY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VWXQ4EGHNY');
</script>
        
      </Head>
      <div
        
      >
        <VisitPage />
      </div>
    </Fragment>
  );
}

export default Visit;
