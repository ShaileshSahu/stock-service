import mongoose from 'mongoose';

module.exports.mongodbConnect = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Listing service mongo db is connected');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log('Mongodb is connected');
        });
    } catch (error) {
        console.log('-- Error in connecting mongodb --', error);
        return process.exit(1);
    }
}