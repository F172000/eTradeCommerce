const mongoose =require('mongoose');
const ENV = require('./config');
const dbURI = ENV.DBURI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000, })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

const subscriberschema=new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});
const Subscribers=new mongoose.model("subscribers",subscriberschema);
module.exports = Subscribers;