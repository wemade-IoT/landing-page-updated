import SmtpHelper from "../utils/stmp-helper.js";

const phoneNumberInputText = document.getElementById('phone-number-input-text');
const emailInputText = document.getElementById('email-input-text');
const skillsTextArea = document.getElementById('skills-text-area');

const sendButton = document.getElementById('submit-button');

sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    const phoneNumber = phoneNumberInputText.value;
    const email = emailInputText.value;
    const skills = skillsTextArea.value;
    if (!phoneNumber || !email || !skills) {
        alert("Please fill in all fields.");
        return;
    }
    const smtpHelper = new SmtpHelper();
    try{
        smtpHelper.sendEmail(email, skills, phoneNumber);
    } catch (e){
        console.error(e)
    }
})