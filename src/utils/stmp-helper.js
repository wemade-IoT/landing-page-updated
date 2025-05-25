export class SmtpHelper{
    sendEmail(name,message,phoneNumber) {
        console.log("Sending email...");
        const data = {
            service_id: "service_h3ntc7f",
            template_id: "template_jpbli2c",
            user_id: "VScSz3okkHPhvuhgm",
            template_params: {
                name: name,
                message: message,
                phoneNumber: phoneNumber
            }
        }
        const headers = {
            "Content-Type": "application/json"
        }
        const url = "https://api.emailjs.com/api/v1.0/email/send"
        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => {
                    alert("Email sent successfully!");
            })
            .catch(error => {
                alert("Error sending email: " + error);
            });
    }
}