import React from "react";
import TechnologyImage from "./TechnologyImage";

const Technology = ({image, technologyName}) => {
    return (
        <div className="service-box wow fadeInUp" data-wow-delay="0.6s">
            <TechnologyImage image={image} />
            <h4>{technologyName}</h4>
        </div>
    )
}

export default Technology;