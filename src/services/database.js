const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.createConnection( process.env.DATABASE_URL, 
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}  
,() => {
  console.log('Database was connected');
});
