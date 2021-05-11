import React from "react";
import Head from "next/head";
import '../public/styles/styles.css'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Apolemme</title>
                <link rel="shortcut icon" type="image/ico" href="/images/favicon.ico"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet"
                      href="https://fonticons-free-fonticons.netdna-ssl.com/kits/ffe176a3/publications/72113/woff2.css"
                      media="all"/>
                <link rel="stylesheet" href="/styles/bootstrap.min.css"/>
                <link rel="stylesheet" href="/styles/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/styles/linearicons.css"/>
                <link rel="stylesheet" href="/styles/magnific-popup.css"/>
                <link rel="stylesheet" href="/styles/animate.css"/>
                <link rel="stylesheet" href="/styles/normalize.css"/>
                <link rel="stylesheet" href="/styles/styles.css"/>
                <link rel="stylesheet" href="/styles/responsive.css"/>
                <script
                    src="/scripts/vendor/modernizr-2.8.3.min.js"/>
                <script
                    src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"/>
                <script
                    src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-HL8M4CJEZ6"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: ` 
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-HL8M4CJEZ6');
                    `
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}