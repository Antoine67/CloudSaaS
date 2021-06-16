const config = require('config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, email: 'test@a.fr', password: 'testtest', firstName: 'Test', lastName: 'User' }];

module.exports = {
    signin,
    signup,
    getAll
};

async function signin({ email, password }) {
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) throw 'email or password is incorrect';

    //create JWT token
    const token = jwt.sign(
        { 
            sub: user.id, // uniq identifier

            // passed data
            data: {
                displayName: user.firstName + " " + user.lastName,
                user: omitPassword(user),
                roles: ['user', 'admin']
            }
        },
        config.secret,
        { expiresIn: '1d' } // valid for 1 day
    );

    return {
        ...omitPassword(user),
        token
    };
}

async function signup() {
    return null;
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}