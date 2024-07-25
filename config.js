//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923457214057@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaf2dPNIiRomqSpKdE3x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaf2dPNIiRomqSpKdE3x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://whatsapp.com/channel/0029Vaf2dPNIiRomqSpKdE3x";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923457214057";
global.owner = process.env.OWNER_NUMBER || "923457214057";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhGM05JZ0VVbjJ1NDVEaGk5UEpNTEFjOVhEeXJrT3JpNFcrR2M0Z3JtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWFWcjh4c2QycndjZU1LTWtmbmdZaFlYem1yUXRqMzNwTW9qeGdkUjBucz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRmVVcjBxZ0JXQ1p2K1BBNGlhWGF5VlB3V0pZaUhEV0l4c1o1STdxWm44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLckFVWjBZelB0N2kyZEV2V2craGpxZldMSTlPRml5YUExSGFvSklON1YwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKc21hLzVuSjJGeGk1R29weGZqQlRmWS9oei9mdG1NTU5wWkd5Rm9FRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ3NzJDcmd2Y3FxNUNNNGdpdFJkQ0FsdWdaeDE1VWE3QzhSVTFuK0tRVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJWbUNWeU9rWTBIZ0NrTVAzc0psaENxcnFJb1BObXRtTmxRVStpc3NVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTdnZmI4ZFJMNUVSRjc4MkRVMTg3WHVOR0JmOG5XT1Y3aVRKb0ZPQ0JpMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlrSkIzMURTWUl6dnhSVUFtbFM1UTFRcDB0Zmd1Z1pNdFhZbTFNTUs5OXl0a29ZVERycktScVc3Vktha0cvU29OazdFdGdHdjdBOEZ5dWRYTkRzc0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJ2Nnc2U0xyN2JMOFNaY2d6TjBLOUFUWHBIQytWdU4zamx2TFV4b1pZYUg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKWWFRT2paX1FRR2YtSHRzNGREREx3IiwicGhvbmVJZCI6ImJhZDY4MGVhLTgzMTAtNDM0Mi05MjAwLTJkNDc3MmEwYjlmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VEJ3aEI1L1lXZzVCbWJVYnFoQUkxcVFRdHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREtzV01RSVI2dVRiNGpPL1dSdnJKbFlQOTFZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRNSDNWOVYzIiwibWUiOnsiaWQiOiI5MjM0NTcyMTQwNTc6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ055SDdPd0RFTHJ3MWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRGVnpMRFgzRnhFd011WnA0anlDdmtFUUF3alBmUGxXdkd5QTRiVTMxQUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBXRHF4cE8wYkFXNm10U1NRRXBYVUorWnBSamwzamR2UVo0Z0podFBkMUZ4YXBrUEovZHRzeFpzOHZpeFp0SmpER1ZTK3VRc1hqcHVreDVpYVg2eEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyK0JKbFFLbFVjbG9PUFVyTzhzd3V5S0pydE1majNsUnZMb2ZQN0FBMjBsL0ZUNzBJVVFuOFg2MUYyK0pXNkZiN1FnQUpKbHRZU3pxWVk1QnR5R1REdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ1NzIxNDA1NzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlQlZjeXcxOXhjUk1ETG1hZUk4Z3I1QkVBTUl6M3o1VnJ4c2dPRzFOOVFDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMDcxNjg5fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "•×°×•⋅™𝗧𝗟𝗣 𝗦𝗢𝗟𝗗𝗶𝗘𝗥⋅•×•×•×",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "꧁𝗔𝗕𝗗𝗨𝗟-𝗕𝗔𝗦𝗶𝗧꧂",
  ownername: process.env.OWNER_NAME || "꧁𝗔𝗕𝗗𝗨𝗟-𝗕𝗔𝗦𝗶𝗧꧂",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
