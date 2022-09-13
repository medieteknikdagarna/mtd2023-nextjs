const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
const creds = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth".replace(/\\n/gm, "\n"),
  token_uri: "https://oauth2.googleapis.com/token".replace(/\\n/gm, "\n"),
  auth_provider_x509_cert_url:
    "https://www.googleapis.com/oauth2/v1/certs".replace(/\\n/gm, "\n"),
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/spreadsheet@medieteknikdagen.iam.gserviceaccount.com".replace(
      /\\n/gm,
      "\n"
    ),
};

export async function addRegistration(data) {
  try {
    // google sheets

    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document

    await sheet.addRow({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    return {
      status: 201,
      message: "Registration was sent and recieved successfully!",
      success: true,
    };
  } catch (error) {
    console.log(error);
    console.log(process.env.GOOGLE_PRIVATE_KEY);
    console.log(process.env.GOOGLE_SHEET_ID);
    return { status: 500, message: JSON.stringify(error), success: false };
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(process.env.GOOGLE_PRIVATE_KEY);
      console.log(process.env.GOOGLE_SHEET_ID);
      const insert_data = req.body;
      const response = await addRegistration(insert_data);
      res
        .status(response.status)
        .json({ message: response.message, success: response.success });
      return;
    } catch (error) {
      res.status(409).json({ error: JSON.parse(error) });
      return;
    }
  } else {
    res.status(401).json({ message: "Method not allowed" });
    return;
  }
}
