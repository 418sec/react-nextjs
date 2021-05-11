import React from "react";
import styles from './prices.module.css'

const TECHNOLOGIES = [
    ["Java", "React", "SQL"],
    ["Node.js", "Angular", "NoSQL"],
    ["Amazon Web Services", "NextJS", "Message Brokers"],
    ["Google Cloud", "UI/UX", "Container Orchestration"]
]

const BUSINESS_DOMAINS = [
    ["Financial Services", "eCommerce", "Real Estate"],
    ["Healthcare", "Enterprise", "Travel & Hospitality"],
    ["eLearning", "Video & Entertainment", "Insurance"]
]

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SurveyBlocks = () => {
    const [selectedTechnologies, changeSelectedTechnologies] = React.useState([]);
    const [dateRange, setDateRange] = React.useState(1);
    const changeSelectedPreferences = React.useCallback((e) => {
        if (e.target.checked) {
            changeSelectedTechnologies(val => {
                val.push(e.target.value)
                return val;
            })
        } else {
            changeSelectedTechnologies(val => {
                const index = val.indexOf(e.target.value);
                if (index > -1) {
                    val.splice(index, 1);
                }
                return val;
            })
        }
    }, [changeSelectedTechnologies]);

    const [showSizeLimitError, setShowSizeLimitError] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [isCompanyError, setCompanyError] = React.useState(false);
    const [isPhoneError, setPhoneError] = React.useState(false);
    const [isValidForm, setIsValidForm] = React.useState(false);
    const [fileName, setFileName] = React.useState(null);
    const [base64, setBase64] = React.useState('');

    const nameRef = React.useRef('');
    const emailRef = React.useRef('');
    const companyNameRef = React.useRef('');
    const phoneRef = React.useRef('');
    const messageRef = React.useRef('');
    const fileRef = React.useRef('');
    const durationRef = React.useRef('');
    const customTechnologyRef = React.useRef('');
    const customDomainRef = React.useRef('');

    const validateName = (m_name) => {
        const name = m_name.trim();
        if (!name) {
            setNameError(true);
            return false;
        }
        return true;
    }

    const validateEmail = (m_email) => {
        const email = m_email.trim();
        if (email.length) {
            const result = EMAIL_REGEX.test(email.toLowerCase());
            setEmailError(!result);
            return result
        }
        setEmailError(true);
        return false;
    }

    const validateCompanyName = (name) => {
        const val = name.trim();
        setCompanyError(false);
        if (val) {
            const limitExceeded = val.length > 256
            setCompanyError(limitExceeded)
            return !limitExceeded;
        }
        return true;
    }

    const validatePhone = (phone) => {
        const val = phone.trim();
        setPhoneError(false)
        if (val) {
            const limitExceeded = val.length > 20
            setPhoneError(limitExceeded);
            return !limitExceeded;
        }
        return true;
    }

    const isFormValid = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const companyName = companyNameRef.current.value;
        const phoneNumber = phoneRef.current.value;
        const isValidName = validateName(name);
        const isValidEmail = validateEmail(email);
        const isValidCompanyName = validateCompanyName(companyName);
        const isValidPhoneNumber = validatePhone(phoneNumber);
        return isValidName && isValidEmail && isValidCompanyName && isValidPhoneNumber && !showSizeLimitError;
    }

    const onSendCallback = React.useCallback((e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsValidForm(true);
            sendProjectRequest();
        } else {
            setIsValidForm(false);
        }
    })

    const sendProjectRequest = () => {
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fromEmail: emailRef.current.value,
                subject: 'Request from Pricing page',
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                company: companyNameRef.current.value,
                file: base64,
                descriptions: `
                          <p>Description: ${messageRef.current.value}</p>
                          <p>Selected items: ${selectedTechnologies}</p>
                          <p>Duration: ${durationRef.current.value}</p>
                          <p>Custom options: ${customDomainRef.current.value}, ${customTechnologyRef.current.value}</p>
                          `
            })
        })
    }

    const renderCheckBoxOption = (list) => {
        const options = []
        list.forEach((option, idx) => {
            options.push((
                <div key={idx} className="col-sm-4">
                    <label className={`checkbox-inline ${styles.container}`}>
                        {option}
                        <input type="checkbox" id={option} value={option} onClick={changeSelectedPreferences}/>
                        <span className={styles.checkmark}/>
                    </label>
                </div>
            ));
        })
        return options
    }

    const renderRadioOptions = (list) => {
        const options = []
        list.forEach((option, idx) => {
            options.push((
                <div key={idx} className="col-sm-4">
                    <label className={`checkbox-inline ${styles.radioContainer}`}>
                        {option}
                        <input type="radio" id={option} value={option} onClick={changeSelectedPreferences}
                               name="domain"/>
                        <span className={styles.radioCheckmark}/>
                    </label>
                </div>
            ));
        })
        return options
    }

    const renderBusinessDomains = () => {
        return BUSINESS_DOMAINS.map(option => (
            <div className="row" style={{
                marginRight: '5px'
            }}>
                {renderRadioOptions(option)}
            </div>
        ))
    }

    const renderTechnologies = () => {
        return TECHNOLOGIES.map(option => (
            <div className="row" style={{
                marginRight: '5px'
            }}>
                {renderCheckBoxOption(option)}
            </div>
        ));
    }

    const renderTechnologiesRow = () => (
        <div className="row">
            <div className={styles.surveyBox}>
                <div className={styles.surveyBody}>
                    <div className={styles.surveyCaseTitle}>Technologies</div>
                    <div className="title-content">
                        Specify the technologies
                    </div>
                    <div className="space-20"/>
                    {renderTechnologies()}
                    <div className="form-group">
                        <label>Not listed? Please, fill here you need</label>
                        <input ref={customTechnologyRef} className="form-control"
                               placeholder="Please, add your own options"/>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderBusinessDomainsRow = () => (
        <div className="row">
            <div className={styles.surveyBox}>
                <div className={styles.surveyBody}>
                    <div className={styles.surveyCaseTitle}>Business Domain</div>
                    <div className="title-content">
                        Choose the most appropriate business domain for your project.
                    </div>
                    <div className="space-20"/>
                    {renderBusinessDomains()}
                    <div className="form-group">
                        <label>Not listed? Please, fill here you need</label>
                        <input ref={customDomainRef} className="form-control"
                               placeholder="Please, add your own options"/>
                    </div>
                </div>
            </div>
        </div>
    );

    const getDurationEstimate = (duration) => {
        console.log('asdadaqwe');
        if (duration < 12) {
            return `${duration} month${duration === '1' || duration === 1 ? '' : 's'}`
        }
        if (duration >= 12 && duration < 24) {
            const months = duration - 12;
            return months > 0 ? `1 year ${months} month${months === 1 ? '' : 's'}` : `1 year`
        }
        if (duration === '24') {
            return '2 years'
        }
        if (duration > 24) {
            return 'More that 2 years'
        }
    }

    const onFileChange = React.useCallback((e) => {
        const file = e.target.files[0];
        if (file.size < 1000000) {
            let reader = new FileReader()
            setFileName(fileRef.current.value.substr(fileRef.current.value.lastIndexOf('\\') + 1).split('.')[0])
            reader.addEventListener('loadend', event => {
                setBase64(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
            setShowSizeLimitError(false);
        } else {
            setShowSizeLimitError(true);
        }
    }, [setFileName]);

    const renderInputName = () => (
        <div className={`${styles.formBox}`}>
            <input ref={nameRef} type="text"
                   className="form-control"
                   name="name" placeholder="Name"
                   onChange={() => setNameError(false)}
                   style={{
                       borderColor: nameError ? 'red' : '#ccc'
                   }}
                   max={256}
            />
            {nameError ? 'Please, enter valid name' : (<div className="space-30"/>)}
        </div>
    )

    const renderInputEmail = () => (
        <div className={`${styles.formBoxLast}`}>
            <input ref={emailRef} type="email"
                   className="form-control"
                   name="email"
                   placeholder="Email"
                   onChange={() => setEmailError(false)}
                   style={{
                       borderColor: emailError ? 'red' : '#ccc'
                   }}
                   max={256}
            />
            {emailError ? 'Please, enter valid email' : (<div className="space-30"/>)}
        </div>
    )

    const renderInputCompanyName = () => (
        <div className={`${styles.formBox}`}>
            <input ref={companyNameRef} type="text"
                   className="form-control"
                   name="companyName"
                   placeholder="Company Name"
                   max={256}
                   style={{
                       borderColor: isCompanyError ? 'red' : '#ccc'
                   }}
            />
            {isCompanyError ? 'Please, enter valid company name' : (<div className="space-30"/>)}
        </div>
    )

    const renderInputMobilePhone = () => (
        <div className={`${styles.formBoxLast}`}>
            <input ref={phoneRef} type="number"
                   className="form-control"
                   name="phoneNumber"
                   placeholder="Phone Number"
                   style={{
                       borderColor: isPhoneError ? 'red' : '#ccc'
                   }}
            />
            {isPhoneError ? 'Please, enter valid phone number' : (<div className="space-30"/>)}
        </div>
    )

    const renderUploadFile = () => (
        <div className={styles.uploadFile}>
            <input ref={fileRef} type="file"
                   name="file" id="file"
                   className={styles.fileInput}
                   onChange={onFileChange}
            />
            <label htmlFor="file" className={`btn btn-tertiary ${styles.uploadLabel}`}>
                {fileName || "Upload File"}
            </label>
        </div>
    )

    const renderContactUs = () => (
        <div className={`${styles.subscribeForm} text-center`}>
            <div className="comment-respond">
                <h4>Tell us about your project</h4>
                <form action="#" className="comment-form" id="contact-form">
                    <div className={`form-double ${styles.contact}`}>
                        {renderInputName()}
                        {renderInputEmail()}
                    </div>
                    <div className={`form-double ${styles.contact}`}>
                        {renderInputCompanyName()}
                        {renderInputMobilePhone()}
                    </div>
                    {/*{renderUploadFile()}*/}
                    {showSizeLimitError && (<p style={{color: 'red'}}>File is too large</p>)}
                    {/*<div className="space-30"/>*/}

                    <textarea ref={messageRef} id="comment" name="message" rows="5" className="form-control"
                              placeholder="Type Your Message..."/>
                    <div className="space-30"/>
                </form>
            </div>
            <div className={styles.surveyCaseButtonContent}>
                <button type="button" className={`bttn-white wow fadeInUp ${styles.contactCaseButton}`}
                        data-toggle={isValidForm ? 'modal' : ''}
                        data-target="#successModal"
                        style={{
                            color: '#ffffff'
                        }}
                        onClick={onSendCallback}>
                    Get Price
                </button>
            </div>
            {renderModal()}
        </div>
    )

    const getDiscountColor = () => {
        if (dateRange >= 6 && dateRange < 12) {
            return `${styles.lowDiscount}`
        }
        if (dateRange >= 12 && dateRange < 24) {
            return `${styles.midDiscount}`
        }
        if (dateRange >= 24) {
            return `${styles.highDiscount}`
        }
    }

    const renderDiscount = () =>
        dateRange >= 6 && (
            <div className={`${styles.discountLabel} ${getDiscountColor()}`}><span>Discount</span></div>
        )

    const renderModal = () => (
        <div className="modal fade" id="successModal" role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document" style={{
                top: '30%'
            }}>
                <div className="modal-content">
                    <div className="modal-header" style={{
                        borderBottom: 'none'
                    }}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => document.location.reload()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div style={{
                            fontSize: "30px",
                            fontWeight: "500"
                        }}>
                            Thank you for contacting us!
                        </div>
                        <div style={{
                            marginTop: '20px'
                        }}>
                            <div>
                                We have received your message
                            </div>
                            <div>
                                We will reach you out immediately!
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer"
                         style={{
                             borderTop: 'none',
                             paddingTop: "0"
                         }}>
                        <button type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={() => document.location.reload()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {renderTechnologiesRow()}
            {renderBusinessDomainsRow()}

            <div className="row">
                <div className={styles.surveyBox}>
                    <div className={styles.surveyBody}>
                        <div className={styles.surveyCaseTitle}>
                            Duration
                            {renderDiscount()}
                        </div>
                        <div className="title-content">
                            Choose the most appropriate business domain for your project.
                        </div>
                        <div className="space-20"/>
                        <input ref={durationRef} type="range" className={`custom-range ${styles.range}`}
                               min="1" max="25" step="1" value={dateRange}
                               onChange={(e) => setDateRange(e.target.value)}/>
                        <p className={styles.duration}>Duration estimate: {getDurationEstimate(dateRange)}</p>
                        {renderContactUs()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SurveyBlocks;