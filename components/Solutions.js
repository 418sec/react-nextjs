import React from "react";

const SOLUTIONS = [
    {
        title: "eCommerce",
        img: 'ecommerce.jpg'
    },
    {
        title: "eLearning",
        img: 'learning.webp'
    },
    {
        title: "Insurance",
        img: 'insurance.jpg'
    },
    {
        title: "Media and entertainment",
        img: 'media.jpeg'
    },
    {
        title: "Financial services",
        img: 'financial.png'
    },
    {
        title: "Travel",
        img: 'travel.jpg'
    },
]

const Solutions = () => {
    return (
        <section className="section-padding" id="solutions">
            <div className="container">
                <div className="row"/>
                <div className="page-title">
                    <h3 className="dark-color wow fadeInUp" data-wow-delay="0.4s">Solutions</h3>
                </div>
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                    </div>
                    <div className="space-50"/>
                </div>
            </div>
            <div className="col-xl-12">
                {SOLUTIONS.map((solution, idx) => (
                    <figure className="col-md-4 solution" style={{
                        backgroundImage: `url("/images/solutions/${solution.img}")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'space'
                    }} key={idx}>
                        {solution.title}
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default Solutions