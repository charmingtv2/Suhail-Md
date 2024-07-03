const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347039570336";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_25_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvODRXNHZYYzRwRGVYNlJoOVo2NEFrTDJPZVl4K1N5QkhYT3V1K2JwM0xJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvaEVsVlJOYVJSQ1FGMFh5NjY3ODBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM3Yzk0ZTc4LTIzNDMtNDBkNy05NWMwLWE0MDA5NmI0YzExZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDIwNixcbiAgICAgIDEyNyxcbiAgICAgIDExMyxcbiAgICAgIDg1LFxuICAgICAgMTg5LFxuICAgICAgNDQsXG4gICAgICAyMTksXG4gICAgICAxMjIsXG4gICAgICA0OCxcbiAgICAgIDIwMyxcbiAgICAgIDI0OSxcbiAgICAgIDIzNixcbiAgICAgIDY5LFxuICAgICAgOTYsXG4gICAgICAwLFxuICAgICAgMTE2LFxuICAgICAgMTYzLFxuICAgICAgMzMsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgNDQsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICAyMjAsXG4gICAgICAzNCxcbiAgICAgIDI0NCxcbiAgICAgIDE1NCxcbiAgICAgIDE4OCxcbiAgICAgIDEyNyxcbiAgICAgIDE5NixcbiAgICAgIDc1LFxuICAgICAgNjIsXG4gICAgICAxNSxcbiAgICAgIDkxLFxuICAgICAgMTQ2LFxuICAgICAgNTIsXG4gICAgICAxNzQsXG4gICAgICA3NyxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFS1dHRkVNUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzODYwODAzOTo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzMjUwODA0NDg2MjQyOjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XL3dlVUVFTU9mbDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjc0aDE4RmlHcWY3Vm8wMlhZOCttQkJSRW50Nnk5ZjJnRGtuM0dINUp4Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqbUVEOCtYdGZ6MjBSOFF2c3dDcVVib001bCtCcC9JS0JEVEcxSmkyNWlYd2ZKNE1EUEhMRmZFNWxBWjBzelNxbXFSRURvVktKR1hsbzdzSFVCa0JDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjZGpKSEhYWlcrR3NPc0srUVVQUUx1MndTNm1EWlVBN1JIQkJCQzhaWFY3eDkzMSs3MXlIMUVqZmo0cnExb0F1Wm1keitJbzlNbHZWZE0yR1BtMzBDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM4NjA4MDM5OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNDU1MTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
