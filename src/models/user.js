var bcrypt = require("bcryptjs");

class User {
  constructor(name, admin) {
    this.name = name;
    this.admin = admin;
  }

  password_hash = async () => {
    const hash = await bcrypt.hash("123456", 8);
    console.log(
      "hash => $2a$08$lBu419hZlIDxdmfHqjNGEOx7wGupm/QiwFx9ZjTT.fgvQb9Rrutby"
    );

    return hash;
  };

  checkPassword(password) {
    return bcrypt.compare(
      password,
      "$2a$08$lBu419hZlIDxdmfHqjNGEOx7wGupm/QiwFx9ZjTT.fgvQb9Rrutby"
    );
  }
}
module.exports = User;
