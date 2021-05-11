import React from "react";
import Header from "../../components/Header";
import Scripts from "../../components/Scripts";
import styles from "../../components/approaches/approach.module.css";

const Index = () => {
    return (
        <>
            <Header>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                    Privacy Policy for Apolemme
                </h1>
            </Header>

            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="container">

                            <div className="row">
                                <div className={styles.approachBox}>
                                    <div className={styles.approachBody}>
                                        <div className="title-content" style={{
                                            textAlign: "justify"
                                        }}>

                                            <p>At Apolemme, accessible from <a href="https://apolemme.com">apolemme.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Apolemme and how we use it.</p>

                                            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                                            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Apolemme. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                                            <h2>Consent</h2>

                                            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                                            <h2>Information we collect</h2>

                                            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                                            <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                                            
                                            <h2>How we use your information</h2>

                                            <p>We use the information we collect in various ways, including to:</p>

                                            <ul>
                                                <li>Provide, operate, and maintain our website;</li>
                                                <li>Improve, personalize, and expand our website;</li>
                                                <li>Understand and analyze how you use our website;</li>
                                                <li>Develop new products, services, features, and functionality;</li>
                                                <li>Communicate with you, either directly to provide you with updates and other information relating to the website, and for marketing and promotional purposes;</li>
                                                <li>Send you emails;</li>
                                                <li>Find and prevent fraud.</li>
                                            </ul>

                                            <h2>Cookies and Web Beacons</h2>

                                            <p>Like any other website, Apolemme uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                                            <p>For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies" from Cookie Consent</a>.</p>

                                            <h2>Third Party Privacy Policies</h2>
                                            <p>Apolemme's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                                            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

                                            <h2>GDPR Data Protection Rights</h2>
                                            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                                            <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                                            <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                                            <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
                                            <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                                            <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
                                            <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                                            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                                            <h2>Alterations</h2>
                                            <p>This policy may be updated on occasions and the new version will be published on our website.</p>
                                            <p>You ought to check this page at times to make sure that you are satisfied with any changes to this policy.</p>
                                            <p>We may inform you about changes to this policy by email.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Scripts/>
        </>
    )
}

export default Index;