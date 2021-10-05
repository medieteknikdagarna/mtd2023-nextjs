const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(process.env.SHEET_ID_REGISTRATION);
const creds = {
  "type": "service_account",
"project_id": process.env.GOOGLE_project_id,
"private_key_id": process.env.GOOGLE_private_key_id,
"private_key": process.env.GOOGLE_private_key.replace(/\\n/g, '\n'),
"client_email": process.env.GOOGLE_client_email.replace(/\\n/g, '\n'),
"client_id": process.env.GOOGLE_client_id,
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/grow-up-4d764%40appspot.gserviceaccount.com"
}

  
  
  export async function addRegistration(data) {

    try {
      // google sheets
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] -- get first sheet in the document
      
      await sheet.addRow({
            name: data.name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            message: data.message
        })

      return {status: 201, message: "Question was sent and recieved successfully!", success: true};
    } catch (error) {
      return {status: 500, message: JSON.stringify(error), success: false}
    }
  }

  export default async function handler(req, res) {

    if(req.method === "POST"){
        try {
            const insert_data = req.body;
            const response = await addRegistration(insert_data);
            res.status(response.status).json({message: response.message, success: response.success})
            return
        } catch (error) {
            res.status(409).json({error: JSON.parse(error)})
            return
        }
    }
    else{
        res.status(401).json({message: "Method not allowed"})
        return
    }
    
  }
  

    
