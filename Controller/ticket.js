const Ticket=require('../Model/Ticket');
const User =require('../Model/User');
//create ticket or seat booking with details
exports.Addticket=(req,res,next) =>{

    const user=new User({
               name:req.body.name,
                 sex:req.body.sex,
                 age:req.body.age,
                 phone:req.body.phone,
                 email:req.body.email,
                 
             });
             user.save().then(data =>{
                const ticket =new Ticket({seatNumber:req.body.seatNumber,BusNo:'KS1234',passengerid:data._id});
                 if(data){
                     ticket.save().then(data=>{
                         res.status(200).json({ message:"successfully  ticket is booked with user data",   user:user,ticket:ticket});
                     }).catch(err=>{
                         console.log(err);
                         
                     })
                 }
             }).catch(err=>{
                 console.log(err);
                 
             })
}

// bus seats availability details
exports.getTickets =(req,res,next)=>{
   var seatNumbers=[];
    Ticket.find({isBooked : true}).then(data=>{
                if(data){
            for (i in data) {
                if(data.length>0){
                   
                seatNumbers.push( data[i].seatNumber); 
                                   };
                           }              
            res.status(200).json( {message : 'filled seat numbers are',seatNumbers:seatNumbers });
        }
        else {
            res.status(200).json({message:'All seats are available'});
        }
    }).catch(err=>{
        console.log(err);
        
    })
}


//seat details who booked with the ticket id

exports.seatDetails=(req,res,next)=>{
  var id=req.params.id;
Ticket.findById(id).then((data)=>{
   
    
    res.status(200).json({message:'total ticket details',data:data});
}).catch(err=>{
    console.log(err);
    
})


}
//to cancel the ticket
exports.ticketCancel =(req,res,next)=>{
    var id= req.params.id;
    Ticket.findByIdAndDelete(id).then(()=>{
        res.status(200).json({message:'successfully ticket is cancelled '});
    }).catch((err)=>{
        console.log(err);
        
    })
   
}