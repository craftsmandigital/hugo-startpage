

// const { extractSheets } = require("spreadsheet-to-json");
 
// // optional custom format cell function
// const formatCell = (sheetTitle, columnTitle, value) => value.toUpperCase();
 
// extractSheets(
//   {
//     // your google spreadhsheet key
//     spreadsheetKey: "1cWfyYQrW2RGY_CmDfJ4LtQCLgyKmbqC-oeYbLOserfo",
//     // your google oauth2 credentials (optional for world-readable spreadsheets)
//     // credentials: require("./google-generated-creds.json"),
//     // optional: names of the sheets you want to extract
//     sheetsToExtract: ["Bookmarks"],
//     // optional: custom function to parse the cells
//     formatCell: formatCell
//   },
//   function(err, data) {
//     console.log("Bookmarks: ", data.Bookmarks);
//   }
// );


const { extractSheets } = require("spreadsheet-to-json");
const fs = require('fs')
const spreadsheetKey = "1cWfyYQrW2RGY_CmDfJ4LtQCLgyKmbqC-oeYbLOserfo";
// const credentials = require("./client_id.json");


extractSheets(
  {
    spreadsheetKey
    // credentials
  },
  (err, data) => {
    if (err) {
      console.log("ERROR:", err);
  }
    // console.log(JSON.stringify({ data }, null, 2));
  
  try {
    fs.writeFileSync("./data/bookmarks.json", JSON.stringify({ data }, null, 2))
    } catch (err) {
      console.error(err)
    }
  }
);