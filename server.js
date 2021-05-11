const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const fs = require('fs');


const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = ""
const CLIENT_SECRET = ""
const REFRESH_TOKEN = ""
const REDIRECT_URL = "https://developers.google.com/oauthplayground/";
const COMPANY_EMAIL = "info@apolemme.com"
const COMPANY_EMAIL_NO_REPLY = "no-reply@apolemme.com"

const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);
oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: COMPANY_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
    }
});

const sendMailToApolemme = ({
                                fromEmail,
                                descriptions,
                                name,
                                company,
                                phone,
                                subject,
                                file,
                            }) => {
    fs.readFile('./email-template/customer-request-template/index.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        const message =
            data.replace("${name}", name)
                .replace("${email}", fromEmail)
                .replace("${companyName}", company && company.length ? company : 'Not specified')
                .replace("${phoneNumber}", phone && phone.length ? phone : 'Not specified')
                .replace("${message}", descriptions && descriptions.length ? descriptions : 'Not specified')

        const mailOptions = {
            from: fromEmail,
            to: COMPANY_EMAIL,
            subject: subject,
            generateTextFromHTML: true,
            html: message,
            attachments: [
                {
                    path: file
                }
            ]
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console.log(error) : console.log(response);
            smtpTransport.close();
        });
    });
}

const sendMailToCustomer = ({
                                fromEmail
                            }) => {
    fs.readFile('./email-template/general-template/index.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        const mailOptions = {
            from: COMPANY_EMAIL_NO_REPLY,
            to: fromEmail,
            subject: "Thank you for your interest in Apolemme!",
            generateTextFromHTML: true,
            html: data,
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console.log(error) : console.log(response);
            smtpTransport.close();
        });
    });
}


const SendMail = (params) => {
    sendMailToApolemme(params);
    sendMailToCustomer(params);
}

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.post('/api/contact', (req,) => {
        SendMail(req.body);
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err
    })
})