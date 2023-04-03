import React from 'react';
import Head from 'next/head';

const Layout = (props) => {

  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/assets/images/favicon.png" />
        <link rel="stylesheet" href="/assets/plugins/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/fontello.css" />
        <link rel="stylesheet" href="/assets/plugins/accordion.css" />
        <link rel="stylesheet" href="/assets/plugins/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />

      </Head>

      {props.children}

      {/*<script src="assets/plugins/bootstrap/jquery.min.js"></script>*/}
      {/*<script src="assets/plugins/bootstrap/bootstrap.min.js"></script>*/}
      {/*<script src="/assets/plugins/accordion.min.js"></script>*/}
      {/*<script src="/assets/plugins/glightbox.min.js"></script>*/}

    </div>
  )
}
export default Layout;
