require('dotenv').config();
const express = require("express");
const {sendMail} = require("./emails/contact");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/contact", async (req, res) => {
  const email = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };

  await sendMail(req.body.email, req.body.subject, req.body.message, req.body.name);

  console.log(req.body);

  res.send(req.body);
});

const port = process.env.PORT;

app.listen(port, () => console.log("App started running " + port));
