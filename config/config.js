const mongoose = require("mongoose");


mongoose.connect(
 "mongodb+srv://movie123:movie123@cluster0.hpo5ib6.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true } , mongoose.set('strictQuery', false)).then(()=>console.log('connected'))
  .catch(e=>console.log(e));
