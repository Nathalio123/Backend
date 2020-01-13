const app = require('./server');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3380;

dotenv.config();

app.listen( PORT , () => {

  if(process.env.NODE_ENV === 'development'){
    console.log(`Server is running in ${PORT}`);
  }
})

