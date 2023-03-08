const app = require('./app');

const mongoose = require("mongoose");
const { DB_HOST } = process.env;

mongoose.set('strictQuery',true)

mongoose.connect(DB_HOST).then(() => {
  app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
  })
}).catch(err => {
  console.log(err.message);
  process.exit(1);
})


// eliMiWDsIj4K4YF7
