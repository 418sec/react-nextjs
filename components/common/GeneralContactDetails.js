import React from "react";
import styles from "./generalcontactdetails.module.css";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const GeneralContactDetails = ({buttonName = 'Send', title = 'Tell us about your project'}) => {

    const [showSizeLimitError, setShowSizeLimitError] = React.useState(false);
    const [isNameError, setNameError] = React.useState(false);
    const [isEmailError, setEmailError] = React.useState(false);
    const [isCompanyError, setCompanyError] = React.useState(false);
    const [isPhoneError, setPhoneError] = React.useState(false);
    const [isValidForm, setIsValidForm] = React.useState(false);
    const [base64, setBase64] = React.useState('');
    const [fileName, setFileName] = React.useState(null);

    const nameRef = React.useRef('');
    const emailRef = React.useRef('');
    const messageRef = React.useRef('');
    const phoneRef = React.useRef('');
    const companyNameRef = React.useRef('');
    const fileRef = React.useRef('');

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

    const onSendCallback = React.useCallback(async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsValidForm(true);
            await fetch('/api/contact', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fromEmail: emailRef.current.value,
                    subject: 'Request from Pricing page',
                    file: base64,
                    name: nameRef.current.value,
                    descriptions: messageRef.current.value,
                    company: companyNameRef.current.value,
                    phone: phoneRef.current.value
                })
            })
        } else {
            setIsValidForm(false);
        }
    })

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

    const renderNameInput = () => (
        <div className={`${styles.formBox}`}>
            <input ref={nameRef} type="text"
                   className="form-control"
                   name="name" placeholder="Name"
                   onChange={() => setNameError(false)}
                   style={{
                       borderColor: isNameError ? 'red' : '#ccc'
                   }}
                   max={256}
            />
            {isNameError ? 'Please, enter valid name' : (<div className="space-30"/>)}
        </div>
    )

    const renderEmailInput = () => (
        <div className={`${styles.formBoxLast}`}>
            <input ref={emailRef} type="email"
                   className="form-control"
                   name="email"
                   placeholder="Email"
                   onChange={() => setEmailError(false)}
                   style={{
                       borderColor: isEmailError ? 'red' : '#ccc'
                   }}
                   max={256}
            />
            {isEmailError ? 'Please, enter valid email' : (<div className="space-30"/>)}
        </div>
    );

    const renderCompanyNameInput = () => (
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
    );

    const renderPhoneNumberInput = () => (
        <div className={`${styles.formBoxLast}`}>
            <input ref={phoneRef} type="number"
                   className="form-control"
                   name="phoneNumber"
                   placeholder="Phone Number"
                   style={{
                       borderColor: isPhoneError ? 'red' : '#ccc'
                   }}
            />
            {isPhoneError ? 'Please, enter valid phoneNumber' : (<div className="space-30"/>)}
        </div>
    );

    const renderUploadFileInput = () => (
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

    return (
        <div className={`${styles.subscribeForm} text-center`}>
            <div className="comment-respond">
                <h4>{title}</h4>
                <form action="#" className="comment-form" id="contact-form">
                    <div className={`form-double ${styles.contact}`}>
                        {renderNameInput()}
                        {renderEmailInput()}
                    </div>
                    <div className={`form-double ${styles.contact}`}>
                        {renderCompanyNameInput()}
                        {renderPhoneNumberInput()}
                    </div>
                    {/*{renderUploadFileInput()}*/}
                    {/*{showSizeLimitError && (<p style={{color: 'red'}}>File is too large</p>)}*/}
                    {/*<div className="space-30"/>*/}
                    <textarea ref={messageRef} id="comment" name="message" rows="5" className="form-control"
                              placeholder="Type Your Message..."/>
                    <div className="space-30"/>
                </form>
            </div>
            <div className={styles.contactContent}>
                <button type="button" className={`bttn-white wow fadeInUp ${styles.contactCaseButton}`}
                        data-toggle={isValidForm ? 'modal' : ''}
                        data-target="#successModal"
                        style={{
                            color: '#ffffff'
                        }}
                        onClick={onSendCallback}>
                    {buttonName}
                </button>
            </div>
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
        </div>
    )
}

export default GeneralContactDetails;