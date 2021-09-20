

export default function handler(req, res) {

    const _AVAILABLE = 'available'
    const _RESERVED = 'reserved'

    const json = require('../../public/content/seat-info/seat-info.json')
    let json_reserved = require('../../public/content/seat-info/reserved-seats.json')

    if(req.method === 'POST'){
        
        const name = req.body.name;
        const company = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const seat = req.body.seat;
        const level = req.body.level;
        
        const newBooking = {
            id: Date.now(),
            contactInfo : {
                name: name,
                company: company,
                email: email,
                tel: phone,
            },
            seat: seat,
            level: level
        }
        if(json["level_"+level][seat-1].status === _AVAILABLE){ 
            json["level_" + level][seat-1].status = _RESERVED
            json_reserved["level_"+level].push(newBooking)
            res.status(201).json({message: "Seat " + seat + " on level " + level + " is now reserved"})

        }
        else{
            res.status(204).json({message: "Seat already reserved"})
        }



    }
    else if( req.method === 'GET'){
        res.status(200).json({json})
    }
    else{
        res.status(400).json({message: "Only methods accepted are:\n\n POST\nGET"})
    }

   
  }
  




    
