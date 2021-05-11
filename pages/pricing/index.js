import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Prices from "../../components/prices/Prices";

const Index = () => {
    return (
        <>
            <Header>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">Cost Calculator</h1>
                <div className="space-20"/>
                <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                    <h3>
                        Find the approximate cost of your new project team of world class experts
                    </h3>
                </div>
            </Header>

            <Prices />

            <Footer/>
        </>
    )
}

export default Index;