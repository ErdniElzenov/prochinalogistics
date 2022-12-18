const express = require("express");
const nodemailer = require("nodemailer");  
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use(express.static('../clients'))



app.get("/", function (request, response) {
  response.sendFile(__dirname + '../clients/index.html')
});


app.post("/", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);

  async function main(textMail){
    let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, 
    auth: {
      user: "", 
      pass: "" 
    }
  });
      
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"prochinalogistics@mail.ru', // sender address
    to: "erdnielzenov11@gmail.com", // list of receivers
    subject: "Здравствуйте " , // Subject line
    text: textMail, // plain text body
    html: "<h2>" + request.body.userName + "<h2> <br>" + "<h2>Телефон " + request.body.userPhone + "<h2> <br>" + "<h2>Почта " + request.body.userEmail + "<h2>" ,// html body
  });



}

main(destinyArry[fate[4] - 1]).catch(console.error);

response.sendFile(__dirname + 'данные успешно отправлены')
});

app.listen(8082, ()=>console.log("Сервер запущен...")); 
