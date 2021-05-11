import React from "react";
import styles from '../study-case.module.css'

const ProjectDetails = ({details}) => {

    return (
        <div className="price-box">
            <div className={styles.studyCaseBody} style={{
                backgroundColor: '#6788e5'
            }}>
                {details.map(detail => (
                    <>
                        <div className={styles.studyCaseTitle}>{detail.title}</div>
                        <div className="title-content">
                            {detail.description}
                        </div>
                        <div className="space-20"/>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img src={`/images/case-studies/${detail.img}`} alt={''} style={{
                                borderRadius: '5px',
                                boxShadow: '0 0 10px rgba(0,0,0,0.5);',
                                maxWidth: '100%',
                                height: 'auto'
                            }}/>
                        </div>
                        <div className="title-content" style={{
                            fontWeight: '500',
                            fontSize: '18px',
                            textAlign: 'justify'
                        }} dangerouslySetInnerHTML={{__html: detail.extraText}}/>

                        <div className="space-20"/>
                        <hr style={{
                            border: '0',
                            height: '1px',
                            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0))',
                        }}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetails;