const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ajpalacios.sist@gmail.com',
    pass: 'Cpowercru11'
  }
})

exports.sendMail = (email)=>{
  transporter.sendMail({
    from: "Adan Palacios",
    to: email,
    subject: "Bienvenidos al desmadre",
    text: 'Saquen las beers',
    html: '<h1> vamonos de pedos 3 dias </h1>'
  })
  .then(info=>console.log(info))
  .catch(err=>console.log(err))
}