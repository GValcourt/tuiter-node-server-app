import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  replies: Number,
  retuits: Number,
  topic: String,
  time: String,
  title: String,
  image: String,
  handle: String,
  userName: String,
  hasImage: Boolean,
  tuitImage: String,
}, {collection: 'tuits'});
export default schema;