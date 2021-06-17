export default function auth({ next, router }) {
    if (!localStorage.getItem('user')) {
      console.log("redirecitng..")
      return router.push({ name: 'Login' });
    }
    console.log("here")
    return next();
  }