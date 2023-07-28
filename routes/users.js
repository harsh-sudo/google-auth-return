const mongoose = require('mongoose')

mongoose.set('strictQuery',false)
mongoose.connect('mongodb://localhost:27017/google')

var userSchema = mongoose.Schema({
  name:String,
  email:String
})

module.exports = mongoose.model('user',userSchema);
