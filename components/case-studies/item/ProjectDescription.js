import React from "react";
import styles from '../study-case.module.css'
import Technology from "../../main/Technology";
import ProjectDescriptionIcons from "./ProjectDescriptionIcons";

const ProjectDescription = ({
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
                backgroundColor: '#67afe5',
            }}>
                <div className={styles.studyCaseTitle}>Background</div>
                <div className="title-content" style={{
                    lineHeight: '30px'
                }}>
                    {background}
                </div>
                <div className="space-20"/>

                <div className={styles.icons}>
                    <ProjectDescriptionIcons value={industry} industry="Industry" icon="lnr-apartment"/>
                    <ProjectDescriptionIcons value={duration} industry="Duration" icon="lnr-history"/>
                    <ProjectDescriptionIcons value={teamSize} industry="Team size" icon="lnr-users"/>
                </div>

                <div className="space-20"/>
                <div className={styles.studyCaseTitle}>Business Challenges</div>
                <div className="title-content" style={{
                    lineHeight: '35px'
                }}>
                    <ul>
                        {businessChallenges.map(el => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>
                </div>

                <div className="space-20"/>
                <div className={styles.studyCaseTitle}>Value Delivered</div>
                <div className="title-content" style={{
                    lineHeight: '35px'
                }}>
                    <ul>
                        {valueDelivered.map(el => (
                            <li key={el}>
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

export default ProjectDescription;