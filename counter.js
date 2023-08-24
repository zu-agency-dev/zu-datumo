import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.SHEET_ID);
console.log(process.env.GOOGLE_SHEETS_API);
console.log(process.env);

// import { GoogleSpreadsheet } from 'google-spreadsheet';

// const doc = new GoogleSpreadsheet(process.env.GSID, { apiKey: process.env.GSAPI });
// const doc = new GoogleSpreadsheet(process.env.SHEET_ID, { apiKey: process.env.GOOGLE_SHEETS_API });

// await doc.loadInfo(); // loads document properties and worksheets
// console.log(doc.title);

// const sheet = doc.sheetsByIndex[1]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
// await sheet.loadCells('A1');
// console.log(sheet.title);
// console.log(sheet.getCell(0, 0).value);
