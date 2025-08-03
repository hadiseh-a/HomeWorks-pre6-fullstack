import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hadisea82@gmail.com",
    pass: "wzpbxuslwrlwbaij",
  },
});

const senderEmail = (client, subject, text) => {
  const mailOptions = {
    from: "to do App",
    to: client,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOptions);
};

export default senderEmail;
