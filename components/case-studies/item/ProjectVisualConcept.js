import React from "react";
import styles from '../study-case.module.css'
import Technology from "../../main/Technology";

const ProjectVisualConcept = ({
                                background,
                                businessChallenges,
                                valueDelivered,
                                technologies,
                                industry,
                                duration,
                                teamSize
}) => {

    return (
        <div className="price-box">
            <div className={styles.studyCaseBody} style={{
                backgroundColor: '#686868'
            }}>
                <div className={styles.studyCaseTitle}>Background</div>
                <div className="title-content">
                    {background}
                </div>
                <div className="space-20"/>

                {industry}
                {duration}
                {teamSize}

                <div className="space-20"/>
                <div className={styles.studyCaseTitle}>Business Challenges</div>
                <div className="title-content">
                    <ul>
                        {businessChallenges.map(el => (
                            <li>{el}</li>
                        ))}
                    </ul>
                </div>

                <div className="space-20"/>
                <div className={styles.studyCaseTitle}>Value Delivered</div>
                <div className="title-content">
                    <ul>
                        {valueDelivered.map(el => (
                            <li>
                                <div>{el.title}</div>
                                <div>{el.description}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-20"/>
                <div className={styles.studyCaseTitle}>Technologies</div>
                <div className={styles.studyTitleContent}>
                    {technologies.map(technology =>
                        <Technology image={technology}/>
                    )}
                </div>

                <div className="space-60"/>
            </div>
        </div>
    )
}

export default ProjectVisualConcept;