import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.TWILIO_SEND_GRID_SERVER_TOKEN!)

export async function sendEmail(to: string, subject: string, textBody: string) {
    const data = {
        from: process.env.FROM_EMAIL!,
        to: to,
        subject: subject!,
        text: textBody,
        html: textBody,
    };
    try {
        const response = await sgMail.send(data);
        return response;
    } catch (error) {
        throw error;
    }
}