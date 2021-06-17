import VueCookie from 'vue-cookie'

export default function auth({ next, router }) {
    if (!VueCookie.get('jwt')) {
      console.log("redirecitng..")
      return router.push({ name: 'Login' });
    }
    console.log("here")
    return next();
  }