const mongoose = require("mongoose");

mongoose.connect = async() => {
  try{
      await mongoose.connect(db, 
          // Add the below objects are there to avoid mongoose depriction warnings
          {useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
          }
          );
      console.log('Mondodb connected');
  }
  catch(err){
      console.error(err);
      //EXIT process with a failure
      process.exit(1);
  }
};
module.exports = mongoose;
