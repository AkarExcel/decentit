import { createTransport  } from 'nodemailer'
export default function contact(req, res) {
  console.log(req.body)

  const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'merritt92@ethereal.email',
        pass: 'ZpKpEXzF1P1VFV7HPX'
    }
  });

  const mailData = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}