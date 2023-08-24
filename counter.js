import dotenv from 'dotenv';
import { GoogleSpreadsheet } from 'google-spreadsheet';
dotenv.config();

const doc = new GoogleSpreadsheet(process.env.SHEET_ID, { apiKey: process.env.GOOGLE_SHEETS_API });

await doc.loadInfo();
console.log(doc.title);

const sheet = doc.sheetsByIndex[1];
await sheet.loadCells('A1');
console.log(sheet.title);
console.log(sheet.getCell(0, 0).value);
