import React from "react";
import Header from "../../components/Header";
import Approach from "../../components/approaches/Approach";
import Footer from "../../components/Footer";

const Index = () => {
    return (
        <>
            <Header>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                    Our Approach
                </h1>
                <div className="space-20"/>
                <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                    <h3>
                        Best results delivered are only possible when all the team members love what they do.
                        Our experience proves it.
                    </h3>
                </div>
            </Header>

            <Approach/>

            <Footer/>
        </>
    )
}

export default Index;