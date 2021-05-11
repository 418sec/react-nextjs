import React from "react";

const TechnologyImage = ({image}) => {
    return (
        <div className="box-icon">
            <img src={`/images/${image}`} className="technology-logo" alt={''}/>
        </div>
    )
}

export default TechnologyImage;