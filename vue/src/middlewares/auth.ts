import VueCookie from 'vue-cookies'

export default function auth({ next, router } : any) {
    // tslint:disable-next-line
    if (!VueCookie.get('jwt')) {
      return router.push({ name: 'Login' });
    }
    return next();
  }