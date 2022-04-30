// imports, exports from User.js file
const User = require('./User');
// imports, exports from Post.js file
const Post = require('./Post');

// sets the relationship between the user and the post tables
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
