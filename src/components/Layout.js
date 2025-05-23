import React, {useEffect, useState} from 'react';
// import Head from 'next/head';
import {Helmet} from "react-helmet";
import ScrollToTop from "./ScrollToTop";

const Layout = (props) => {
  const [, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Helmet>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicon_io/site.webmanifest" />
        <link rel="icon" href="/assets/images/favicon.png" />
        <link rel="stylesheet" href="/assets/plugins/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/fontello.css" />
        <link rel="stylesheet" href="/assets/plugins/accordion.css" />
        <link rel="stylesheet" href="/assets/plugins/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />

      </Helmet>

      {props.children}

      <script src="assets/plugins/bootstrap/jquery.min.js"></script>
      <script src="assets/plugins/bootstrap/bootstrap.min.js"></script>
      <script src="/assets/plugins/accordion.min.js"></script>
      <script src="/assets/plugins/glightbox.min.js"></script>

    </div>
  )
}
export default Layout;
