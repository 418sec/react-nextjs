import React from "react";
import StudyCases from "../../components/case-studies/StudyCases";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Index = () => {
    return (
        <>
            <Header>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">Discover our works</h1>
                <div className="space-20"/>
                <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                    <h3>
                        We have helped successfully launch clients' projects of different stages: from
                        product idea
                        validation, MVP implementation to scaling, further development and support.
                    </h3>
                </div>
            </Header>

            <StudyCases/>

            <Footer/>
        </>
    )
}

export default Index;