<template>
<v-btn @click="saveNotificationToken(registrationToken)">Notif</v-btn>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/messaging'
import axios from 'axios';



@Component
export default class FirebaseItem extends Vue {

    registrationToken = null

    saveNotificationToken(token) {
      console.log("TOKEN", token)
      const payload = {
        registrationTokens: [token],
        topic: "test"
      }
      axios.post('http://localhost:3000/notifications/suscribe', {
        registrationTokens: [token, ""],
        topic: "test"
      },
      {headers : { "Content-type": "application/x-www-form-urlencoded" }})
        .then((response) => {
          console.log('Successfully saved notification token!')
          console.log(response.data)
        })
        .catch((error) => {
          console.log('Error: could not save notification token')
          if (error.response) {
            console.log(error.response.status)
            // Most of the time a "this field must be unique" error will be returned,
            // meaning that the token already exists in db, which is good.
            if (error.response.data.registration_id) {
              for (let err of error.response.data.registration_id) {
                console.log(err)
              }
            } else {
              console.log('No reason returned by backend')
            }
            // If the request could not be sent because of a network error for example
          } else if (error.request) {
            console.log('A network error occurred.')
            // For any other kind of error
          } else {
            console.log(error.message)
          }
        })
      }

    mounted() {
        var config = {
            apiKey: "AIzaSyB9fK1jMcJSGK0YBvOvzcGb4Zgk1uzFX-4",
            authDomain: "nodeeat.firebaseapp.com",
            projectId: "nodeeat",
            storageBucket: "nodeeat.appspot.com",
            messagingSenderId: "116083255744",
            appId: "1:116083255744:web:10f835ef90235c7bdb4025",
            measurementId: "G-EZM56QJ1LL",
        }
        firebase.initializeApp(config)

        const messaging = firebase.messaging()

        messaging.usePublicVapidKey("BHYFK1M4CiPTi5WLOFcB7Oyv2sz6xjjXcFNo0Mh-nM0-Q1OC6j_eM7Cllm1xMR_bw55NMMisguihBeGLkrBCbTs")

        messaging.requestPermission().then(() => {
        console.log('Notification permission granted')
        messaging.getToken().then((token) => {
            console.log('New token created: ', token)
            this.registrationToken = token
            this.saveNotificationToken(token)
        })
        }).catch((err) => {
        console.log('Unable to get permission to notify.', err)
        })

        messaging.onTokenRefresh(function () {
        messaging.getToken().then(function (newToken) {
            console.log('Token refreshed: ', newToken)
            this.saveNotificationToken(newToken)
        }).catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err)
        })
        })
    }
    

}
</script>