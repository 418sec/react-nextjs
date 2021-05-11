import React from "react";
import StudyCase from "./StudyCase";
import GeneralContactDetails from "../common/GeneralContactDetails";
import {isMobile} from 'react-device-detect'

const STUDY_CASES = [
    {
        id: "sweden-hotel",
        projectName: "Genarp Bonderup Hospitality Solution",
        description: "Genarp Bonderup is a hotel in North of Sweden",
        result: "<ul>" +
            "       <li>Added few feature such as booking flow, room filtration, dashboard management API etc.</li>" +
            "       <li>Monolith application separated to two services: NodeJS server with frontend application and payment service. Payment service is encapsulate in cloud base</li>" +
            "       <li>...</li>" +
            "    </ul>",
        backgroundColor: 'rgb(103, 136, 229)',
        inverse: false,
        technologies: [
            "java.png", "sql.png", "mongo.png"
        ]
    },
    // {
    //     id: 123,
    //     projectName: "Bank",
    //     description: "Text",
    //     result: "Text",
    //     backgroundColor: '#98DE5B',
    //     inverse: false,
    //     technologies: [
    //         "java.png", "sql.png", "mongo.png"
    //     ]
    // }
]

const StudyCases = () => {

    return (
        <section className="section-padding" id="service">
            <div className="container">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            {STUDY_CASES.map(studyCase =>
                                <div className="col-xs-12 col-sm-12">
                                    <StudyCase {...studyCase}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <GeneralContactDetails/>
            </div>
        </section>
    )
}

export default StudyCases;