const sgMail = require('@sendgrid/mail')

const sendMail = (from, subject, text, name) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'kubwakennels@gmail.com', // Change to your recipient
  from: 'infohealthsolutions@www.infohealthsolutions.org', // Change to your verified sender
  subject,
  text,
  html: `<strong>from: ${from}</strong>
        <p><strong>Name: ${name}</strong></p>
        <p><strong>Body: ${text}</strong><p>`
        ,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}

module.exports = {
  	  sendMail
    }