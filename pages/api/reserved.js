const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_SEATBOOKER_ID);
const creds = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/spreadsheet%40medieteknikdagen.iam.gserviceaccount.com",
};

export async function getReservations() {
  try {
    // google sheets
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document

    const rows = await sheet.getRows(); // return the rows from the 1st sheet
    const allSeats = rows.map((row) => {
      return {
        seat: row.seat,
        floor: row.floor,
      };
    });
    // this returns the videos
    return { status: 200, data: allSeats };
  } catch (error) {
    return { status: 500, error: error };
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
      floor: data.floor,
      company: data.company,
    });
    // this returns the videos
    return {
      status: 201,
      message: `Added row with seat: ${data.seat} and floor: ${data.floor}`,
      success: true,
    };
  } catch (error) {
    //   log any errors to the console
    return { status: 500, message: JSON.parse(error), success: false };
  }
}

export default async function handler(req, res) {
  const data = await getReservations();
  if (data.status === 500) {
    return res.status(500).json({ message: "error bruh" });
  }

  if (req.method === "POST") {
    let foundDuplicate = false;
    data.data.forEach((booking) => {
      if (booking.seat == req.body.seat && booking.floor == req.body.floor) {
        foundDuplicate = true;
      }
    });

    if (foundDuplicate) {
      return res
        .status(409)
        .json({ message: "This seat is already reserved", success: false });
    } else {
      try {
        const insert_data = req.body;
        const response = await addReservation(insert_data);
        return res
          .status(response.status)
          .json({ message: response.message, success: response.success });
      } catch (error) {
        return res.status(409).json({ error: JSON.parse(error) });
      }
    }
  } else if (req.method === "GET") {
    return res.status(data.status).json(data.data);
  } else {
    return res.status(401).json({ message: "Method not allowed" });
  }
}
