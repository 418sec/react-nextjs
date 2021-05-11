import React from "react";
import Link from "next/link";
import styles from './study-case.module.css'
import Technology from "../main/Technology";

const StudyCase = ({id, backgroundColor, projectName, description, result, technologies, inverse}) => {

    return (
        <div className="price-box">
            {!inverse && (<div className={styles.studyCaseBodyHeader}>
                <img src={`/images/case-studies/hotel/1.png`} alt={''} style={{
                    borderRadius: '5px',
                }}/>
            </div>)}
            <div className={styles.studyCaseBody} style={{
                backgroundColor
            }}>
                <div className={styles.studyCaseTitle}>{projectName}</div>
                <div className="title-content">
                    {description}
                </div>
                <div className="space-20"/>
                <div className={styles.studyCaseTitle}>Result</div>
                <div className="title-content" dangerouslySetInnerHTML={{__html: result}}/>

                <div className="space-20"/>
                <div className={styles.studyCaseTitleTechnologies}>Technologies</div>
                <div className={styles.studyTitleContent}>
                    {technologies.map(technology => <Technology image={technology}/>)}
                </div>

                <div className="space-60"/>
                <div className={styles.studyCaseButton}>
                    <Link href={`/case-studies/${id}`}>See this case</Link>
                </div>
            </div>
            {inverse && (<div className={styles.studyCaseBodyHeader}>
                <img src={`/images/case-studies/hotel/1.png`} alt={''} style={{
                    borderRadius: '5px'
                }}/>
            </div>)}
        </div>
    )
}

export default StudyCase;