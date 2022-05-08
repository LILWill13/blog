// imports, exports from User.js file
const User = require('./User');
// imports, exports from Post.js file
const Post = require('./Post');
// imports, exports from Comment.js file
const Comment = require('./Comment');

// sets the relationship between the user, post, and comment tables
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});


Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };
