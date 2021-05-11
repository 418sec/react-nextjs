import React from "react";
import styles from './footer.module.css'
import Scripts from "./Scripts";

const FOOTER_CONTENT = [
    {
        title: "Services",
        items: ["Back-End Development", "Front-End Development", "Integration", "Design"]
    },
    {
        title: "More",
        items: ["Case Studies", "Approach", "Pricing", "Solutions"]
    },
    {
        title: "Contact",
        items: [
            "<i class='lnr lnr-pencil'></i><a href='mailto:info@apolemme.com' style='font-weight:600; margin-left: 5px'>info@apolemme.com</a>",
            "<i class='lnr lnr-phone-handset'></i><a href='tel:380666558230' style='font-weight:600; margin-left: 5px'>+380666558230</a>",
            // "<a href='https://telegram.me/username' style='font-weight:600'>Telegram</a>",
            "<a href='skype:live:.cid.90534f6a7366cec0?chat' style='font-weight:600'>Skype</a>"
        ]
    }
]

const SOC_NETWORKS = [
    {
        link: "https://www.linkedin.com/company/apolemme",
        name: "linkedin"
    },
    {
        link: "https://www.pinterest.com/apolemme",
        name: "pinterest"
    },
    {
        link: "https://www.facebook.com/apolemme/?view_public_for=102316051690123",
        name: "facebook"
    }
]

const Footer = () => {

    const [acceptCookies, setAcceptCookies] = React.useState(true);

    React.useEffect(() => {
        const isCookiesAccepted = localStorage.getItem("uid")
        if (!isCookiesAccepted) {
            setAcceptCookies(false)
        }
    }, [setAcceptCookies])

    const acceptCookiesCallback = React.useCallback(() => {
        localStorage.setItem("uid", " 1:Lsb3DI47foz3VxUA7dLBhXRYwujPehmfclxHmegcVKNT7HLPQ5wdBpbnFNgbML40");
        setAcceptCookies(() => true);
    }, [setAcceptCookies]);

    const renderInfoBlock = (el, key) => (
        <div className={styles.infoBlock} key={key}>
            <div className={`meta-info ${styles.infoBlockTitle}`}>
                {el.title}
            </div>
            <ul className={styles.infoItems}>
                {el.items.map((item, idx) => <li style={{
                    listStyle: 'none'
                }} key={`item${idx}`} dangerouslySetInnerHTML={{__html: item}}/>)}
            </ul>
        </div>
    )

    const renderAcceptCookie = () => (
        <div className={styles.cookieWrapper}>
            <div className={styles.cookieContent}>
                <div className={styles.cookieMessage}>
                    This website uses cookies to ensure you get the best experience on our website.
                </div>
                <a href={'/privacy'} className={styles.cookieLearnMore}>Learn more</a>
                <div className={styles.cookieOkButton} onClick={acceptCookiesCallback}>
                    OK
                </div>
            </div>
        </div>
    )

    return (
        <footer className="footer-area" id="contact_page">
            {!acceptCookies && renderAcceptCookie()}
            <div className="footer-bottom" style={{}}>
                <div className={`container ${styles.mainContainer}`}>
                    {FOOTER_CONTENT.map((el, idx) => renderInfoBlock(el, idx))}
                    <div className={styles.socialAndContactUsBlock}>
                        <div className="meta-info">
                            {SOC_NETWORKS.map((el, idx) => (
                                <a href={el.link} target="_blank" style={{
                                    padding: '2px'
                                }} key={idx}>
                                    <i className={`fa fa-${el.name}-square fa-2x`} aria-hidden="true"/>
                                </a>)
                            )}
                        </div>
                        <button type="button" className="btn"
                                data-target="#successModal"
                                style={{
                                    display: 'block',
                                    marginLeft: '20px',
                                    marginRight: '20px',
                                    backgroundColor: 'rgba(106, 198, 240, 1)',
                                    color: 'white',
                                    padding: '10px',
                                    fontWeight: '700'
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "/#contact-us"
                                }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <span>Copyright All rights reserved</span>
                </div>
            </div>
            <Scripts/>
        </footer>
    )
}

export default Footer