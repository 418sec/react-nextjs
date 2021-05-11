import React from "react";
import styles from './project-icons.module.css'

const ProjectDescriptionIcons = ({industry, value, icon}) => (
    <div className={styles.iconWrapper}>
        <div className={styles.iconContent}>
            <div className={styles.icon}>
                <span className={`lnr ${icon} ${styles.iconSpan}`}/>
            </div>
            <div className={styles.iconTitle}>
                {industry}
            </div>
            <div className={styles.iconDescription}>
                {value}
            </div>
        </div>
    </div>
)

export default ProjectDescriptionIcons;