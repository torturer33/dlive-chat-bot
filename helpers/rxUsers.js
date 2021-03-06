const { BehaviorSubject } = require('rxjs');

let tryRequireFromStorage = path => {
  try {
    return require(path);
  } catch (err) {
    return {};
  }
};

const users = tryRequireFromStorage('../storage/users.json');

// This creates a new B.S. which allows us to listen to this node and make changes whenever and whereever we want
const rxUsers = new BehaviorSubject(users);

module.exports = rxUsers;
