const express=require('express');
const ticketController=require('../Controller/ticket');
const router=express.Router();
//to check the availability of the seats
//to get use localhost:5000/api/ticketSeatDetails
router.get('/ticketSeatDetails',ticketController.getTickets);
//to get the seat details which after booking
//to get use localhost:5000/api/ticketdetails/ticketId
router.get('/ticketdetails/:id',ticketController.seatDetails);

//to book the seat
//to get use localhost:5000/api/ticketBooking
router.post('/ticketBooking',ticketController.Addticket);
//to cancel the ticket
//to get use localhost:5000/api/ticketcancel/ticketId
router.delete('/ticketcancel/:id',ticketController.ticketCancel);


module.exports=router;