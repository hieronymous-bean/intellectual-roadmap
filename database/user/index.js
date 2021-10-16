const { User } = require('./models.js');

// see if a user exists in the database //
const findOrCreateUser = async function(profile, callback) {
  const user = await User.findOne({ userId: profile.id }).select("_id").lean();
  if (user) {
    console.log('user exists in database');
    return callback(null, user);
  } else {
    console.log('user does not exist - creating a new user')
    let user = new User({
      userId: profile.id,
      displayName: profile.displayName,
    });
    user.save(function(err, data) {
      if (err) {
        console.log('error in creating a new user: ', err);
        return callback(err, null);
      };
      console.log('new user was successfully created');
      return callback(null, data);
    })
  }
  return user;
}

module.exports.findOrCreateUser = findOrCreateUser;