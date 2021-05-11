import React from "react";
import {isMobile} from 'react-device-detect'
import styles from './visual.module.css'

const ProjectAppearance = ({
                               title,
                               description,
                               image,
                               inverse,
                           }) => {

    const renderDesktop = () => (
        <>
            {!inverse && (<div className={styles.studyCaseBodyHeader}>
                <img src={`/images/case-studies/${image}`} alt={''}/>
            </div>)}
            <div className={inverse ? styles.studyCaseBodyInverse : styles.studyCaseBody}>
                <div className={styles.studyCaseContent}>
                    <div className={styles.visualTitle}>{title}</div>
                    <div className={styles.visualDescription}>
                        {description}
                    </div>
                    <div className="space-60"/>
                </div>
            </div>
            {inverse && (<div className={styles.studyCaseBodyHeader}>
                <img src={`/images/case-studies/${image}`} alt={''}/>
            </div>)}
        </>
    )

    const renderMobile = () => (
        <>
            <div className={styles.studyCaseBodyHeader}>
                <img src={`/images/case-studies/${image}`} alt={''}/>
            </div>
            <div className={styles.studyCaseBody}>
                <div className={styles.visualTitle}>{title}</div>
                <div className={styles.visualDescription}>
                    {description}
                </div>
            </div>
        </>
    )

    const renderCase = () => {
        if (isMobile) {
            return renderMobile()
        }
        return renderDesktop();
    }

    return (
        <div className={styles.visualBox}>
            {renderDesktop()}
        </div>
    )
}

export default ProjectAppearance;