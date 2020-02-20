const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ticketSchema=mongoose.Schema({
    BusNo:{
        type:String,
        required:true
    },
    seatNumber:{
        type:Number,
        min:1,
        max:30,
        required:true,
        unique:true
    },
    isBooked:{
        type:Boolean,
        default:true
    },
    date: { type: Date, default: Date.now() },
   
    passengerid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
ticketSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Ticket', ticketSchema);