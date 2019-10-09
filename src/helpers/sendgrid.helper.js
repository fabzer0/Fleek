require("dotenv").config();
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { mailConfig } from "../utils/auth";

const OAuth2 = google.auth.OAuth2;

class VerificationHelper {
  static async sendVerificationEmail(to, token) {
    const { clientID, clientSecret, redirectURI, refreshToken, gmailAccount, baseUrl } = mailConfig;
    const oauth2Client = new OAuth2(clientID, clientSecret, redirectURI);
    oauth2Client.setCredentials({
      refresh_token: refreshToken
    });
    const accessToken = oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: gmailAccount,
        clientId: clientID,
        clientSecret,
        refreshToken,
        accessToken
      }
    });

    const URL = `${baseUrl}/verify?token=${token}&email=${to}`;
    console.log(URL);

    const mailOptions = {
      from: gmailAccount,
      to,
      subject: "Account Verification",
      generateTextFromHTML: true,
      html: `
          <div style="height: 100%; width: 100%; margin: 0; padding: 0; color: black; background-color: white">
            <h3>Kindly click on the link below to activate your account</h3>
            <h3>Click this link ${URL}</h3>      
          </div>
      `
    };

    await smtpTransport.sendMail(mailOptions, (_err, info) => {
      if (_err) {
        console.log(_err);
      }
      console.log(`Email sent: ${info.response}`);
      smtpTransport.close();
    });
  }
}

module.exports = VerificationHelper;
