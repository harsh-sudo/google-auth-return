const mongoose = require('mongoose')

mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://somethingreallyyaar:aaspasshaipasspass@kuchbhi.lelra0v.mongodb.net/?retryWrites=true&w=majority')

var userSchema = mongoose.Schema({
  name:String,
  email:String
})

module.exports = mongoose.model('user',userSchema);
