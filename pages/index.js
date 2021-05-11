import React from "react";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProvidedServices from "../components/ProvidedServices";
import Technologies from "../components/Technologies";
import Solutions from "../components/Solutions";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Scripts from "../components/Scripts";

const Index = () => {
    return (
        <>
            <Header>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                    We Raise Software For The Bar
                </h1>
                <div className="space-20"/>
                <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                    <h3>
                        <strong>Apolemme</strong> is a <strong>full-stack software development company</strong> that <strong>helps</strong> your business resolve <strong>challenges</strong> of <strong>any complexity</strong>
                    </h3>
                </div>
                <div className="space-20"/>
                <a href="#contact-us" className="bttn-white wow fadeInUp" data-wow-delay="0.8s" style={{
                    textAlign: 'center'
                }}>
                    <i className="lnr lnr-pencil"/>Tell us about your project
                </a>
            </Header>

            <ProvidedServices/>
            <Technologies/>
            <Solutions/>
            <WhyChooseUs/>
            <ContactUs/>

            <Footer/>
        </>
    )
}

export default Index;