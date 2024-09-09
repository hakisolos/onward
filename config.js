//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0h3RG11ZE5adVZETmgwdFhHZlBoSTBvUmpPQ1JIamluL2JlN2F2SS8yND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnJKaDhnSERKakRsQUlMQUlKNWV3bjVQdGg3dktSSDBXeHp4R1VETVJnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTUpBbnpabU9xZ094MDVmMU0xODV1N3Q2SEx6cEsyeklETjJXaW5rTmw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YVVrMmpiVkE2R2thMk01U3NoYldjRWlyM3VvdUhnZmRvdTZ4eFk1WXhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQN1JLeFFXWDQrL0syUzIzZHFIR2kxaU8xNGM5Z1JKZWNTT2kyWktKR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRBRTZBWForRmNHb2NjUWs5bS9uNHQwR0o0KzRSVXJXdGU0Zk5wdXFOWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05rMFhvbzZtV0JaSXJNVXpLWEQ5YTRRTUhzSXhWdU8vMDBSSjhQMGhsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXB1bjlmMmFBaThCdUlFdkhhRUFNdzFyTHBJWDdXTXN6aUpUYVV1N3MzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9TQ2pMaXZDUm8wa0ltOFIzb2wwd01rNnoxTmxLNEpJekdIRkdmdGJ5OVhXVXJOaDY5bUpWOTJFRlQwUGY5QU1Gcmt5MUpscmlHd0xzSlFpYlFkNEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJwOGN5SzZ5QytKb2JlY01ENllnT3Vwb0Z1WHBXMzd1Q0ozcFBHVG1kZlN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDMwMDc0MjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTg5MzVENThGQUMwMjQ0MTFBNzQ0MURBMENERDAyQ0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTg4NDQ3MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0MzAwNzQyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNTlBMDVCODIyQUY4OUIyMDIwNjAyNTk1NzZCRkZGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1ODg0NDcxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPSU1HNUNQbFQ3S1FxU3lLUHhuRzN3IiwicGhvbmVJZCI6ImM2ZDZmZThjLWNiZjEtNDA2My04Njc4LTgyMThhMzhlNDcxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscFQ1aTFvNmdHVVJzVWR4UW1kU3B4U21jWHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicityeGp5WVVOSnlQVnlXVUdmSkwrb0s2YmpJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZEVFg3UU1WIiwibWUiOnsiaWQiOiIyMzQ3MDQzMDA3NDI0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRkVBUiBYIVQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxR3Bmb0ZFS1RRKzdZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijc1aUI0bzJUTG5Rc2tSK2dEc0NlcG1xY0YxdkRRNWtwaDh2QVQrN3gzbGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxnbnltQnBRc1VCU0dNS3BJdVh2eDFzV29KRnoyenJtUm16Zi9nMnVoT1E4VkUyMHB0K1J2ZGliVElQUFcrK2FtNUFnd1NiUEpROUtZOU5YVjQxWERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlZXg2TXkwNzVQaGZ4d3lFSitmdUs0U2dmZSt2QWxYTlFISE9YNEUxbEFYa1IvMnhmNTd2VE5JSFh2ZVhRY1BWYWZHYnpQUVgyWHlWZEFoc25PMjFBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDMwMDc0MjQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlK1lnZUtOa3k1MExKRWZvQTdBbnFacW5CZGJ3ME9aS1lmTHdFL3U4ZDVaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1ODg0NDY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8yYyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
