//import VueCookie from 'vue-cookies'
export default function auth({ next, router }) {
    const storedUser = localStorage.getItem('ceseat_delivery_user');
    const jwt_cookie = JSON.parse(storedUser ? storedUser : "");
    if (!jwt_cookie) {
        return router.push({ name: 'Login' });
    }
    return next();
}
//# sourceMappingURL=auth.js.map