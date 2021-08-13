const mongoose = require('mongoose');

URI=('mongodb://localhost/udemy');


mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false  
})
    .then(db => console.log('base de datos conectada', db.connection.name))
    .catch(error => console.log(error))

module.exports = mongoose;