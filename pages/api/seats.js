const fs = require('fs').promises

export default async function handler(req, res) {


    const json = require('../../public/content/seat-info/seat-info.json')

   
    if( req.method === 'GET'){
        res.status(200).json(json)
    }
    else{
        res.status(401).json({message: "Only methods accepted are:\n\n POST\nGET"})
    }

   
  }
  




    
