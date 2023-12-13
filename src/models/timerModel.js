const mongoose = require("mongoose")
const Schema = mongoose.Schema

const timerSchema = new Schema({
    
    user_id:{
        type:Schema.Types.ObjetId,ref: 'User',
        required:true,
    },
    time: {
        type : Number,
        required:true,
    },
   
});

module.exports = mongoose.model('Timer',timerSchema);