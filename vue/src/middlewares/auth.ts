import VueCookie from 'vue-cookie'

export default function auth({ next, router }) {
    if (!VueCookie.get('jwt')) {
      return router.push({ name: 'Login' });
    }
    return next();
  }