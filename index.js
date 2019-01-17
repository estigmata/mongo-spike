const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });
const db = mongoose.connect('mongodb+srv://su-creative:MasterKey123@cluster0-4latm.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});
