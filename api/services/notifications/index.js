const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const admin = require('firebase-admin');

const app = express()
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

//example : https://github.com/firebase/snippets-node/blob/master/messaging/index.js

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});





app.post('/notifications/suscribe', (req, res)=>{
    const  registrationTokens = req.body.registrationTokens;
    const topic = req.body.topic;


    admin.messaging().subscribeToTopic(registrationTokens, topic)
      .then((response) => {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log('Successfully subscribed to topic:', response);
      })
      .catch((error) => {
        console.log('Error subscribing to topic:', error);
      });
       res.status(200).send("Subscribed successfully")
        

})



app.post('/notifications/unsuscribe', (req, res)=>{
    const  registrationTokens = req.body.registrationTokens;
    const topic = req.body.topic;


    admin.messaging().unsubscribeFromTopic(registrationTokens, topic)
    .then((response) => {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully unsubscribed from topic:', response);
      return response;
    })
    .catch((error) => {
      console.log('Error unsubscribing from topic:', error);
    });
       res.status(200).send("Unsubscribed successfully")
        

})


app.post('/notifications/send', (req, res)=>{
   
    const topicName = req.body.topicName;

    const message = {
    notification: {
        title: '`$FooCorp` up 1.43% on the day',
        body: 'FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
    },
    android: {
        notification: {
        icon: 'stock_ticker_update',
        color: '#7e55c3'
        }
    },
    topic: topicName,
    };

    admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent notification:', response);
    })
    .catch((error) => {
        console.log('Error sending notification:', error);
    });

    res.status(200).send("Notification sent")
            

})



app.post('/firebase/message', (req, res)=>{
    const  registrationToken = req.body.registrationToken
    //const message = req.body.message 

    const message = {
        data: {
          score: '850',
          time: '2:45'
        },
        token: registrationToken
      };
      
      // Send a message to the device corresponding to the provided
      // registration token.
      admin.messaging().send(message)
        .then((res) => {
          // Response is a message ID string.
          console.log('Successfully sent message:', res);
        })
        .catch((error) => {
          console.log('Error sending message:', error);
        });

       res.status(200).send("Message sent successfully")
        

})




app.listen(PORT, () =>{
    console.log("Listening to port "+ PORT)
})