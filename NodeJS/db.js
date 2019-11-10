const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://maddy:maddy1234@cluster0-1txv8.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, err => {
    if(!err){
        console.log("Mongodb connection succeeded");
    }
    else{
        console.log("error in db connection: " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;
