const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
module.exports = async() => {
    const mongoUri ='mongodb+srv://sneha_18_08:Sneha_18_08@cluster0.yaao3sd.mongodb.net/?retryWrites=true&w=majority';
    try{
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Connected to db ${connect.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}