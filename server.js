var nodemailer = require('nodemailer')
var express = require('express')

let app = express();
let port = process.env.PORT || 3000;

//setup main


app.put("/forgot/:email/:pass", function (request, response) {
    try {
      console.log(request.params.email);
      console.log(request.params.pass);

      var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
              user: 'trunghaukmhd@gmail.com',
              pass: 'Muopmuop20092015'
          }
      });

      var mailOptions = {
        from: 'trunghaukmhd@gmail.com', // sender address
        to: request.params.email, // list of receivers
        subject: 'Dinotes Forgot Password', // Subject line
        html: '<p>Your password is '+request.params.pass+'</p>'// plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        console.log(err +" // "+infor);
         if(err)
           response.send(err);
         else
           response.send(infor);
      });


    } catch (e) {
      response.status(500).send(e);
    }
});

app.put("/getname/:id/:name",function(request,response){
  try {
    response.send(request.params.id+" :: "+request.params.name);
  } catch (e) {

  } finally {

  }
});

app.listen(port);
console.log('RESTful API server started on: ' + port);


// var transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//         user: 'trunghaukmhd@gmail.com',
//         pass: 'Muopmuop20092015'
//     }
// });




// transporter.sendMail(mailOptions, function (err, info) {
//    if(err)
//      console.log(err)
//    else
//      console.log(info);
// });
