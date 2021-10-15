const { User } = require('./models.js');

// see if a user exists in the database //
const findOrCreateUser = async function(profile) {
  const user = await User.findOne({ userId: profile.id }).select("_id").lean();
  if (user) {
    return user
  } else {
    let user = new User({
      userId: profile.id,
      displayName: profile.displayName,
    });
    user.save(function(err, data) {
      if (err) {
        console.log(err);
        return err;
      };
      return data;
    })
  }
}

module.exports.findOrCreateUser = findOrCreateUser;