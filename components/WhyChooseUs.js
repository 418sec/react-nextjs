import React from "react";

const WHY_CHOOSE_US_LEFT = [
    {
        title: "Save Your Money",
        text: "We believe, that transparency and efficient process are main principles of successful project. " +
            "Namely, to done project within time and on budged. We know how to save your money and complete your project in time",
        ico: "lnr-diamond"
    },
    {
        title: "Consulting",
        text: "Our experience shows, that successful project depends on an outside perspective and expertise sharing. " +
            "We will help you to choose an appropriate approach to you project and take the right direction to complete your goal",
        ico: "lnr-chart-bars"
    },
    {
        title: "Full Control",
        text: "Transparency, transparency and transparency again. You will have the opportunity to monitor all changes " +
            "that occur in your project and closely communicate with all team members.",
        ico: "lnr-magnifier"
    }
]

const WHY_CHOOSE_US_RIGHT = [
    {
        title: "The Team",
        text: "Expanding your team maintain 100% control over project management. The result-oriented team will take " +
            "care of your project. We focus on high-value, communication and flexibility",
        ico: "lnr-users"
    },
    {
        title: "Support",
        text: "The project support just like oxygen for blood. It makes a profit when it is supported. We do not stop on " +
            "release, we move forward to improve your project to make it more profitable, more beautiful, faster",
        ico: "lnr-rocket"
    },
    {
        title: "Development Standards",
        text: "We use only the best development standards and help you choose the perfect solution for your needs. " +
            "We will create an MVP and figure out how to make your project ready as soon as possible and meet the requirements",
        ico: "lnr-book"
    }
]

const WhyChooseUs = () => {
    return (
        <section id="questions_page" className="questions-area section-padding">
            <div className="space-20"/>
            <div className="space-20"/>
            <div className="space-20"/>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="page-title text-center">
                            <h3 className="dark-color">Why choose us?</h3>
                            <div className="space-60"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        {WHY_CHOOSE_US_LEFT.map(opt => (
                            <div className="page-title text-center">
                                <div className="price-box" style={{
                                    minHeight: "290px",
                                    maxHeight: "290px",
                                }}>
                                    <div className="price-header">
                                        <div className="price-icon-choose-us">
                                            <span className={`lnr ${opt.ico}`}/>
                                        </div>
                                    </div>
                                    <div className="price-body" style={{
                                        textAlign: "justify",
                                        height: '290px'
                                    }}>
                                        <div className="title-service">
                                            {opt.title}
                                        </div>
                                        <div className="title-content">
                                            {opt.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        {WHY_CHOOSE_US_RIGHT.map(opt => (
                            <div className="page-title text-center">
                                <div className="price-box" style={{
                                    minHeight: "290px",
                                    maxHeight: "290px",
                                }}>
                                    <div className="price-header">
                                        <div className="price-icon-choose-us">
                                            <span className={`lnr ${opt.ico}`}/>
                                        </div>
                                    </div>
                                    <div className="price-body" style={{
                                        textAlign: "justify",
                                        height: '290px'
                                    }}>
                                        <div className="title-service">
                                            {opt.title}
                                        </div>
                                        <div className="title-content">
                                            {opt.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs