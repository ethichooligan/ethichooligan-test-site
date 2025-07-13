const db = require('./dbConfig');
class UserRepository {
    constructor(connection) {
        this.connection = connection;
    }
    getUserById(id, callback) {
        this.connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
    }
    createUser(user, callback) {
        this.connection.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [user.username, user.email, user.password],
            callback
        );
    }
}
module.exports = UserRepository;
