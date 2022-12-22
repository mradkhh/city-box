import type { NextPage } from 'next'
import React from "react";
import Hero from "screens/Hero";
import dynamic from "next/dynamic";
import Layout from "layouts/Layout";


const Warehouse = dynamic(() => import('screens/Warehouse'));
const ProcessWork = dynamic(() => import('screens/ProcessWork'));
const BoxSize = dynamic(() => import('screens/BoxSize'));
const WhyChooseUs = dynamic(() => import('screens/WhyChooseus'));
const PickUp = dynamic(() => import('screens/PickUp'));
const Faq = dynamic(() => import('screens/Faq'));
const Gallery = dynamic(() => import('screens/Galley'));
const News = dynamic(() => import('screens/News'));
const ContactUs = dynamic(() => import('screens/ContactUs'));


const Index: NextPage = () => {

    return (
    <>
        <Layout>
            <Hero/>
            <Warehouse/>
            <ProcessWork/>
            <BoxSize/>
            <WhyChooseUs/>
            <PickUp/>
            <Faq/>
            <Gallery/>
            <News/>
            <ContactUs/>
        </Layout>
    </>
  )
}

export default Index
