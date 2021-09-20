const fsp = require('fs').promises

export default async function handler(req, res) {

    const file_data = await fsp.readFile('.next/static/seat-info/reserved-seats.json')
    const json = JSON.parse(file_data)

        
        res.status(200).json({json})

   
  }
  




    
