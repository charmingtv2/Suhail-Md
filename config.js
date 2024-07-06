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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_09_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWemFTMk9LOVVZM1BKWnh4cFRrOVU0blQ1TGFHSnZPOWE1VDVvaExuUDg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWSGxoV19PVVF5U3dlRUhJUXFaNUtnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzYjVjZWUxLTM4YmItNGU0MC05NTY0LTk2ZTljMzFjYjQzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyMjQsXG4gICAgICAxOTcsXG4gICAgICAxMDEsXG4gICAgICA3NCxcbiAgICAgIDE3NyxcbiAgICAgIDk4LFxuICAgICAgMzQsXG4gICAgICAyMTIsXG4gICAgICAyMjYsXG4gICAgICAyMjksXG4gICAgICAxNDMsXG4gICAgICA5MCxcbiAgICAgIDgzLFxuICAgICAgOTksXG4gICAgICAxMzcsXG4gICAgICA5MCxcbiAgICAgIDE2LFxuICAgICAgMTc4LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDI2LFxuICAgICAgMTExLFxuICAgICAgMTU3LFxuICAgICAgMTMzLFxuICAgICAgMTYwLFxuICAgICAgMjE1LFxuICAgICAgMjMwLFxuICAgICAgMTM3LFxuICAgICAgOCxcbiAgICAgIDY4LFxuICAgICAgMTE3LFxuICAgICAgMTcwLFxuICAgICAgMTgzLFxuICAgICAgMjEwLFxuICAgICAgMTM5LFxuICAgICAgMjM1LFxuICAgICAgMTI2LFxuICAgICAgNzMsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNM1IxNFY5UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTQ5NjQyMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3ODk5MzQyNDQwNDcxMjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09id2l0QU1FTWlUcExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwielR3MTgvUDNKQ1k3VXBJWUFpN1RUYnBxQ1ZSZ2NEaVd4c3c2TDkrYXNoTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVZ1loTFQ4N3ZoUmt3ckRoQmwvakhDeEpzRDVRVCtZN3lNVEpFMXZPdEFKRllZZWZKOFdCRG5senhod216NmIydlVoWHFrVU5Pd2ZOQUtONU5acktCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZV3J0am9qK2djMGdnU0Y1SWxEbnA1S0d5TXBMTXlwKzdaZXJFUkorTEtYV3cwQXc3T3g3UHFFNk9ObGRHcGcvYjNJZzZ6anRPMkFQTnJJbzU5ckhqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5NDk2NDIzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjU2OTcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjRQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFONFAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2eVRKTjlsSGZZbDdJYytTdkhsek9hZXM1Y2J1N25Gam1qK0k2TzVCVzBvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzODkxNzU5MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI1Njk3NTk3NVwifSIKfQ=="  // PUT your SESSION_ID 


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
