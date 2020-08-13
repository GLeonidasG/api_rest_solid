import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailtrapProvider, IMail } from '../IMailtrapProvider';


export class MailtrapNodemailer implements IMailtrapProvider {
    private transport: Mail;

    constructor() {
        this.transport = nodemailer.createTransport( {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "dd9188180b28ba",
                pass: "c61241f3b3fcae"
            }
        } );
    }

    async sendEmail( mail: IMail ) {
        try {
            await this.transport.sendMail( {
                to: {
                    address: mail.to.address,
                    name: mail.to.name
                },
                from: {
                    address: mail.from.address,
                    name: mail.from.name
                },
                subject: mail.subject,
                text: mail.body,
            } );
        } catch ( err ) {
            return err;
        }

    }

}