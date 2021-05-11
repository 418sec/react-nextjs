import React from "react";

const PROVIDED_SERVICES = [
    {
        title: 'Back-End Development',
        description: 'Back-End Development',
        content: 'Our team is experienced in developing diverse software solutions whether it is monolithic, ' +
            'service-oriented, microservice or serverless architecture. We know how make your application reliable, ' +
            'fast and profitable. The team stick to the best practices and the best industry standards. We help you to ' +
            'come up with a right solutions for your goal and guarantee full compliance with you expectations.'
    },
    {
        title: 'Front-End Development',
        description: 'Front-End Development',
        content: 'Apolemme team knows how qualitatively and quickly reach the first expected result. We use React and Angular frameworks to ' +
            'make your application extensible, fast and customizable. And of course we know how to use these technologies more efficient using ' +
            'along with Node.js. Highly optimized and highly qualitatively product is our approach of web development.'
    },
    {
        title: 'Integration',
        description: 'Integration',
        content: "Our team has highly experienced in integrating with various 3rd party\n" +
            "                                            systems for diverse tasks such as integration with\n" +
            "                                            payment providers, search engines feeds, maps, POS terminals, etc.\n" +
            "                                            Ensuring reliability and resiliency is one of the main principles of\n" +
            "                                            integration with 3rd party systems.\n" +
            "                                            In addition, we come up with API interface to make possible to use your\n" +
            "                                            product as a part of interactions with other software products" +
            'Apparently, we help you to develop MVP, make research, add features to support A/B testing etc. to make increase ' +
            'profit from your application'
    },
    {
        title: 'UI/UX',
        description: 'Product Design',
        content: "Our approach involves the use of a responsive design to ensure that the\n" +
            "                                            application can work regardless of the platform.\n" +
            "                                            We develop designs of any complexity for any platform using a single\n" +
            "                                            code base for different instances."
    }
]

const ProvidedServices = () => {
    return (
        <section className="section-padding" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="page-title text-center">
                            <h3 className="blue-color">The services we provide:</h3>
                            <div className="space-60"/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {PROVIDED_SERVICES.map((content, idx) => (
                                <div className="col-xs-12 col-sm-12" key={idx}>
                                    <div className="price-box">
                                        <div className="price-header">
                                            <div className="price-icon">
                                                <span className="lnr lnr-code"/>
                                            </div>
                                            <h4 className="upper">{content.title}</h4>
                                        </div>
                                        <div className="price-body">
                                            <div className="title-service">{content.description}</div>
                                            <div className="title-content">
                                                {content.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProvidedServices