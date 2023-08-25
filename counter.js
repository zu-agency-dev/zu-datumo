import dotenv from 'dotenv';
import { GoogleSpreadsheet } from 'google-spreadsheet';
dotenv.config();

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID, { apiKey: process.env.SPREADSHEET_API });
await doc.loadInfo();

const selectSheetPage = 1;
const sheet = doc.sheetsByIndex[selectSheetPage];
await sheet.loadCells('A1');

function getCellValue(x, y) {
    const cell = sheet.getCell(x, y);
    return cell.value;
}

console.log('cv:', getCellValue(0, 0));
getCellValue(0, 0);
