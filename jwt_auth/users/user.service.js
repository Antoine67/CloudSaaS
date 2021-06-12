const config = require('config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

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

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}