<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Firebase Cloud Messaging Token</h3>
    <code>{{ fcmToken }}</code>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import firebase from "firebase/app";
import "firebase/messaging";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  fcmToken: any;

  data() {
    return {
      fcmToken: "",
    };
  }

  async mounted() {
    const config = {
      apiKey: "AIzaSyB9fK1jMcJSGK0YBvOvzcGb4Zgk1uzFX-4",
      authDomain: "nodeeat.firebaseapp.com",
      projectId: "nodeeat",
      storageBucket: "nodeeat.appspot.com",
      messagingSenderId: "116083255744",
      appId: "1:116083255744:web:10f835ef90235c7bdb4025",
      measurementId: "G-EZM56QJ1LL",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }else {
      firebase.app(); // if already initialized, use that one
    }
    //firebase.initializeApp(config);
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(
      "BHYFK1M4CiPTi5WLOFcB7Oyv2sz6xjjXcFNo0Mh-nM0-Q1OC6j_eM7Cllm1xMR_bw55NMMisguihBeGLkrBCbTs"
    );
    try {
      await messaging.requestPermission();
      console.log('Notification permission granted.')
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Unable to get permission to notify.", err);
    }
    try {
      const currentToken = await messaging.getToken();
      this.fcmToken = currentToken;
      console.log("Token :", currentToken);
      
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Unable to retrieve token.", err);
    }
    const vm = this;
    messaging.onTokenRefresh(async () => {
      try {
        const refreshedToken = await messaging.getToken();
        // eslint-disable-next-line no-console
        console.log("Token refreshed.");
        vm.fcmToken = refreshedToken;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Unable to retrieve refreshed token.", err);
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
