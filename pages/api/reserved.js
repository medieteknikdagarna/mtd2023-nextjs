const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
const creds = require(process.env.GOOGLE_SECRETS);

  
  export async function getReservations() {

    try {
      // google sheets
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document
  
      const rows = await sheet.getRows(); // return the rows from the 1st sheet
      const allSeats = rows.map((row) => {
        // return the data for each video (or whatever each row is in your sheet)
        return {
          seat: row.seat,
          level: row.level
        };
      });
      // this returns the videos
      return allSeats;
    } catch (error) {
      //   log any errors to the console
      console.log(error);
    }
  }

  export async function addReservation(data) {

    try {
      // google sheets
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document
      
      await sheet.addRow({
            seat: data.seat,
            level: data.level,
            name: data.name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            message: data.message
        })
      // this returns the videos
      return "Got it";
    } catch (error) {
      //   log any errors to the console
      return error
    }
  }

  export default async function handler(req, res) {

    const data = await getReservations();

    if(req.method === "POST"){

        let foundDuplicate = false
        data.forEach(booking =>{
            if(booking.seat == req.body.seat && booking.level == req.body.level){
                foundDuplicate = true
            }
        })

        if(foundDuplicate){
            res.status(409).json({message: "This seat is already reserved", success: false})
            return
        }
        else{
            try {
                const insert_data = req.body;
                await addReservation(insert_data);
                res.status(201).json({message: "Reservation successful!", success: true})
                return
            } catch (error) {
                res.status(500).json(JSON.parse(error))
                return
            }
        }
    }
    else if(req.method === "GET"){
        res.status(200).json(data)
        return
    }
    else{
        res.status(401).json({message: "Method not allowed"})
        return
    }
    
  }
  

    
