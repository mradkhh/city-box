import React from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
import Header from "components/Header/Header";

const Footer = dynamic(() => import('components/Footer/Footer'))



interface main {
 children: React.ReactNode
}


const Main = ({ children }: main) => {



    return (
        <>
            <Head>
                <title>CityBox</title>
                <meta property="og:title" content={'citybox'} />
                <meta name="description" content={'citybox'} />
                <meta name="keywords" content={'citybox'} />
                <meta property="og:url" content={'citybox'} />
                <meta property="og:type" content={'citybox'} />
                <meta property="og:description" content={'citybox'} />
                <meta property="og:site_name" content={'citybox'} />
                <meta property="og:image" content={'citybox'} />
            </Head>
            <Header/>
            { children }
            <Footer/>
        </>
    )
}

export default Main