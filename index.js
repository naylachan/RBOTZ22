// BY RIMURUBOTZ
// JANGAN DI PERJUAL BELIKAN OM

// NO AMPAS YA BANH
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
/* <==============[ MODULES ]===============> */
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
/* <==============[ FILE ]===============> */
const blocked = []
const prem = [] 
const welkom = []
const ban = []
const antilink = []
const antitoxic = []
const antitag = []
const antivirtex = []
const { color, bgcolor } = require('./lib/color')
const { helpid } = require('./database/bot/helpid')
const { menuid } = require('./database/bot/menuid')
const { menuen } = require('./database/bot/menuen')
const { helpen } = require('./database/bot/helpen')
const { infobot } = require('./database/random/infobot')
const { iklan1 } = require('./database/iklan/iklan1')
const { iklan2 } = require('./database/iklan/iklan2')
const { iklan3 } = require('./database/iklan/iklan3')
const { wallpapermenu } = require('./database/bot/listmenu/wallpapermenu')
const { tagmenu } = require('./database/bot/listmenu/tagmenu')
const { storagemenu } = require('./database/bot/listmenu/storagemenu')
const { stickmenu } = require('./database/bot/listmenu/stickmenu')
const { searchmenu } = require('./database/bot/listmenu/searchmenu')
const { ratemenu } = require('./database/bot/listmenu/ratemenu')
const { randommenu } = require('./database/bot/listmenu/randommenu')
const { ownermenu } = require('./database/bot/listmenu/ownermenu')
const { nsfwmenu } = require('./database/bot/listmenu/nsfwmenu')
const { newsmenu } = require('./database/bot/listmenu/newsmenu')
const { islamimenu } = require('./database/bot/listmenu/islamimenu')
const { infomenu } = require('./database/bot/listmenu/infomenu')
const { groupmenu } = require('./database/bot/listmenu/groupmenu')
const { gamemenu } = require('./database/bot/listmenu/gamemenu')
const { downloadmenu } = require('./database/bot/listmenu/downloadmenu')
const { cekmenu } = require('./database/bot/listmenu/cekmenu')
const { bahasamenu } = require('./database/bot/listmenu/bahasamenu')
const { audiomenu } = require('./database/bot/listmenu/audiomenu')
const { animemenu } = require('./database/bot/listmenu/animemenu')
const { hackmenu } = require('./database/bot/listmenu/hackmenu')
const { setgrub } = require('./database/bot/listmenu/setgrub')
const id = JSON.parse(fs.readFileSync('./bahasa/indonesia.js'))
const en = JSON.parse(fs.readFileSync('./bahasa/english.js'))
const { infoow } = require('./database/random/infoow')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
xrandom = fs.readFileSync('./database/sticker/x.webp')
hacker = fs.readFileSync('./database/sticker/hacker.webp')
yrandom = fs.readFileSync('./database/sticker/y.webp')
zrandom = fs.readFileSync('./database/sticker/z.webp')
const setting = JSON.parse(fs.readFileSync('./admin/settings.json'))
const tomxic = JSON.parse(fs.readFileSync('./database/random/toxic.json'))
const NyzVn = JSON.parse(fs.readFileSync('./storage/vn.json'))
const NyzText = JSON.parse(fs.readFileSync('./storage/text.json'))
const NyzImage = JSON.parse(fs.readFileSync('./storage/image.json'))
const NyzSticker = JSON.parse(fs.readFileSync('./storage/sticker.json'))
const NyzVideo = JSON.parse(fs.readFileSync('./storage/video.json'))
/* <==============[ AUDIO ]===============> */
audio1 = fs.readFileSync('./database/audio/nyz-audio1.m4a')
audio2 = fs.readFileSync('./database/audio/nyz-audio2.m4a')
audio3 = fs.readFileSync('./database/audio/nyz-audio3.m4a')
audio4 = fs.readFileSync('./database/audio/nyz-audio4.m4a')
audio5 = fs.readFileSync('./database/audio/nyz-audio5.m4a')
audio6 = fs.readFileSync('./database/audio/nyz-audio6.m4a')
audio7 = fs.readFileSync('./database/audio/nyz-audio7.m4a')
audio8 = fs.readFileSync('./database/audio/nyz-audio8.m4a')
audio9 = fs.readFileSync('./database/audio/nyz-audio9.m4a')
audio10 = fs.readFileSync('./database/audio/nyz-audio10.m4a')
audio11 = fs.readFileSync('./database/audio/nyz-audio11.m4a')
audio12 = fs.readFileSync('./database/audio/nyz-audio12.m4a')
audio13 = fs.readFileSync('./database/audio/nyz-audio13.m4a')
audio14 = fs.readFileSync('./database/audio/nyz-audio14.m4a')
audio15 = fs.readFileSync('./database/audio/nyz-audio15.m4a')
audio16 = fs.readFileSync('./database/audio/nyz-audio16.m4a')
audio17 = fs.readFileSync('./database/audio/nyz-audio17.m4a')
audio18 = fs.readFileSync('./database/audio/nyz-audio18.m4a')
audio19 = fs.readFileSync('./database/audio/nyz-audio19.m4a')
audio20 = fs.readFileSync('./database/audio/nyz-audio20.m4a') 
audio21 = fs.readFileSync('./database/audio/nyz-audio21.m4a') 
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const tebakkimia = JSON.parse(fs.readFileSync('./database/game/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./database/game/tebakbendera.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./database/game/tebakjenaka.json'))
 /* <==============[ SETTING ]===============> */
indonesia = true
english = false
public = true
self = false
budak = "♟"
budakk = true
benteng = "♜"
bentengg = false
kuda = "♞"
kudaa = false
gajah = "♝"
gajahh = false
menteri = "♚"
menterii = false
raja = "♛"
rajaa = false
const { toxic1, toxic2, toxic3, toxic4, toxic5, toxic6, toxic7, toxic8, 
toxic9, toxic10, toxic11, toxic12, toxic13, toxic14, toxic15, toxic16} = tomxic
const { ownerNumber, captionfake, textmenu, gender, agama, 
umur, asal, pulsa, dana, gopay, donasi, facebook, twitter, tiktok, youtube, 
instagram, link3, link2, link1, ownername, hari1, minggu1, 
bulan1, tahun1, botname } = setting           
/* <==============[ TIMERS ]===============> */
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`}
            /* <==============[ CONNECTING ]===============> */
            versibot = [2, 2147, 16]         
         	async function starts() {
       	    const _0x3db00d=_0x4a9c;(function(_0x44ca38,_0x1f63ad){const _0x1e7ca1=_0x4a9c,_0x403898=_0x44ca38();while(!![]){try{const _0x5148c3=parseInt(_0x1e7ca1(0xcb))/0x1+parseInt(_0x1e7ca1(0xca))/0x2*(-parseInt(_0x1e7ca1(0xc8))/0x3)+parseInt(_0x1e7ca1(0xc9))/0x4+-parseInt(_0x1e7ca1(0xc5))/0x5*(parseInt(_0x1e7ca1(0xc1))/0x6)+parseInt(_0x1e7ca1(0xc7))/0x7+parseInt(_0x1e7ca1(0xb6))/0x8+-parseInt(_0x1e7ca1(0xbf))/0x9*(parseInt(_0x1e7ca1(0xbe))/0xa);if(_0x5148c3===_0x1f63ad)break;else _0x403898['push'](_0x403898['shift']());}catch(_0x27a21){_0x403898['push'](_0x403898['shift']());}}}(_0xcf23,0xedf85));const nayla=new WAConnection();function _0xcf23(){const _0x2c7b25=['4532952AFYrai','existsSync','open','Connected','writeFileSync','connecting','version','warn','3490ilqwVv','279ToFQFS','string','191796hQtzuB','stringify','./simi.json','level','200zsDUXt','loadAuthInfo','6074040BnbSAz','1128LZwCyk','3000112KgbURw','682REDYjE','208033oDZLRL'];_0xcf23=function(){return _0x2c7b25;};return _0xcf23();}function _0x4a9c(_0x2e7152,_0x3f7da7){const _0xcf23ac=_0xcf23();return _0x4a9c=function(_0x4a9ce0,_0x27c72e){_0x4a9ce0=_0x4a9ce0-0xb6;let _0x243231=_0xcf23ac[_0x4a9ce0];return _0x243231;},_0x4a9c(_0x2e7152,_0x3f7da7);}nayla[_0x3db00d(0xbc)]=versibot,nayla['logger'][_0x3db00d(0xc4)]=_0x3db00d(0xbd),console['log'](banner[_0x3db00d(0xc0)]),nayla['on']('qr',()=>{}),fs[_0x3db00d(0xb7)](_0x3db00d(0xc3))&&nayla[_0x3db00d(0xc6)](_0x3db00d(0xc3)),nayla['on'](_0x3db00d(0xbb),()=>{start('2','Connecting...');}),nayla['on'](_0x3db00d(0xb8),()=>{const _0x378dc8=_0x3db00d;success('2',_0x378dc8(0xb9));}),await nayla['connect']({'timeoutMs':0x1e*0x3e8}),fs[_0x3db00d(0xba)](_0x3db00d(0xc3),JSON[_0x3db00d(0xc2)](nayla['base64EncodedAuthInfo'](),null,'\x09'));
        	nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
         	})  
         	nayla.on('group-participants-update', async (anu) => {
		    if (!welkom.includes(anu.jid)) return		    
		    function getJeneng (jid)  {
  			let v = jid === nayla.user.jid ? nayla.user : nayla.contacts[jid] || { notify: jid.replace(/@.+/, '') }
  			let PhoneNumber = jid.split('@')[0]
  			return v.notify || '+'+PhoneNumber
 	 		}
		    const memJid = anu.participants[0]
		    const pushnem = getJeneng(memJid)
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			const iniGc = anu.jid.endsWith('@g.us')
			const jumlahMem = iniGc ? mdata.participants : ''
			if (anu.action == 'add') {
			try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
	    	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	    	}
            teks = `[ *SELAMAT DATANG* ]\n• *NAME* : @${memJid.split('@')[0]}\n• *GROUP* : ${mdata.subject}\n• *MEMBER* : ${jumlahMem.length}`	       
	        let buff = await getBuffer(ppimg) 
		    nayla.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: { mentionedJid: [memJid] }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: `${mdata.subject}`, jpegThumbnail: buff, remoteJid: "status@broadcast"}}}})
		    } 
            if (anu.action == 'remove') {
           	try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	     	}
            out = `[ *SELAMAT TINGGAL* ]\n• *NAME* : @${memJid.split('@')[0]}\n• *GROUP* : ${mdata.subject}\n• *MEMBER* : ${jumlahMem.length}`           
            let buff = await getBuffer(ppimg)
            nayla.sendMessage(mdata.id, out, MessageType.text, {contextInfo: { mentionedJid: [memJid] }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: `${mdata.subject}`, jpegThumbnail: buff, remoteJid: "status@broadcast"}}}})
            }
		    } catch (e) {
			console.log('Error : %s')
		    }
        	})        	 
         	/* <==============[ CONST ]===============> */      	 	 
	        nayla.on('chat-update', async (nay) => {
		    try {
            if (!nay.hasNewMessage) return
            if (nay.message) return
            nay = nay.messages.all()[0]
            if (self == true) {
			if (!nay.key.fromMe) return
			} 
			if (public == true) {
			if (nay.key.fromMe) return
			}					
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return 
			global.prefix
			global.blocked
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
			const type = Object.keys(nay.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const cmd = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)			 
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false			 
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner	
			const isBanned = ban.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
			const isAntitoxic = isGroup ? antitoxic.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntitag= isGroup ? antitag.includes(from) : false 			 
			codename = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined			 
			/* <==============[ ARTS ]===============> */ 
			// JANGAN DI UBAH UBAH NANTI ERROR BANH:3
			art1 = `┈┈┈╭━━━━┳━━━━━╮┈\n┏━╮┃╲▊┃╲╰╮╲╲╲╲┃┈\n┗╮┃┃╲╲┃╲╲┃╲╲╲╲┣╮\n┈┃╰╯┃╲╰━━╯╲╲╲╲┃┃\n┈╰━┳╯┳┓╲┏━┳━┓╲┃╰\n┈┈┈┃╲┃┃╲┃┈┃╲┃╲┃┈\n┈┈┈┗┻┛┗┻┛┈┗┻┻┻┛┈`            
			art2 = `┊┊╭━━━╮┊┊╭━━━╮┊┊\n┊┊┃┈▋▋┃┊┊┃▋▋┈┃┊┊\n┏━╯┈┈┈◣┊┊◢┈┈┈╰━┓\n┃┗━╯┈┈┃┊┊┃┈┈╰━┛┃\n╰━┳━┳━╯┊┊╰━┳━┳━╯\n━━┻━┻━━━━━━┻━┻━━`            
			art3 = `┊┊┊┊╭━━╮╭━━╮┊╭━┓\n┈╭━━┫▔╲┣╯━━┻╮┃╭┛♫\n╭┫┈┈┃┈┈▏┊▋┊▋┃┃┃\n┃┃┈┈┃┈╱╭╰╯╰╯╰┫┣━╮\n╯┃┈┈╰━━╯╰━━━┳┫┣╮┃\n┈┃╭┳╭━┫╭┳╭━━╯┃┃┃┃\n┈┃┃┃┃┈┃┃┃┃┈╭╮┃╰╯┃\n┈┗┛┗┛┈┗┛┗┛╭╮┈╰━━╯`            
			art4 = `┈┈┏━╮╭━┓┈╭━━━━━━╮\n┈┈┃┏┗┛┓┃╭┫ⓞⓘⓝⓚ┃\n┈┈╰┓▋▋┏╯╯╰━━━━━━╯\n┈╭━┻╮╲┗━━━━╮╭╮┈\n┈┃▎▎┃╲╲╲╲╲╲┣━╯┈\n┈╰━┳┻▅╯╲╲╲╲┃┈┈┈\n┈┈┈╰━┳┓┏┳┓┏╯┈┈┈\n┈┈┈┈┈┗┻┛┗┻┛┈┈┈┈`            
			art5 = `╥━━━━━━━━╭━━╮━━┳\n╢╭╮╭━━━━━┫┃▋▋━▅┣\n╢┃╰┫┈┈┈┈┈┃┃┈┈╰┫┣\n╢╰━┫┈┈┈┈┈╰╯╰┳━╯┣\n╢┊┊┃┏┳┳━━┓┏┳┫┊┊┣\n╨━━┗┛┗┛━━┗┛┗┛━━┻`            
			art6 = `┈╭━━╮╭━━╮┈┈┈┈┈\n┈┃╭╮┗┻━━┻━╮┈┈┈\n┈┃╰┓╭━╮╭━╮┃┈┈┈\n┈╰━┓┃▇┃┃▇┃┃┈┈┈\n┈┈┈┃╱▔▔▔▔▔▔▔▇┈\n┈┈┈┃▏┏┳┳┳┳┳━┛┈\n┈┈┈┃╲╰┻┻┻┻┻┓┈┈`            
			art7 = `┈╭━━━━━━━━━━━╮┈\n┈┃╭━━━╮┊╭━━━╮┃┈\n╭┫┃┈▇┈┃┊┃┈▇┈┃┣╮\n┃┃╰━━━╯┊╰━━━╯┃┃\n╰┫╭━╮╰━━━╯╭━╮┣╯\n┈┃┃┣┳┳┳┳┳┳┳┫┃┃┈\n┈┃┃╰┻┻┻┻┻┻┻╯┃┃┈\n┈╰━━━━━━━━━━━╯┈`            
			art8 = `┈┈┈╱▔▔▔▔▔▔╲┈╭━━━╮┈┈\n┈┈▕┈╭━╮╭━╮┈▏┃BOO.┃┈┈\n┈┈▕┈┃╭╯╰╮┃┈▏╰┳━━╯┈┈\n┈┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈┈┈\n┈┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈┈┈\n┈┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈┈┈\n┈┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈┈┈┈`            
			art9 = `╭━━╮┈┈┈╭━━╮┈┈┈┈┈\n┃╭╮┣━━━┫╭╮┃┈╭┳┳╮\n╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃\n┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃\n┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃\n╭━┻╮┗┻┛╭┻━╮╰┳━┳╯\n┃┈┈╰━━━╯┈┈╰━┛┈┃┈`            
			art10 = `‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭\n╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯\n┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║\n╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝\n╭┻╮╱╰╮╰━━╯╭╯╲┊   ║\n╰┳┫▔╲╰┳━━┳╯╱▔┊   ║\n┈┃╰━━╲▕╲╱▏╱━━━┬╨╮\n┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯`           
			art = [art1, art2, art3, art4, art6, art5, art7, art8, art9, art10]		    
		    const arts = art[Math.floor(Math.random() * (art.length))]	
			prosestick = ["1","2","3","4","5"]
			const prosesstick = prosestick[Math.floor(Math.random() * (prosestick.length))]	
			stickproses = fs.readFileSync(`./database/sticker/proses${prosesstick}.webp`)			
			/* <==============[ TZ ]===============> */			
		    if (budakk == true) { tz = budak }
		    if (bentengg == true) { tz = benteng }
		    if (kudaa == true) { tz = kuda }
		    if (gajahh == true) { tz = gajah }
		    if (menterii == true) { tz = menteri }
		    if (rajaa == true) { tz = raja }		    		    
			/* <==============[ BAHASA ]===============> */
			if (english == true) {
			menux = helpen(prefix, botname, ownername, codename, arts, tz)
			menuz = menuen(prefix, botname, ownername, codename, arts, tz)  	    
		    langg = "ENGLISH"
		    bahasa = en.bahasa
		    notext = en.notext
		    sukses1 = en.sukses1
		    sukses2 = en.sukses2
		    sukses3 = en.sukses3
		    maxtext = en.maxtext
		    botadmin = en.botadmin
		    group = en.group
		    admin = en.admin
		    owner = en.owner
		    member = en.member
		    pribadi = en.pribadi
		    premium = en.premium
		    nolink = en.nolink
		    linkerror = en.linkerror
		    fakeaudio = en.fakeaudio
		    noprefix = en.noprefix
		    reptag = en.reptag
		    banned = en.banned
		    replybiasater = en.replybiasater
		    nonumber = en.nonumber
		    nocode = en.nocode
		    timetag = en.timetag
		    respon = en.respon
		    notfitur = en.notfitur
		    kikrndm = en.kikrndm
		    terreply = en.terreply
		    replyin = en.replyin
		    nourl = en.nourl		    
		    tbk = en.tbk
		    tbk2 = en.tbk2
		    rplysend = en.rplysend
		    errory = en.errory
		    stz = en.stz
		    liststick = en.liststick
			nostickkkk = en.nostickkkk
			novideo1 = en.novideo1
			noimg1 = en.noimg1
			novn1 = en.novn1
			nostick1 = en.nostick1
			nostickk = en.nostickk
			nostick = en.nostick
			nowaktu = en.nowaktu
		    tebak30 = en.tebak30
		    bocoran = en.bocoran
		    noselesai = en.noselesai
		    minat = en.minat
		    pilihiklan = en.pilihiklan
		    }
			if (indonesia == true) {	
			menux = helpid(prefix, botname, ownername, codename, arts, tz)  
			menuz = menuid(prefix, botname, ownername, codename, arts, tz)  
		    langg = "INDONESIA"
		    bahasa = id.bahasa
		    notext = id.notext
		    sukses1 = id.sukses1
		    sukses2 = id.sukses2
		    sukses3 = id.sukses3
		    maxtext = id.maxtext
		    botadmin = id.botadmin
		    group = id.group
		    admin = id.admin
		    owner = id.owner
		    member = id.member
		    pribadi = id.pribadi
		    premium = id.premium
		    nolink = id.nolink
		    linkerror = id.linkerror
		    fakeaudio = id.fakeaudio
		    noprefix = id.noprefix
		    reptag = id.reptag
		    banned = id.banned
		    replybiasater = id.replybiasater
		    nonumber = id.nonumber
		    nocode = id.nocode
		    timetag = id.timetag
		    respon = id.respon
		    notfitur = id.notfitur
		    kikrndm = id.kikrndm
		    terreply = id.terreply		    
		    replyin = id.replyin
		    nourl = id.nourl		    
		    tbk = id.tbk
		    tbk2 = id.tbk2
		    rplysend = id.rplysend
		    errory = id.errory		    
		    stz = id.stz
		    liststick = id.liststick
			nostickkkk = id.nostickkkk
			novideo1 = id.novideo1
			noimg1 = id.noimg1
			novn1 = id.novn1
			nostick1 = id.nostick1
			nostickk = id.nostickk
			nostick = id.nostick
			nowaktu = id.nowaktu
		    tebak30 = id.tebak30
		    bocoran = id.bocoran
		    noselesai = id.noselesai
		    minat = id.minat
		    pilihiklan = id.pilihiklan		    			
			}			
			/* <==============[ FAKE REPLY ]===============> */
			const nay1 =  { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `*${captionfake}*\n ❦  *LANGUAGE* : ${langg}`} } }
			/* <==============[ SEND MESSAGE ]===============> */
			const sleep = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
            }
			runtime = process.uptime()
			const timers = (teks) => {
			setTimeout( () => {reply("[❗] 20 DETIK LAGI")}, 10000)
			setTimeout( () => {reply("[❗] 10 DETIK LAGI")}, 20000)
			setTimeout( () => {reply("[❗] WAKTU HABIS" + `\n=> *JAWABAN* : ${teks}`)}, 30000)}				
			const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
			const reply = (teks) => {nayla.sendMessage(from, teks, text, {quoted:nay1, contextInfo: {forwardingScore: 508, isForwarded: true}})}
		    const sendAudio = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", thumbnail:Buffer.alloc(0), quoted:nay1})}
			const sendVn = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:{ key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": fakeaudio} } }})}
			const sendImage = (teks, teks1) => {nayla.sendMessage(from, teks, image, {caption:teks1, quoted:nay1, thumbnail:Buffer.alloc(0)})}
			const sendVideo = (teks, teks1) => {nayla.sendMessage(from, teks, video, {caption:teks1, thumbnail:Buffer.alloc(0), quoted:nay1})}
			const sendStick = (teks) => {nayla.sendMessage(from, teks, sticker, {quoted:nay1})}
			const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, teks.trim(), extendedText, {quoted: nay, contextInfo: {"mentionedJid": memberr}})}									
			const mentionByTag = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []			 
			const mentionUser = mention != undefined ? mention.filter(n => n) : []	 				             
			const sendCHAT = (teks, teks1, teks2) => {
			const A1 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1}]
            const B1 = {contentText: teks, footerText: teks2, buttons: A1,headerType: 1}      
			nayla.sendMessage(from, B1, MessageType.buttonsMessage, {quoted:nay1})}		
			/* <==============[ SEND BUTTON 1 ]===============> */
			const sendB1 = (teks, teks1) => {
			const A1 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1}]
            const B1 = {contentText: teks, footerText: textmenu + "\n" + `❋ BOT-RUNTIME : ${kyun(runtime)}`, buttons: A1,headerType: 1}      
			nayla.sendMessage(from, B1, MessageType.buttonsMessage, {quoted:nay1})}		
			/* <==============[ SEND BUTTON 2 ]===============> */
			const sendB2 = (teks, teks1, teks2, teks3) => {
			const A2 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: `${teks2}`}, type: 1}]
            const B2 = {contentText: teks, footerText: textmenu + "\n" + `❋ BOT-RUNTIME : ${kyun(runtime)}`, buttons: A2,headerType: 1}      
			nayla.sendMessage(from, B2, MessageType.buttonsMessage, {quoted:nay1})}			
			/* <==============[ SEND BUTTON 3 ]===============> */
			const sendB3 = (teks, teks1, teks2, teks3, teks4) => {
			const A3 = [
            {buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: `${teks2}`}, type: 1},
            {buttonId: 'id3', buttonText: {displayText: `${teks3}`}, type: 1}]
            const B3 = {contentText: teks, footerText: textmenu + "\n" + `❋ BOT-RUNTIME : ${kyun(runtime)}`, buttons: A3,headerType: 1}      
			nayla.sendMessage(from, B3, MessageType.buttonsMessage, {quoted:nay1})}					
			/* <==============[ SEND BUTTON 4 ]===============> */
			const sendMess = (hehe, teks) => {
			const A4 = [
            {buttonId: 'id1', buttonText: {displayText: `CHAT-OWNER`}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: `INFO-OWNER`}, type: 1},
            {buttonId: 'id3', buttonText: {displayText: `INFO-BOT`}, type: 1}]
            const B4 = {contentText: teks, footerText: textmenu + "\n" + `❋ BOT-RUNTIME : ${kyun(runtime)}`, buttons: A4,headerType: 1}      
			nayla.sendMessage(hehe, B4, MessageType.buttonsMessage, {quoted:nay1})}		 			
			const sendSticker = (teks1, teks2) => {
			stickrndm = fs.readFileSync(`./database/sticker/${teks1}.webp`)
		    nayla.sendMessage(from, stickrndm, sticker, {quoted: { key: { fromMe: false, participant: `${teks2}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🙂`} } }}) 		 
		    }
		    const toxicc = (teks) => {
			if (!isAntitoxic) return
			if (budy.includes(teks)) {  
			toxic = fs.readFileSync('./database/sticker/antitoxic.webp')
			nayla.sendMessage(from, toxic, sticker, {quoted: nay})}}	
			/* <==============[ MEDIA ]===============> */
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			/* <==============[ CONST ]===============> */						
			aq = args.join(' ')	 
			const txt = nay.message.conversation 
			angka = ['1','2','3','4','5','6','7','8','9']
			const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]
			const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]			
			/* <==============[ BUTTONS ]===============> */
			buttonsR = (type === 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			if (buttonsR === 'INFO-BOT') {	
			info3 = infobot(botname, ownername, ownerNumber, prefix)
		    sendB1(info3, "BACK")
			}
			if (buttonsR === 'INFO-OWNER') {
			info4 = infoow(ownername, instagram, youtube, tiktok, twitter, facebook, asal, umur, agama, gender)
		    sendB1(info4, "BACK")
			}
			if (buttonsR === 'CHAT-OWNER') {
			reply(`Command ${prefix}chat <pesan kamu>` + "\n" + `Contoh ${prefix}chat halo kak`)
			}
			if (buttonsR === 'LIST LANGUAGE') {
			reply("*LISTBAHASA*\n" + `${prefix}setbahasa id` + "\n" + `${prefix}setbahasa en` + "\n*OR YOU CAN USE*\n" + `${prefix}setlanguage id` + "\n" + `${prefix}setlanguage en`)
			}
			if (buttonsR === 'LISTSTICKER') {
			teks = '*STICKER LIST :*\n\n'
	    	for (let nyx of NyzSticker) {
			teks += `- ${nyx}\n`
			}
			teks += `\n*TOTAL* : ${NyzSticker.length}\ntutorial add? ${prefix}addsticker`
			nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": NyzSticker } })
			}
			if (buttonsR === 'LISTVIDEO') {
			teks = '*VIDEO LIST :*\n\n'
	    	for (let nyx of NyzVideo) {
			teks += `- ${nyx}\n`
			}
			teks += `\n*TOTAL* : ${NyzVideo.length}\ntutorial add? ${prefix}addvideo`
			nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": NyzVideo } })
			}
			if (buttonsR === 'LISTVN') {
			teks = '*VN LIST :*\n\n'
	    	for (let nyx of NyzVn) {
			teks += `- ${nyx}\n`
			}
			teks += `\n*TOTAL* : ${NyzVn.length}\ntutorial add? ${prefix}addvn`
			nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": NyzVn } })
			}
			if (buttonsR === 'LISTIMAGE') {
			teks = '*IMAGE LIST :*\n\n'
	    	for (let nyx of NyzImage) {
			teks += `- ${nyx}\n`
			}
			teks += `\n*TOTAL* : ${NyzImage.length}\ntutorial add? ${prefix}addimage`
			nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": NyzImage } })
			}
			if (buttonsR === 'CHAT =>') {
			hasil = NyzText[Math.floor(Math.random() * (NyzText.length))]
            sendCHAT(hasil, "CHAT =>", `total chat : ${NyzText.length}`)  
            }
            if (buttonsR === 'IKLAN1') {reply(iklan1())}
            if (buttonsR === 'IKLAN2') {reply(iklan2())}
            if (buttonsR === 'IKLAN3') {reply(iklan3())}
            if (buttonsR === 'NO!!!') {reply("OKE")}
            if (buttonsR === 'YAKIN!') {
            nayla.sendMessage(from, hacker, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `SEDANG MENGHACK MATAHARI\nSILAHKAN TUNGGU SEBENTAR`} } }})
            setTimeout( () => {
            hack1 = fs.readFileSync('./database/hacker/matahari2.jpg')
            hack3 = `Sukses hack matahari😱 ini dia info detail matahari saat ini\nn\n${tz} *Suhu permukaan* : 9.999 K\n${tz} *Massa* : 9,99999 kg\n${tz} *Radius rata-rata* : 999.999 km\n${tz} *Usia* : 9.999 miliar tahun\n${tz} *Jarak ke Bumi* : 999,9 juta km\n${tz} *Gravitasi* : 999 m/s²\n${tz} *Bulan* : 9999 Florence, 99999 Orcus`
            sendImage(hack1, hack3)
            }, 10000)  
            }
            if (buttonsR === 'YAKIN!!') {
            nayla.sendMessage(from, hacker, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `SEDANG MENGHACK BULAN\nSILAHKAN TUNGGU SEBENTAR`} } }})
            setTimeout( () => {
            hack1 = fs.readFileSync('./database/hacker/bulan2.jpg')
            hack3 = `Sukses hack bulan saat ini\n\n${tz} *Jarak ke Bumi* : 999,999 km\n${tz} *Luas permukaan* : 9,999×999 km2 (9,999 Bumi)\n${tz} *Apogee* : 999,999 km; (9,9999 AU)\n${tz} *Bujur node menaik* : Mundur satu revolusi dalam 99,9 tahun\n${tz} *Diameter sudut* : 9,99 sampai 99,9 menit busur\n${tz} *Eksentrisitas* : 9,9999\n${tz} *Gravitasi permukaan* : 9,999 m/s2 (9,9999 g)`
            sendImage(hack1, hack3)
            }, 10000)  
            }
            if (buttonsR === 'YAKIN!!!') {
            nayla.sendMessage(from, hacker, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `SEDANG MENGHACK NEGARA\nSILAHKAN TUNGGU SEBENTAR`} } }})
            setTimeout( () => {
            hack1 = fs.readFileSync('./database/hacker/negara2.jpg')
            hack3 = `Sukses hack negara😱 ini dia info detail negara saat ini\n\n${tz} *Presiden* : ${codename}\n${tz} *Ibu kota* : ${asal}\n${tz} *Populasi* : 999,99 juta (2023) Bank Dunia`
            sendImage(hack1, hack3)
            }, 10000)  
            }
            if (buttonsR === 'YAKIN!!!!') {
            nayla.sendMessage(from, hacker, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `SEDANG MENGHACK BAPAK\nSILAHKAN TUNGGU SEBENTAR`} } }})
            setTimeout( () => {
            hack1 = fs.readFileSync('./database/hacker/bapak2.jpg')
            hack3 = `Sukses hack bapak😱 ini dia bapak yang di temukan, jika tidak minat silahkan berikan saja bapak ini ke oranh yang butuh bapak, indentitas bapak nya?\n\nUdin Saputra merupakan nama lengkap dari pria yang berusia 89 tahun ini. udin lahir di bogor ❤ rehan, 20 November 1698 silam. bapak ini terhack dengan keadaan tersenyum:)`
            sendImage(hack1, hack3)
            }, 10000)  
            }
            if (buttonsR === 'YAKIN!!!!!') {
            nayla.sendMessage(from, hacker, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `SEDANG MENGHACK SATELIT\nSILAHKAN TUNGGU SEBENTAR`} } }})
            setTimeout( () => {
            hack1 = fs.readFileSync('./database/hacker/satelit2.jpg')
            hack3 = `Sukses hack satelit😱\ndan sekarang Posisi orbit satelit GEO sejajar dengan garis khatulistiwa atau mempunyai titik lintang nol derajat. Sebuah orbit geostasioner, atau Geostationary Earth Orbit (GEO), adalah orbit lingkaran yang berada 99.9999 km (99.999 mil) di atas ekuator Bumi dan mengikuti arah rotasi bumi.`
            sendImage(hack1, hack3)
            }, 10000)  
            }
			/* <==============[ CALL ]===============> */	
	        nayla.on("CB:Call", json => {   
	     	let call;
		    calling = JSON.parse(JSON.stringify(json))
	     	call = calling[1].from
			nayla.blockUser(call, "add")		
            })	 
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakgambar[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            ok1 = fs.readFileSync("./database/sticker/ok.webp")
            nayla.sendMessage(from, ok1, sticker, {quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
            delete tebakgambar[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakgambar.json`, JSON.stringify(tebakgambar))
            }
            } 					
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklirik[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            ok1 = fs.readFileSync("./database/sticker/ok.webp")
            nayla.sendMessage(from, ok1, sticker, {quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
            delete tebaklirik[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebaklirik.json`, JSON.stringify(tebaklirik))
            }
            } 										
		    if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkimia[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            ok1 = fs.readFileSync("./database/sticker/ok.webp")
            nayla.sendMessage(from, ok1, sticker, {quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
            delete tebakkimia[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakkimia.json`, JSON.stringify(tebakkimia))
            }
            } 										
		    if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakjenaka[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            ok1 = fs.readFileSync("./database/sticker/ok.webp")
            nayla.sendMessage(from, ok1, sticker, {quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
            delete tebakjenaka[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
            }
            } 										
		    if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakbendera[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            ok1 = fs.readFileSync("./database/sticker/ok.webp")
            nayla.sendMessage(from, ok1, sticker, {quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
            delete tebakbendera[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakbendera.json`, JSON.stringify(tebakbendera))
            }
            } 										
		    if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = caklontong[sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            ok1 = fs.readFileSync("./database/sticker/ok.webp")
            nayla.sendMessage(from, ok1, sticker, {quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
            delete caklontong[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/caklontong.json`, JSON.stringify(caklontong))
            }
            } 										
		    					
		    /* <==============[ COMMAND ]===============> */									
		    if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	  
			switch(command) {			
			case 'owner':
			const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:OWNERBOTZ\n`
            + 'ORG:MYOWNER;\n'
            + `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:+${ownerNumber}\n`
            + 'END:VCARD'			 
			nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
			break				 
			case 'donasi': case 'donate':
			dnasi = `${donasi}\n• *PULSA* : ${pulsa}\n• *GOPAY* : ${gopay}\n• *DANA* : ${dana}`
			reply(dnasi)
			break	
			case 'mygrub': case 'mygrup': 
			dnasi = `• *GRUB #1* : ${link1}\n• *GRUB #2* : ${link2}\n• *GRUB #3* : ${link2}`
			reply(dnasi)
			break			
			case 'limit': 
            if (isBanned) return reply(banned)
			reply("unlimited")		
			break 
			case 'ban':
 		    if (!isGroup) return reply(group)
			if (args.length == 0) return reply(reptag)
			if (!isOwner) return reply(owner)
			bnnd = body.slice(6)
			ban.push(`${bnnd}@s.whatsapp.net`)
		    fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
			reply(sukses3)
			break
        	case 'unban':
 		    if (!isGroup) return reply(group)
        	if (args.length == 0) return reply(reptag)
			if (!isOwner) return reply(owner)
			bnnd = body.slice(8)
			ban.splice(`${bnnd}@s.whatsapp.net`, 1)
			fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
			reply(sukses3)
			break
			case 'addprem':		
            if (args.length == 0) return reply(reptag)
            if (!isOwner) return reply(owner)
            if (!isGroup) return reply(group)
 		    adprem = `${args[0].replace('@','')}@s.whatsapp.net`
 		    prem.push(adprem)
 		    fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
 		    reply(sukses3)
 		    break				
 		    case 'dellprem':		 
 		    if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} @tag}`)
 		    if (!isOwner) return reply(owner)	
 		    if (!isGroup) return reply(group)	      	
 		    dellprem = body.slice(10)
 		    prem.splice(`${dellprem}@s.whatsapp.net`, 1)
 		    fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
 		    reply(sukses3)
 		    break 	
 		    case 'settz':
 		    case 'setz':
			if (!isOwner) return reply(owner) 
		    if ((args[0]) === 'budak') {
		    budakk = true, rajaa = false, menterii = false, gajahh = false, kudaa = false, bentengg = false	
		    reply("SUKSES SET TZ => " + args[0] + ` ${tz}`)	    
		    } else if ((args[0]) === 'raja') {
		    budakk = false, rajaa = true, menterii = false, gajahh = false, kudaa = false, bentengg = false	 
		    reply("SUKSES SET TZ => " + args[0] + ` ${tz}`)   		     
		    } else if ((args[0]) === 'menteri') {
		    budakk = false, rajaa = false, menterii = true, gajahh = false, kudaa = false, bentengg = false
		    reply("SUKSES SET TZ => " + args[0] + ` ${tz}`)
		    } else if ((args[0]) === 'gajah') {
		    budakk = false, rajaa = false, menterii = false, gajahh = true, kudaa = false, bentengg = false
		    reply("SUKSES SET TZ => " + args[0] + ` ${tz}`)
		    } else if ((args[0]) === 'kuda') { 
		    budakk = false, rajaa = false, menterii = false, gajahh = false, kudaa = true, bentengg = false
		    reply("SUKSES SET TZ => " + args[0] + ` ${tz}`)
		    } else if ((args[0]) === 'benteng') {
		    budakk = false, rajaa = false, menterii = false, gajahh = false, kudaa = false, bentengg = true
		    reply("SUKSES SET TZ => " + args[0] + ` ${tz}`)
		    } else {
		    reply(stz + `\n=> budak : ${budak}\n=> raja : ${raja}\n=> menteri : ${menteri}\n=> gajah : ${gajah}\n=> kuda : ${kuda}\n=> benteng : ${benteng}\n*CONTOH?* ${prefix + command} raja`)
		    }
		    break 		
			case 'setbahasa':
			case 'setlanguage':
			if (!isOwner) return reply(owner) 
		    if ((args[0]) === 'id') {
		    indonesia = true
		    english = false
		    reply("Sukses mengganti bahasa ke indonesia")
		    } else if ((args[0]) === 'en') {
		    english = true
		    indonesia = false
		    reply("Successfully changed the language to english")		    		     
		    } else {
		    sendB1(bahasa, "LIST LANGUAGE")
		    }
		    break
		    case 'setmode':			
		    if ((args[0]) === 'public') {
		    public = true
		    self = false
		    reply("PUBLIC-MODE")
		    } else if ((args[0]) === 'self') {
		    if (!isOwner) return reply(owner) 
		    self = true
		    public = false
		    reply("SELF-MODE")		    		     
		    } else {
		    reply("LIST MODE\n" + `${prefix + command} self\n` + `${prefix + command} public`)
		    }
		    break					 
			case 'allhelp':
			case 'allmenu':								
		    sendB3(menux, "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")		    		    
		    break
		    case 'menu':
		    case 'help':		     
            sendB3(menuz, "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")		
            break
		    break
		    case 'infobot':		
		    info1 = infobot(botname, ownername, ownerNumber, prefix)
		    reply(info1)
		    break     
		    case 'infoowner':
		    info2 = infoow(ownername, instagram, youtube, tiktok, twitter, facebook, asal, umur, agama, gender)
		    reply(info2)
		    break
		    case 'chatowner':
		    reply(`Command ${prefix}chat <your_text>` + "\n" + `Contoh ${prefix}chat halo kak`)
		    break		     
		    case 'chat':
		    if (args.length == 0) return reply(notext)
		    if (txt.length > 150) return reply(maxtext)
		    chat1 = `[ *NEW MESSAGE* ]\n`,
		    chat1 += `=> *DARE* : ${codename}\n`,
		    chat1 += `=> *MESS* : ${aq}\n`,
		    chat1 += `=> *TIME* : ${time}`		    
		    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, chat1, text, {quoted:nay1})		    		     
		    reply(sukses1)
		    break		    		     
            case 'speed':
            case 'ping':
            if (!isOwner) return reply(owner) 
            const speed = require('performance-now')
			let timestampi = speed();
            let latensii = speed() - timestampi
			spd = `=> *SPEED* : ${latensii.toFixed(4)}`
			reply(spd)
			break			
			case 'bc': 
			if (!isOwner) return reply(owner) 
			if (args.length < 1) return reply(notext)
			anu = await nayla.chats.all()
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: `[ *${botname} BROADCAST* ]\n\n${body.slice(4)}`})
			}
			reply(_.jid)
			reply(sukses2)
			} else {
			for (let _ of anu) {
	    	sendMess(_.jid, `[ *${botname} BROADCAST* ]\n\n=> *DARI* : ${ownername}\n=> *TIME* : ${time}\n=> *PESAN* : ${body.slice(4)}`)
 			}
			reply(sukses2)
			}			
			break		
			case 'bcgc':			
 		    if (!isGroup) return reply(group)
			if (!isOwner) return reply(owner) 
			if (args.length < 1) return reply(notext)
			anu = await groupMembers				 
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: aq})
			}
			reply(notext)
			} else {
			for (let _ of anu) {
			sendMess(_.jid, aq)
			}
			reply(sukses2)
			}			 
			break 			    
            case 'join':
			if (!isOwner) return reply(owner) 
			if (isGroup) return reply(pribadi)
			try {
		    ini_url = args[0]
			if (args.length < 1) return reply(nolink)	
			var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
			if (!codeInvite) return reply(linkerror)
			var response = await nayla.acceptInvite(codeInvite)
			reply('SUKSES!!!')
			} catch {
			reply(linkerror)
			}
			break			  	
			case 'setppbot':
		    if (!isOwner) return reply(owner) 
		    nayla.updatePresence(from, Presence.composing) 
			if (!isQuotedImage) return reply(`Tag image`)
			enmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nayla.downloadAndSaveMediaMessage(enmedia)
			await nayla.updateProfilePicture(botNumber, media)
			reply('SUKSES!!!')			  
			break			 
			case 'return':
		    if (!isOwner) return reply(owner)
            try {
            return nayla.sendMessage(from, JSON.stringify(eval(budy.slice(8)),null,'\t'),text, {quoted: nay1})
            } catch(err) {
            e = String(err)
            reply(e)
            }
            break 
            case 'antivirtext':
			case 'antivirtex':
            if (isBanned) return reply(banned) 			                                                            
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			antivirtex.push(from)
			fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(antivirtex))
			reply("SUKSES : ANTIVIRTEX ON")
			} else if ((args[0]) === 'off') {
			antivirtex.splice(from, 1)
			fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(antivirtex))
			reply("SUKSES : ANTIVIRTEX OFF")
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			}
			break		
            case 'antilink':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			antilink.push(from)
			fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
			reply("SUKSES : ANTILINK ON")
			} else if ((args[0]) === 'off') {			
			antilink.splice(from, 1)
			fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
			reply("SUKSES : ANTILINK OFF")
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}antilink off`)
			}
			break 	
			case 'antitoxic':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)
			if (args.length < 1) return reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			antitoxic.push(from)
			fs.writeFileSync('./database/json/antitoxic.json', JSON.stringify(antitoxic))
			reply("SUKSES : ANTITOXIC ON")
			} else if ((args[0]) === 'off') {			 
			antitoxic.splice(from, 1)
			fs.writeFileSync('./database/json/antitoxic.json', JSON.stringify(antitoxic))
			reply("SUKSES : ANTITOXIC OFF")
			} else {
			reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
			case 'welcome':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)
			if (args.length < 1) return reply(`FITUR WELCOME\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			welkom.push(from)
			fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
			reply("SUKSES : WELCOME ON")
			} else if ((args[0]) === 'off') {			 
			welkom.splice(from, 1)
			fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
			reply("SUKSES : WELCOME OFF")
			} else {
			reply(`FITUR WELCOME\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
			case 'antitag':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)
			if (args.length < 1) return reply(`FITUR ANTITAG\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			antitag.push(from)
			fs.writeFileSync('./database/json/antitag.json', JSON.stringify(antitag))
			reply("SUKSES : ANTITAG ON")
			} else if ((args[0]) === 'off') {
			antitag.splice(from, 1)
			fs.writeFileSync('./database/json/antitag.json', JSON.stringify(antitag))
			reply("SUKSES : ANTITAG OFF")
			} else {
			reply(`FITUR ANTITAG\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
            case 'kick':
            if (isBanned) return reply(banned) 			
            if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)			 
			if (!isGroup) {
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
			mentions(mentioned, true)
			nayla.groupRemove(from, mentioned)
			} else {
			await nayla.groupRemove(from, mentionUser)
			reply(`SUCCESS`)
			}
			break	     	 
            break
			case 'add':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)				 
			if (args.length < 1) return reply(nonumber)
			if (args[0].startsWith('08')) return reply(nocode)
			try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			nayla.groupAdd(from, [num])
			reply(`SUCCESS`)
			} catch (e) {
			reply('ERROR')
			}
			break			 		 
			case 'listonline':
            if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
        	let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let online = [...Object.keys(nayla.chats.get(ido).presences), nayla.user.jid]
		    nayla.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: nay1,
  		    contextInfo: { mentionedJid: online }
		    })			 
			break
			case 'group':		
			case 'grub':
			case 'grup':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)				 
			if (args[0] === 'open') {
		    reply(sukses3)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
			} else if (args[0] === 'close') {
			reply(sukses3)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
			} else if (args[0] === 'tutup') {
			reply(sukses3)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
			} else if (args[0] === 'buka') {
			reply(sukses3)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
			}		 
			break      
			case 'setname':
            if (isBanned) return reply(banned) 			 
			if (args.length < 1) return reply(notext)		   
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)			 
            nayla.groupUpdateSubject(from, `${body.slice(9)}`)
            reply(sukses3)		
			break
            case 'setdesc':
            if (isBanned) return reply(banned) 			 
            if (args.length < 1) return reply(`SELAMAT DATANG`)		
            if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)				
            nayla.groupUpdateDescription(from, `${body.slice(9)}`)
            reply(sukses3)				
			break	
	    	case 'listadmin':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)				 
			teks = `NAME *${groupMetadata.subject}*\nTOTAL : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
			no += 1
			teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
			}
			mentions(teks, groupAdmins, true)			 
			break
			case 'linkgc':	
			case 'linkgrub':
			case 'linkgrup':
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)				 
		    linkgc = await nayla.groupInviteCode(from)
		    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		    reply(yeh)		         
			break	
			case 'tagtime':
            if (isBanned) return reply(banned) 			
	 	    if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)	
			if (args.length == 0) return reply(`Command??\n${prefix}${command} your_text|time\n=> ${prefix}${command} halo|20`)		
			var gh = body.slice(9)
			var anuu = gh.split("|")[0];
			var anu = gh.split("|")[1];
			jm = `${anu}000`
			reply(`${timetag} ${anu} DETIK`)			 		
         	var group = await nayla.groupMetadata(from)
         	var member = group['participants']
         	var mem = []
         	member.map( async adm => {
         	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
         	})
         	anuu = `=> *=>* : ${codename}\n=> *TIMER* : ${anu}\n=> *MESS* : ${anuu}`
         	var options = {
         	text: anuu,
         	contextInfo: { mentionedJid: mem },
         	quoted: nay1
         	}
         	setTimeout( () => {
         	nayla.sendMessage(from, options, text, {quoted:nay1}) 
         	}, jm)        	 
         	break	      	      
			case 'tagall':
            if (isBanned) return reply(banned) 			
		    if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `=> @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall2':
            if (isBanned) return reply(banned) 			
		    if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➤ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall3':
            if (isBanned) return reply(banned) 			
		    if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➟ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall4':
            if (isBanned) return reply(banned) 			
		    if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➙ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall5':
            if (isBanned) return reply(banned) 			
		    if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➔ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break	
			case 'kickrandom':
            if (isBanned) return reply(banned) 			
	 	    if (!isGroup) return reply(replygrub)
			if (!isGroupAdmins) return reply(replyadmin)
			if (!isBotGroupAdmins) return reply(replyadminbot)
	 	    const A11 = groupMembers
 		    const C11 = A11[Math.floor(Math.random() * A11.length)]
 		    var kic = `${C11.jid.split('@')[0]}@s.whatsapp.net`                   		    
		    F1 = kikrndm	 	    
	 	    D1 = `SUKSES KICK RANDOM USER @${C11.jid.split('@')[0]}`
	 	    reply(F1)	 	  
		    setTimeout( () => { 
	  	    nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	  	    }, 3000)    
	  	    setTimeout( () => {  
	  	    reply(D1)
	  	    }, 4000)     
	 	    break
	 	    case 'sms':
            if (isBanned) return reply(banned) 			
	 	    if (args.length == 0) return reply(notext)
	 	    if (!isGroup) return reply(`GROUP ONLY`)
 		    jds = []
		    const AA1 = groupMembers
 		    const CC1 = AA1[Math.floor(Math.random() * AA1.length)]
 		    G1 = `=> *DARI* : ${codename}\n=> *UNTUK* : ANDA\n=> *MATH* : RANDOM\n=> *PESAN* : ${aq}`
	 	    nayla.sendMessage(`${CC1.jid.split('@')[0]}@s.whatsapp.net`, G1, text) 
	 	    F1 = kikrndm 	    
	 	    D1 = `SUKSES USER @${CC1.jid.split('@')[0]}`	 	  
	 	    reply(F1) 
	 	    jds.push(CC1.jid)
	 	    setTimeout( () => {
	  	    mentions(D1, jds, true)
	  	    }, 3000)        		    
	 	    break          		 				 
            case 'delete':
			case 'd':
            if (isBanned) return reply(banned) 			
			if (!isGroup)return reply(group)
			if (!isGroupAdmins) return reply(admin)
			nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break			 
            case 'leave':
            if (isBanned) return reply(banned) 			             
			if (!isGroupAdmins) return reply(admin)
			if (!isGroup) return reply(group)
			anu = await nayla.groupLeave(from, `Bye`, groupId)
			break
            case 'hidetag':
            if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		       
			var value = body.slice(9)
			var group = await nayla.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
    		quoted: nay
			}
			nayla.sendMessage(from, options, text, {quoted:nay1})			 
			break  				 		 
            case 'audio1': 
            if (isBanned) return reply(banned)           
            sendVn(audio1)
            break         
            case 'audio2':
            if (isBanned) return reply(banned)
            sendVn(audio2)
            break         
            case 'audio3':
            if (isBanned) return reply(banned)
            sendVn(audio3)
            break         
            case 'audio4':
            if (isBanned) return reply(banned)
            sendVn(audio4)
            break         
            case 'audio5':
            if (isBanned) return reply(banned)
            sendVn(audio5)
            break         
            case 'audio6':
            if (isBanned) return reply(banned)
            sendVn(audio6)
            break         
            case 'audio7':
            if (isBanned) return reply(banned)
            sendVn(audio7)
            break         
            case 'audio8':
            if (isBanned) return reply(banned)
            sendVn(audio8)
            break         
            case 'audio9':
            if (isBanned) return reply(banned)
            sendVn(audio9)
            break         
            case 'audio10':
            if (isBanned) return reply(banned)
            sendVn(audio10)
            break         
            case 'audio11':
            if (isBanned) return reply(banned)
            sendVn(audio11)
            break         
            case 'audio12':
            if (isBanned) return reply(banned)
            sendVn(audio12)
            break         
            case 'audio13':
            if (isBanned) return reply(banned)
            sendVn(audio13)
            break         
            case 'audio14':
            if (isBanned) return reply(banned)
            sendVn(audio14)
            break         
            case 'audio15':
            if (isBanned) return reply(banned)
            sendVn(audio15)
            break         
            case 'audio16':
            if (isBanned) return reply(banned)
            sendVn(audio16)
            break         
            case 'audio17':
            if (isBanned) return reply(banned)
            sendVn(audio17)
            break         
            case 'audio18':
            if (isBanned) return reply(banned)
            sendVn(audio18)
            break         
            case 'audio19':
            if (isBanned) return reply(banned)
            sendVn(audio19)
            break         
            case 'audio20': 
            if (isBanned) return reply(banned)
            sendVn(audio20) 
            break                 
			case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
            case 'bego': case 'pintar': case 'jago': case 'nolep': case 'monyet':                 	 
            case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
            case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
            case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':			
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group) 	 
 		    jds = []
		    const A12 = groupMembers
  		    const B12 = groupMembers
 		    const C12 = A12[Math.floor(Math.random() * A12.length)]
	 	    D12 = `${replybiasater} *ter${command}* ${replyin} => @${C12.jid.split('@')[0]}`                  
		    jds.push(C12.jid)
	  	    mentions(D12, jds, true)
	 	    break 	 	    
	 	    case 'gantengcek':
            if (isBanned) return reply(banned) 	
            N = `NAME : ${codename}\n`,		
            N += `RATE *GANTENGAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'cantikcek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *CANTIKAN* => *${randomnay1}${randomnay2}% :v*`
            reply(N)
            break
            case 'jelekcek':
            if (isBanned) return reply(banned)     
            N = `NAME : ${codename}\n`,            	
            N += `RATE *J3L3K4N* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'goblokcek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *GOBLOKAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'begocek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *BEGO* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pintercek': 
            case 'pintarcek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *PINTARAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jagocek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *JAGOAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'nolepcek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *NOLEPAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'babicek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *BABIAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'bebancek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *BEBANAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'baikcek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *BAIKAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jahatcek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *JAHATAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'anjingcek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *ANJINGAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break              
            case 'haramcek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *HARAMAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break  
            case 'kontolcek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *KOMTOLAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakboycek':
            if (isBanned) return reply(banned) 
            N = `NAME : ${codename}\n`,
            N += `RATE *PAKBOYZ* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakgirlcek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *PAKGILR* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break             
            case 'sangecek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *SANGE* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break
            case 'bapercek':
            if (isBanned) return reply(banned)
            N = `NAME : ${codename}\n`,
            N += `RATE *BEPERAN* => *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break  
            case 'cantiktag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *CANTIK RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KECANTIKAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'bapertag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BAPER RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEBAPERAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'sangetag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *SENGE RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KESANGEAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'pakgirltag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PAKGIRL RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEPAKGIRL AN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'pakboytag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PAKBOY RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEPAKBOYAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'kontoltag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *KOMTOL RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEKONTOLAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'haramtag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *HARAM RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEHARAMAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'anjingtag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *ANJING RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEANJINGAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'jahattag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JAHAT RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEJAHATAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'baiktag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BAIK RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEBAIKAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'bebantag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BEBAN RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEBEBANAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'babitag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BABI RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEBABIAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'noleptag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *NOLEP RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KENOLEPAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'jagotag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JAGO RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEJAGOAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'pintartag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PINTAR RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEPINTARAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'begotag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BEGO RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEBEGOAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'gobloktag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *GOBLOK RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEGOBLOKAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'jelektag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JELEK RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEJELEKAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 
			case 'gantengtag':
            if (isBanned) return reply(banned)
			if (!isGroup) return reply(group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *GANTENG RATE* ]\n\n=> *USER* : @${mentioned[0].split('@')[0]}\n=> *KEGANTENGAN* : ${randomnay1}${randomnay2}%`, mentioned, true)						 			
			break 		   
		    case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml':
            if (isBanned) return reply(banned) 							
			sendStick(stickproses)
			try{			
			nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
			nyz3 = await getBuffer(nyz2.list.gambar)
			nayla.sendMessage(from, nyz3, image, {thumbnail:Buffer.alloc(0), caption:rplysend, quoted:nay1}) 			
			} catch (e) { reply(errory)}
			break
			case 'ytmp4':
            if (isBanned) return reply(banned) 			
		    if (!isPrem) return reply(premium)	
		    if (args.length < 1) return reply(nourl)
		    sendStick(stickproses)
		    nyz1 = await fetchJson(`https://myselfff.herokuapp.com/docs/downloader/ytmp4?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    nyz3 = `[ *YOUTUBE VIDEO* ]\n`
		    nyz3 += `=> *TITLE* : ${nyz1.result.title}\n`
		    nyz3 += `=> *DESC* : ${nyz1.result.desc}\n`
		    nyz3 += `_WAIT_`
		    reply(nyz3)		    
		    nayla.sendMessage(from, nyz2, video, {caption:rplysend, thumbnail:Buffer.alloc(0), quoted:nay1})
		    break
		    case 'ytmp3':
            if (isBanned) return reply(banned) 		
		    if (args.length < 1) return reply(nourl)
		    sendStick(stickproses)
		    nyz1 = await fetchJson(`https://myselfff.herokuapp.com/docs/downloader/ytmp3?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    nyz3 = `[ *YOUTUBE AUDIO* ]\n`
		    nyz3 += `=> *TITLE* : ${nyz1.result.title}\n`
		    nyz3 += `=> *DESC* : ${nyz1.result.desc}\n`
		    nyz3 += `_WAIT_`
		    reply(nyz3)		    
		    nayla.sendMessage(from, nyz2, audio, {mimetype:"audio/mp4", quoted:nay1})
		    break
		    case 'tiktokmp4':
            if (isBanned) return reply(banned) 			
		    if (!isPrem) return reply(premium)		    
		    if (args.length < 1) return reply(nourl)
		    sendStick(stickproses)
		    nyz1 = await fetchJson(`https://myselfff.herokuapp.com/docs/downloader/tiktokmp4?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)		    
		    nayla.sendMessage(from, nyz2, video, {caption:"NIH KAK", thumbnail:Buffer.alloc(0), quoted:nay1})		 
		    break
		    case 'playmp3': case 'playmp4':
            if (isBanned) return reply(banned) 			
		    if (!isPrem) return reply(premium)
		    reply("ERR")
		    break
		    case 'tiktokmp3':
            if (isBanned) return reply(banned) 			
		    if (!isPrem) return reply(premium)		    
		    if (args.length < 1) return reply(nourl)
		    sendStick(stickproses)
		    nyz1 = await fetchJson(`https://myselfff.herokuapp.com/docs/downloader/tiktokmp3?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)		    
		    nayla.sendMessage(from, nyz2, audio, {mimetype:"audio/mp4", quoted:nay1})		 
		    break	
		    case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
			case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
			case 'horror2': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
            if (isBanned) return reply(banned)
			if (args.length < 1) return reply(notext)		
			sendStick(stickproses)						
			nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${aq}`) 
			nyz4 = await getBuffer(nyz5.result)
			nayla.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption: rplysend, quoted:nay1}) 					
			break	
			 case 'artinama':
            if (isBanned) return reply(banned) 	
			if (args.length < 1) return reply(notext)
		    nyz6 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artinama?query=${aq}`)
		    nyz7 = `[ *ARTI NAMA* ]\n`,
		    nyz7 += `=> *ARTINAMA* : ${nyz6.result.list}`
		    reply(nyz7)	
		    break
		    case 'artimimpi':
            if (isBanned) return reply(banned) 	
			if (args.length < 1) return reply(notext)
		    nyz8 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artimimpi?query=${aq}`)
		    nyz31 = `[ *ARTI MIMPI* ]\n`,
		    nyz31 += `=> *ARTINAMA* : ${nyz8.result.list}`
		    reply(nyz31)	
		    break
		    case 'resepmasakan':
            if (isBanned) return reply(banned) 	
			if (args.length < 1) return reply(notext)
		    nyz9 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/resepmasakan?query=${aq}`)
		    nyz32 = `[ *RESEP MASAKAN* ]\n`,
		    nyz32 += `=> *NAMA* : ${nyz9.list.nama}\n`,
		    nyz32 += `=> *CARA* : ${nyz9.list.cara}`		    
		    reply(nyz32)	
		    break
		    case 'katajago':
            if (isBanned) return reply(banned) 	
			if (args.length < 1) return reply(notext)
		    nyz10 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/katajago?query=${aq}`)
		    nyz33 = `[ *KATA JAGO* ]\n`,
		    nyz33 += `=> *RESULT* : ${nyz10.result.list}`
		    reply(nyz33)	
		    break		     
		    case 'besarkecil':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz11 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/besarkecil?query=${aq}`)
		    nyz34 = `[ *BESAR KECIL* ]\n`,
		    nyz34 += `=> *RESULT* : ${nyz11.result.list}`
		    reply(nyz34)	
		    break	  
		    case 'jumlahhuruf':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz12 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahhuruf?query=${aq}`)
		    nyz35 = `[ *JUMLAH HURUF* ]\n`,
		    nyz35 += `=> *RESULT* : ${nyz12.result.list}`
		    reply(nyz35)	
		    break
		    case 'jumlahangka':
            if (isBanned) return reply(banned) 			
			if (args.length < 1) return reply(notext)
		    nyz13 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahangka?query=${aq}`)
		    nyz36 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz36 += `=> *RESULT* : ${nyz13.result.list}`
		    reply(nyz36)
		    break
		    case 'infogempa':
            if (isBanned) return reply(banned) 			
		    nyz14 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/infogempa`)
		    nyz37 = `[ *INFO GEMPA* ]\n`,
		    nyz37 += `=> *WAKTU* : ${nyz14.result.waktu}\n`,
		    nyz37 += `=> *KEDALAMAN* : ${nyz14.result.kedalaman}\n`,
		    nyz37 += `=> *KOORDINAT* : ${nyz14.result.koordinat}\n`,
		    nyz37 += `=> *LOKASI* : ${nyz14.result.lokasi}\n`,
		    nyz37 += `=> *TSUNAMI* : ${nyz14.result.tsunami}`		    
		    reply(nyz37)
		    break	    	
		    case 'kapital':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz15 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/kapital?query=${aq}`)
		    nyz38 = `[ *KAPITAL* ]\n`,
		    nyz38 += `=> *RESULT* : ${nyz15.result.list}`
		    reply(nyz38)
		    break	
		    case 'halah':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz16 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/halah?query=${aq}`)
		    nyz39 = `[ *HALAH* ]\n`,
		    nyz39 += `=> *RESULT* : ${nyz16.result.list}`
		    reply(nyz39)
		    break    	
		    case 'hilih':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz17 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/hilih?query=${aq}`)
		    nyz40 = `[ *HILIH* ]\n`,
		    nyz40 += `=> *RESULT* : ${nyz17.result.list}`
		    reply(nyz40)
		    break    	
		    case 'huluh':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz18 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/huluh?query=${aq}`)
		    nyz41 = `[ *HULUH* ]\n`,
		    nyz41 += `=> *RESULT* : ${nyz18.result.list}`
		    reply(nyz41)
		    break    	
		    case 'heleh':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz19 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/heleh?query=${aq}`)
		    nyz42 = `[ *HELEH* ]\n`,
		    nyz42 += `=> *RESULT* : ${nyz19.result.list}`
		    reply(nyz42)
		    break    	
		    case 'holoh':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz20 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/holoh?query=${aq}`)
		    nyz43 = `[ *HOLOH* ]\n`,
		    nyz43 += `=> *RESULT* : ${nyz20.result.list}`
		    reply(nyz43)
		    break  
		    case 'bilangangka':
            if (isBanned) return reply(banned) 			
			if (args.length < 1) return reply(notext)
		    nyz21 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/bilangangka?query=${aq}`)
		    nyz44 = `[ *BILANG ANGKA* ]\n`,
		    nyz44 += `=> *RESULT* : ${nyz21.result.list}`
		    reply(nyz44)
		    break 
		    case 'jumlahangka':
            if (isBanned) return reply(banned) 	
			if (args.length < 1) return reply(notext)
		    nyz22 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahangka?query=${aq}`)
		    nyz45 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz45 += `=> *RESULT* : ${nyz22.result.list}`
		    reply(nyz45)
		    break  
		    case 'balikhuruf':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz23 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikhuruf?query=${aq}`)
		    nyz46 = `[ *BALIK HURUF* ]\n`,
		    nyz46 += `=> *RESULT* : ${nyz23.result.list}`
		    reply(nyz46)
		    break	
		    case 'wikipedia':
            if (isBanned) return reply(banned) 		
			if (args.length < 1) return reply(notext)
		    nyz24 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${aq}`)
		    nyz47 = `[ *WIKIPEDIA* ]\n`,
		    nyz47 += `=> *RESULT* : ${nyz24.result.list}`
		    reply(nyz47)
		    break 
		    case 'balikangka':
            if (isBanned) return reply(banned) 	
			if (args.length < 1) return reply(notext)
		    nyz25 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikangka?query=${aq}`)
		    nyz48 = `[ *BALIK ANGKA* ]\n`,
		    nyz48 += `=> *RESULT* : ${nyz25.result.list}`
		    reply(nyz48)
		    break	 	              
		    case 'tendang':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)						
		    sendSticker(command, `${body.slice(10)}`)
		    break
			case 'jijik':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break
			case 'ketawa':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(9)}`)
		    break
			case 'diam':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(7)}`)
		    break
			case 'kaget':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break
			case 'nangis':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(9)}`)
		    break
			case 'tampar':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(9)}`)
		    break
			case 'peluk':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break
			case 'pukul':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break
			case 'marah':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break
			case 'takut':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break
			case 'sedih':
		    if (isBanned) return reply(banned) 			 
			if (!isGroup) return reply(group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply(reptag)	
		    sendSticker(command, `${body.slice(8)}`)
		    break	
		    case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki': case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':
            if (isBanned) return reply(banned) 			   
            sendStick(stickproses)
            try{	
            nyz1 = await fetchJson(`https://myselfff.herokuapp.com/docs/anime/${command}`)            
            nyzs = await getBuffer(nyz1.result.list)
            sendImage(nyzs, rplysend)
            } catch (e) {console.log(e)}	    	    	
            break 
            case 'grubwa':
            if (isBanned) return reply(banned)  	
			if (args.length < 1) return reply(notext)
			nyz49 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${aq}`)
			nyz50 = `[ *GRUB WA* ]\n`,
			nyz50 += `=> *NAMA* : ${nyz49.result.judul}\n`,
			nyz50 += `=> *LINK* : ${nyz49.result.link}\n`
			reply(nyz50)
			break
			case 'arena':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz51 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/arena?query=${aq}`)
			nyz53 = nyz51.result
			nyz52 = `[ *ARENA* ]\n`,
			nyz52 += `=> *SPEK* : ${nyz53.spek}\n`,
			nyz52 += `=> *TYPE* : ${nyz53.type}\n`,
			nyz52 += `=> *SIZE* : ${nyz53.size}\n`,
			nyz52 += `=> *RESOLUSI* : ${nyz53.resolusi}\n`,
			nyz52 += `=> *OS* : ${nyz53.os}\n`,
			nyz52 += `=> *CPU* : ${nyz53.cpu}\n`,
			nyz52 += `=> *INTERNAL* : ${nyz53.internal}\n`,
			nyz52 += `=> *CAMERA* : ${nyz53.camera}\n`,
			nyz52 += `=> *BATTERAI* : ${nyz53.batterai}\n`			
			reply(nyz52)
			break
			case 'amazon':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz54 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${aq}`)
			nyz55 = nyz54.result
			nyz56 = `[ *AMAZON* ]\n`,
			nyz56 += `=> *ITEM* : ${nyz55.item}\n`,
			nyz56 += `=> *REVIEW* : ${nyz55.review}\n`,
			nyz56 += `=> *RATING* : ${nyz55.rating}\n`,
			nyz56 += `=> *PRICE* : ${nyz55.price}\n`,
			nyz56 += `=> *DISKON* : ${nyz55.diskon}\n`,
			nyz56 += `=> *URL* : ${nyz55.url}\n`,
			nyz56 += `=> *SPONSOR* : ${nyz55.sponsor}\n`,
			nyz56 += `=> *BEST* : ${nyz55.best}\n`,
			nyz56 += `=> *AMAZON* : ${nyz55.amazon}\n`
			reply(nyz56)
			break
			case 'shopee':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${aq}`)
			nyz58 = nyz57.result
			nyz59 = `[ *SHOPEE* ]\n`,
			nyz59 += `=> *JUDUL* : ${nyz58.judul}\n`,
			nyz59 += `=> *HARGA* : ${nyz58.harga}\n`,
			nyz59 += `=> *MERK* : ${nyz58.merk}\n`,
			nyz59 += `=> *STOCK* : ${nyz58.stock}\n`,
			nyz59 += `=> *LIKE* : ${nyz58.like}\n`,
			nyz59 += `=> *VIEWS* : ${nyz58.views}\n`,
			nyz59 += `=> *TERJUAL* : ${nyz58.terjual}\n`
			reply(nyz59)
			break
			case 'thelazy':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz70 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/thelazy?query=${aq}`)
			nyz71 = nyz70.result
			nyz72 = `[ *THELAZY* ]\n`,
			nyz72 += `=> *TITLE* : ${nyz71.title}\n`,
			nyz72 += `=> *URL* : ${nyz71.url}\n`,
			nyz72 += `=> *CATEGORY* : ${nyz71.category}\n`,
			nyz72 += `=> *AUTHOR* : ${nyz71.author}\n`,
			nyz72 += `=> *POST* : ${nyz71.post_date}\n`,
			nyz72 += `=> *COMMENTS* : ${nyz71.comments}\n`
			reply(nyz72)
			break
			case 'cersex':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz73 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/cersex?query=${aq}`)
			nyz74 = nyz73.result
			nyz75 = `[ *CERSEX* ]\n`,
			nyz75 += `=> *TITLE* : ${nyz74.title}\n`,
			nyz75 += `=> *URL* : ${nyz74.url}\n`,
			nyz75 += `=> *CATEGORY* : ${nyz74.category}\n`,
			nyz75 += `=> *POST* : ${nyz74.post}\n`
			reply(nyz75)
			break
			case 'ytsearch':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${aq}`)
			nyz77 = nyz76.result
			nyz78 = `[ *YTSEARCH* ]\n`,
			nyz78 += `=> *TITLE* : ${nyz77.title}\n`,
			nyz78 += `=> *ID* : ${nyz77.id}\n`,
			nyz78 += `=> *TYPE* : ${nyz77.type}\n`,
			nyz78 += `=> *VIEWS* : ${nyz77.views}\n`,
			nyz78 += `=> *URL* : ${nyz77.url}\n`,
			nyz78 += `=> *DESC* : ${nyz77.desc}\n`
			reply(nyz78)
			break
			case 'rexdl':
            if (isBanned) return reply(banned) 
			if (args.length < 1) return reply(notext)
			nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${aq}`)
			nyz80 = nyz79.result
			nyz81 = `[ *REXDL* ]\n`,
			nyz81 += `=> *TITLE* : ${nyz80.title}\n`,
			nyz81 += `=> *URL* : ${nyz80.url}\n`, 
			nyz81 += `=> *ON* : ${nyz80.on}\n`,
			nyz81 += `=> *DESC* : ${nyz80.desc}\n` 
			reply(nyz81)
			break			 
			case 'sfile':
            if (isBanned) return reply(banned)
			if (args.length < 1) return reply(notext)
			nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${aq}`)
			nyz86 = nyz85.result
			nyz87 = `[ *SFILE* ]\n`,
			nyz87 += `=> *TITLE* : ${nyz86.title}\n`,
			nyz87 += `=> *SIZE* : ${nyz86.size}\n`,
			nyz87 += `=> *URL* : ${nyz86.url}\n`
			reply(nyz87)
			break			 
			case 'berita':
            if (isBanned) return reply(banned) 
			nyz88 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita`)
			nyz89 = nyz88.result
			nyz90 = `[ *BERITA* ]\n`,
			nyz90 += `=> *TITLE* : ${nyz89.title}\n`,
			nyz90 += `=> *URL* : ${nyz89.url}\n`
			reply(nyz90)
			break
			case 'kompas':
            if (isBanned) return reply(banned) 
			nyz91 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`)
			nyz92 = nyz91.result
			nyz93 = `[ *KOMPAS* ]\n`,
			nyz93 += `=> *TITLE* : ${nyz92.title}\n`,
			nyz93 += `=> *URL* : ${nyz92.url}\n`
			reply(nyz93)
			break
			case 'okezone':
            if (isBanned) return reply(banned) 
			nyz94 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/okezone`)
			nyz95 = nyz94.result
			nyz96 = `[ *OKEZONE* ]\n`,
			nyz96 += `=> *TITLE* : ${nyz95.title}\n`,
			nyz96 += `=> *URL* : ${nyz95.url}\n`
			reply(nyz96)
			break
			case 'antara':
            if (isBanned) return reply(banned) 
			nyz97 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/antara`)
			nyz98 = nyz97.result
			nyz99 = `[ *ANTARA* ]\n`,
			nyz99 += `=> *TITLE* : ${nyz98.title}\n`,
			nyz99 += `=> *URL* : ${nyz98.url}\n`
			reply(nyz99)
			break
			case 'jam':
            if (isBanned) return reply(banned) 
		    nyz100 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jam`)
		    nyz101 = nyz100.result
		    nyz102 = `[ *JAM* ]\n`,
		    nyz102 += `=> *WIB* : ${nyz101.wib}\n`,
		    nyz102 += `=> *WITA* : ${nyz101.wita}\n`,
		    nyz102 += `=> *WIT* : ${nyz101.wit}\n`
		    reply(nyz102)
		    break
		    case 'jamdunia':
            if (isBanned) return reply(banned) 
		    nyz103 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
		    nyz104 = nyz103.result
		    nyz105 = `[ *JAM DUNIA* ]\n`,
		    nyz105 += `=> *WITA* : ${nyz104.wita}\n`,
		    nyz105 += `=> *WIT* : ${nyz104.wit}\n`,
		    nyz105 += `=> *WIB* : ${nyz104.wib}\n`,
		    nyz105 += `=> *MATAHARI* : ${nyz104.matahari}\n`,
		    nyz105 += `=> *TANGGAL* : ${nyz104.tanggal}\n`,
		    nyz105 += `=> *DETAIL* : ${nyz104.detail}\n`
		    reply(nyz105)
		    break
		    case 'jadwalbola':
            if (isBanned) return reply(banned) 
		    nyz106 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jadwalbola`)
		    nyz107 = nyz106.result
		    nyz108 = `[ *JADWAL BOLA* ]\n`,
		    nyz108 += `=> *WAKTU* : ${nyz107.waktu}\n`,
		    nyz108 += `=> *KICKOFF* : ${nyz107.kickoff}\n`,
		    nyz108 += `=> *CHANNEL* : ${nyz107.channel}\n`
		    reply(nyz108)
		    break
		    case 'infohoax':
            if (isBanned) return reply(banned) 
		    nyz109 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/infohoax`)
		    nyz110 = nyz109.result
		    nyz111 = `[ *INFO HOAX* ]\n`,
		    nyz111 += `=> *TITLE* : ${nyz110.title}\n`,
		    nyz111 += `=> *URL* : ${nyz110.URL}\n`,
		    nyz111 += `=> *TANGGAL* : ${nyz110.tanggal}\n`,
		    nyz111 += `=> *DESC* : ${nyz110.desc}\n`
		    reply(nyz111)
		    break 
		    case 'coronameninggal':
            if (isBanned) return reply(banned) 
		    nyz112 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/coronameninggal`)
		    nyz113 = `=> *MENINGGAL* : ${nyz112.result.meninggal}`
		    reply(nyz113)
		    break	
		    case 'hadist':
            if (isBanned) return reply(banned) 
            nyz117 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/hadist`)
            nyz118 = `[ *HADIST* ]\n`,
            nyz118 += `=> *NAME* : ${nyz117.list.name}\n`,
            nyz118 += `=> *ID* : ${nyz117.list.id}\n`,
            nyz118 += `=> *AVAILABLE* : ${nyz117.list.available}\n`,
            nyz118 += `=> *NUMBER* : ${nyz117.list.number}\n`,
            nyz118 += `=> *ARAB* : ${nyz117.list.arab}\n`
            reply(nyz118)
            break
            case 'quran':
            if (isBanned) return reply(banned) 
            nyz119 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/quran`)
            nyz120 = `[ *QURAN* ]\n`,
            nyz120 += `=> *QURAN* : ${nyz119.list.quran}\n`,
            nyz120 += `=> *SURAH* : ${nyz119.list.surah}\n`,
            nyz120 += `=> *JUZ* : ${nyz119.list.juz}\n`,
            nyz120 += `=> *ARAB* : ${nyz119.list.arab}\n`,
            nyz120 += `=> *SHORT* : ${nyz119.list.id_short}\n`,
            nyz120 += `=> *LONG* : ${nyz119.list.id_long}\n`
            reply(nyz120)
            break
            case 'asmaulhusna':
            if (isBanned) return reply(banned) 
            nyz121 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/asmaulhusna`)
            nyz122 = `[ *ASMAULHUSNA* ]\n`,
            nyz122 += `=> *NUMBER* : ${nyz121.list.number}\n`,
            nyz122 += `=> *LATIN* : ${nyz121.list.latin}\n`,
            nyz122 += `=> *ARAB* : ${nyz121.list.arab}\n`,
            nyz122 += `=> *ID* : ${nyz121.list.id}\n`,
            nyz122 += `=> *EN* : ${nyz121.list.en}\n`
            reply(nyz122)
            break
            case 'kisahnabi':
            if (isBanned) return reply(banned) 
            nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/kisahnabi`)
            nyz124 = `[ *KISAHNABI* ]\n`,
            nyz124 += `=> *NAME* : ${nyz125.list.name}\n`,
            nyz124 += `=> *KELAHIRAN* : ${nyz125.list.kelahiran}\n`,
            nyz124 += `=> *WAFAT USIA* : ${nyz125.list.wafat_usia}\n`,
            nyz124 += `=> *SINGGAH* : ${nyz125.list.singgah}\n`,
            nyz124 += `=> *KISAH* : ${nyz125.list.kisah}\n`
            reply(nyz124)
            break	            
            case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri':	
            if (isBanned) return reply(banned) 			
		    if (!isPrem) return reply(premium)	
		    try{	    
		    nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
		    reply(`${rplysend} ${nyz125.result}`)
		    } catch (e) {console.log(e)}	
		    break  
		    case 'sticker':  
         	case 'stiker':  
         	case 'stickergif':  
         	case 'stikergif':  
         	case 'sgif':  
         	case 's':
            if (isBanned) return reply(banned) 			 
         	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
         	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	await ffmpeg(`./${media}`)
         	.input(media)
         	.on('start', function (cmd) {         	 
          	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	reply(prosess)
         	})
         	.on('end', function () {
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
		    fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
            min'(320,ih)':  
            force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
         	.save(ran)
         	} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
         	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')         
         	await ffmpeg(`./${media}`)
         	.inputFormat(media.split('.')[1])
         	.on('start', function (cmd) {         	 
         	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
         	reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
         	})
         	.on('end', function () {
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
         	fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
          	min'(320,ih)':  
           	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
         	.toFormat('webp')
         	.save(ran)
         	} else {
         	reply(`tag image`)
         	}
         	break         	         	         	
         	case 'getsticker':
			case 'gets':
			if (isBanned) return reply(banned)							
			if(!aq) return sendB1("NAME STICKER" + nostick, "LISTSTICKER")
			try{
			result = fs.readFileSync(`./storage/media/${aq}.webp`)
			sendStick(result)
			} catch (e) {	
			sendB1(nostickk, "LISTSTICKER")
			}
			break
			case 'stickerlist':
			case 'liststicker':
			if (isBanned) return reply(banned)
			sendB1(liststick, "LISTSTICKER")				
			break
			case 'addsticker':
			if (isBanned) return reply(banned)
			if (!isQuotedSticker) return reply(nostick1)	
			if (!aq) return reply(nostickkkk)
			boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	    	delb = await nayla.downloadMediaMessage(boij)
			NyzSticker.push(`${aq}`)
			fs.writeFileSync(`./storage/media/${aq}.webp`, delb)
     		fs.writeFileSync(`./storage/sticker.json`, JSON.stringify(NyzSticker)) 
     		sendB1("SUKSES", "LISTSTICKER")
			break			
			case 'getvn':
			if (isBanned) return reply(banned)	
			if(!aq) return sendB1("NAME VN " + nostick, "LISTVN")
			try{
			result = fs.readFileSync(`./storage/media/${aq}.mp3`)
			sendVn(result)
			} catch (e) {	
			sendB1("VN " + nostickk, "LISTVN")
			}
			break
			case 'vnlist':
			case 'listvn':
			if (isBanned) return reply(banned)
			sendB1("LISTVN? " + liststick,"LISTVN")				
			break
			case 'addvn':
			if (isBanned) return reply(banned)
			if (!isQuotedAudio) return reply(novn1)			
			if (!aq) return reply('NAME VN ' + nostickkkk)
			boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	    	delb = await nayla.downloadMediaMessage(boij)
			NyzVn.push(`${aq}`)
			fs.writeFileSync(`./storage/media/${aq}.mp3`, delb)
     		fs.writeFileSync(`./storage/vn.json`, JSON.stringify(NyzVn)) 
     		sendB1("SUKSES", "LISTVN")
			break
			case 'addchat':					 
	        if (!aq) return reply(notext)
			NyzText.push(aq)
	    	fs.writeFileSync('./storage/text.json', JSON.stringify(NyzText))
    		sendCHAT(`SUKSES ADD CHAT ANDA`, "CHAT =>", `Silahkan tekan button di bawah`)	
			break		            		      
		    case 'getchat':  		                  	
            hasil = NyzText[Math.floor(Math.random() * (NyzText.length))]
            sendCHAT(hasil, "CHAT =>", `total chat : ${NyzText.length}`)  
            break                
			case 'getimage':
			case 'getimg':
			if (isBanned) return reply(banned)	
			if(!aq) return sendB1("NAME IMAGE " + nostick, "LISTIMAGE")
			try{
			result = fs.readFileSync(`./storage/media/${aq}.jpg`)
			sendImage(result)
			} catch (e) {	
			sendB1("IMAGE " + nostickk, "LISTIMAGE")
			}
			break
			case 'imagelist':
			case 'listimage':
			case 'imglist':
			case 'listimg':
			if (isBanned) return reply(banned)
			sendB1("LISTIMAGE? " + liststick,"LISTIMAGE")				
			break
			case 'addimage':
			case 'addimg':
			if (isBanned) return reply(banned)
			if (!isQuotedImage) return reply(noimg1)			
			if (!aq) return reply('NAME IMAGE ' + nostickkkk)
			boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	    	delb = await nayla.downloadMediaMessage(boij)
			NyzImage.push(`${aq}`)
			fs.writeFileSync(`./storage/media/${aq}.jpg`, delb)
     		fs.writeFileSync(`./storage/image.json`, JSON.stringify(NyzImage)) 
     		sendB1("SUKSES", "LISTIMAGE")
			break
			case 'getvideo':
			if (isBanned) return reply(banned)	
			if(!aq) return sendB1("NAME VIDEO " + nostick, "LISTVN")
			try{
			result = fs.readFileSync(`./storage/media/${aq}.mp4`)
			sendVideo(result)
			} catch (e) {	
			sendB1("VIDEO " + nostickk, "LISTVIDEO")
			}
			break
			case 'videolist':
			case 'listvideo':
			if (isBanned) return reply(banned)
			sendB1("LISTVIDEO? " + liststick,"LISTVIDEO")				
			break
			case 'addvideo':
			if (isBanned) return reply(banned)
			if (!isQuotedVideo) return reply(novideo1)			
			if (!aq) return reply('NAME VIDEO ' + nostickkkk)
			boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	    	delb = await nayla.downloadMediaMessage(boij)
			NyzVideo.push(`${aq}`)
			fs.writeFileSync(`./storage/media/${aq}.mp4`, delb)
     		fs.writeFileSync(`./storage/video.json`, JSON.stringify(NyzVideo)) 
     		sendB1("SUKSES", "LISTVIDEO")
			break
			case 'cecan': case 'cogan':
			if (isBanned) return reply(banned)
			sendStick(stickproses)
			nyx1 = fs.readFileSync(`./database/random/${command}.js`);
			nyx2 = JSON.parse(nyx1);
			nyx3 = Math.floor(Math.random() * nyx2.length);
			nyx4 = nyx2[nyx3];
			nyx5 = await getBuffer(nyx4.result)
			sendImage(nyx5, ':v')
			break
			case 'darkjoke': case 'darkjokes': case 'joke': case 'jokes': case 'meme':
			if (isBanned) return reply(banned)
			sendStick(stickproses)
			nyx1 = fs.readFileSync(`./database/random/darkjokes.js`);
			nyx2 = JSON.parse(nyx1);
			nyx3 = Math.floor(Math.random() * nyx2.length);
			nyx4 = nyx2[nyx3];
			nyx5 = await getBuffer(nyx4.result)
			sendImage(nyx5, ':v')
			break
			case 'cecan': case 'cogan':
			if (isBanned) return reply(banned)
			sendStick(stickproses)
			nyx1 = fs.readFileSync(`./database/random/${command}.js`);
			nyx2 = JSON.parse(nyx1);
			nyx3 = Math.floor(Math.random() * nyx2.length);
			nyx4 = nyx2[nyx3];
			nyx5 = await getBuffer(nyx4.result)
			sendImage(nyx5, ':v')
			break
			case 'attp':
			if (isBanned) return reply(banned)
			if(!aq) return reply(notext)
			nyz200 = await getBuffer(`https://myselfff.herokuapp.com/docs/random/attp?query=${aq}`)
			sendStick(nyz200)
			break			 					
			case 'caklontong':
            if (isBanned) return reply(banned) 
            if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply(noselesai)
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            nyz116 = nyz115.list.soal
            jawaban = nyz115.list.jawaban
            console.log(`${bocoran} ` + jawaban)
            nayla.sendMessage(from, "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + tebak30, text,{quoted:nay}).then(() => {
            caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync(`./database/game/caklontong.json`, JSON.stringify(caklontong))
            })
            await sleep(30000)
            if (caklontong.hasOwnProperty(sender.split('@')[0])) {
            reply(`${nowaktu} ` + jawaban)
            delete caklontong[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/caklontong.json`, JSON.stringify(caklontong))
            }
            break           
            case 'tebaklirik':
            if (isBanned) return reply(banned) 
            if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply(noselesai)
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            nyz116 = nyz115.list.soal
            jawaban = nyz115.list.jawaban
            console.log(`${bocoran} ` + jawaban)
            nayla.sendMessage(from, "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + tebak30, text,{quoted:nay}).then(() => {
            tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync(`./database/game/tebaklirik.json`, JSON.stringify(tebaklirik))
            })
            await sleep(30000)
            if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
            reply(`${nowaktu} ` + jawaban)
            delete tebaklirik[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebaklirik.json`, JSON.stringify(tebaklirik))
            }
            break
            case 'tebakkimia':
            if (isBanned) return reply(banned) 
            if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return reply(noselesai)
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            nyz116 = nyz115.list.soal
            jawaban = nyz115.list.jawaban
            console.log(`${bocoran} ` + jawaban)
            nayla.sendMessage(from, "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + tebak30, text,{quoted:nay}).then(() => {
            tebakkimia[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync(`./database/game/tebakkimia.json`, JSON.stringify(tebakkimia))
            })
            await sleep(30000)
            if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
            reply(`${nowaktu} ` + jawaban)
            delete tebakkimia[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakkimia.json`, JSON.stringify(tebakkimia))
            }
            break
            case 'tebakjenaka':
            if (isBanned) return reply(banned) 
            if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply(noselesai)
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            nyz116 = nyz115.list.soal
            jawaban = nyz115.list.jawaban
            console.log(`${bocoran} ` + jawaban)
            nayla.sendMessage(from, "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + tebak30, text,{quoted:nay}).then(() => {
            tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync(`./database/game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
            })
            await sleep(30000)
            if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
            reply(`${nowaktu} ` + jawaban)
            delete tebakjenaka[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
            }
            break
            case 'tebakbendera':
            if (isBanned) return reply(banned) 
            if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply(noselesai)
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            nyz116 = nyz115.list.soal
            jawaban = nyz115.list.jawaban
            console.log(`${bocoran} ` + jawaban)
            nayla.sendMessage(from, "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + tebak30, text,{quoted:nay}).then(() => {
            tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync(`./database/game/tebakbendera.json`, JSON.stringify(tebakbendera))
            })
            await sleep(30000)
            if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
            reply(`${nowaktu} ` + jawaban)
            delete tebakbendera[sender.split('@')[0]]
            fs.writeFileSync(`./database/game/tebakbendera.json`, JSON.stringify(tebakbendera))
            }
            break                        
            case 'tebakgambar':
            if (isBanned) return reply(banned) 
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply(noselesai)
            nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
            nyz116 = nyz115.list.soal
            jawaban = nyz115.list.jawaban
            nyz117 = await getBuffer(nyz116)
            console.log(`${bocoran} ` + jawaban)
            nayla.sendMessage(from, nyz117, image, { quoted: nay, caption: tebak30}).then(() => {
            tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
            })
            await sleep(30000)
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
            reply(`${nowaktu} ` + jawaban)
            delete tebakgambar[sender.split('@')[0]]
            fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
            }
            break 
            case 'sewa':  
            if (isBanned) return reply(banned) 
            sewa = "LIST SEWA BOT\n",
            sewa += `1 HARI : ${hari1}\n`,
            sewa += `1 MINGGU : ${minggu1}\n`, 
            sewa += `1 BULAN : ${bulan1}\n`,
            sewa += `1 TAHUN : ${tahun1}\n`
            reply(sewa + ` ${minat}`)
            break    
            case 'iklan':
            if (isBanned) return reply(banned) 
            sendB3(pilihiklan, "IKLAN1", "IKLAN2", "IKLAN3")
            break                                
            case 'wallpapermenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + wallpapermenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'tagmenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + tagmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'storagemenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + storagemenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'stickmenu':   
            if (isBanned) return reply(banned)                    
            sendB3(`Hii ${codename}👋\n` + stickmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'searchmenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + searchmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'ratemenu':   
            if (isBanned) return reply(banned)                    
            sendB3(`Hii ${codename}👋\n` + ratemenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'randommenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + randommenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'ownermenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + ownermenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'nsfwmenu': 
            if (isBanned) return reply(banned)                      
            sendB3(`Hii ${codename}👋\n` + nsfwmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'newsmenu':   
            if (isBanned) return reply(banned)                    
            sendB3(`Hii ${codename}👋\n` + newsmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'islamimenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + islamimenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'infomenu':
            if (isBanned) return reply(banned)                       
            sendB3(`Hii ${codename}👋\n` + infomenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'groupmenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + groupmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'gamemenu': 
            if (isBanned) return reply(banned)                      
            sendB3(`Hii ${codename}👋\n` + gamemenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'downloadmenu':  
            if (isBanned) return reply(banned)                     
            sendB3(`Hii ${codename}👋\n` + downloadmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'cekmenu':   
            if (isBanned) return reply(banned)                    
            sendB3(`Hii ${codename}👋\n` + cekmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'bahasamenu': 
            if (isBanned) return reply(banned)                      
            sendB3(`Hii ${codename}👋\n` + bahasamenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'audiomenu': 
            if (isBanned) return reply(banned)                      
            sendB3(`Hii ${codename}👋\n` + audiomenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break
            case 'animemenu':   
            if (isBanned) return reply(banned)                    
            sendB3(`Hii ${codename}👋\n` + animemenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break   
            case 'hackmenu': 
            if (isBanned) return reply(banned)                      
            sendB3(`Hii ${codename}👋\n` + hackmenu(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break     
            case 'setgrub':  case 'setgrup':   
            if (isBanned) return reply(banned)                   
            sendB3(`Hii ${codename}👋\n` + setgrub(prefix, tz), "INFO-BOT", "INFO-OWNER", "CHAT-OWNER")            	    	  	
            break    
            case 'hackmatahari':
            if (isBanned) return reply(banned) 
			if (!isGroup) return reply(pribadi())  
            sendB2("Apakah anda yakin ingin hack matahari😱??", "YAKIN!", "NO!!!")
            break          
            case 'hackbulan':
            if (isBanned) return reply(banned) 
			if (!isGroup) return reply(pribadi())  
            sendB2("Apakah anda yakin ingin hack bulan😱??", "YAKIN!!", "NO!!!")
            break 
            case 'hacknegara': 
            if (isBanned) return reply(banned) 
			if (!isGroup) return reply(pribadi())             
            sendB2("Apakah anda yakin ingin hack negara😱??", "YAKIN!!!", "NO!!!")
            break 
            case 'hackbapak':
            if (isBanned) return reply(banned) 
			if (!isGroup) return reply(pribadi())  
            sendB2("Apakah anda yakin ingin hack bapak😱??", "YAKIN!!!!", "NO!!!")
            break 
            case 'hacksatelit':  
            if (isBanned) return reply(banned)    
			if (!isGroup) return reply(pribadi())       
            sendB2("Apakah anda yakin ingin hack satelit😱??", "YAKIN!!!!!", "NO!!!")
            break 
            case 'hellokitty': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/hellokitty.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `HELLOKITTY`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP HELLOKITTY`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break
		    case 'horror': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/horror.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `HORROR`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP HORROR`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break	
		    case 'indonesia': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/indonesia.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `INDONESIA`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP INDONESIA`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break	                     
		    case 'anime': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/anime.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `ANIME`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP ANIME`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break	                   
		    case 'bts': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/bts.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `BTS`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP BTS`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break
		    case 'smile': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/smile.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `SMILE`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP SMILE`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break
		    case 'halal': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/halal.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `HALAL`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP HALAL`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break		    
		    case 'bantengmerah': 
            if (isBanned) return reply(banned) 			
			if (!isGroup) return reply(group)
			if (!isGroupAdmins) return reply(admin)
			if (!isBotGroupAdmins) return reply(botadmin)		
            try{
            sendStick(stickproses)
            sertt1 = fs.readFileSync('./database/hacker/bantengmerah.jpg')                                            
            setTimeout( () => {
            nayla.updateProfilePicture(from, sertt1)                           			
	  	    nayla.groupUpdateSubject(from, `BANTENG MERAH!!`)			
	        nayla.groupUpdateDescription(from, `WELCOME TO GROUP BANTENG MERAH`)		
	        reply(`SUKSES`)
	        }, 6000)
	        } catch (e) {	
		    console.log(e)
	    	}    					     			
		    break
			default:		
			if (budy.includes("@")){
		    if (!isAntitag) return
            tag = fs.readFileSync('./database/sticker/antitag.webp')
            nayla.sendMessage(from, tag, sticker, {quoted:nay})
            }            
            if (toxicc(toxic1)){}	    
            if (toxicc(toxic2)){}
            if (toxicc(toxic3)){}
            if (toxicc(toxic4)){}
            if (toxicc(toxic5)){}
            if (toxicc(toxic6)){}
            if (toxicc(toxic7)){}
            if (toxicc(toxic8)){}
            if (toxicc(toxic9)){}
            if (toxicc(toxic10)){}
            if (toxicc(toxic11)){}
            if (toxicc(toxic12)){}
            if (toxicc(toxic13)){}
            if (toxicc(toxic14)){}
            if (toxicc(toxic15)){}
            if (toxicc(toxic16)){}             
            if (budy == "ABC") {reply("Y")}                         
		    if (budy == `P`) {reply(respon)}   
         	if (budy == `p`) {reply(respon)} 
         	if (budy == `Bot`) {reply(respon)} 
         	if (budy == `bot`) {reply(respon)} 
         	if (budy == `BOT`) {reply(respon)}                                       
		    if (body.startsWith(`${prefix}${command}`)) {
		    reply(`[ *403 NOT FOUND* ]\n\n_fitur ${command} ${notfitur}_`)
		    }
		    if (budy.includes("https://")){
	    	if (!isGroup) return
	     	if (!isAntiLink) return
	    	if (isGroupAdmins) return reply(`ADMIN😎💪`)
	    	nayla.updatePresence(from, Presence.composing)
	     	var Kick = `${sender.split("@")[0]}@s.whatsapp.net`	    	 
	    	setTimeout( () => {
	      	nayla.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
			}, 1000)
	    	setTimeout( () => {
	    	httpy = fs.readFileSync('./database/sticker/antilink.webp')
            nayla.sendMessage(from, httpy, sticker, {quoted:nay})
	      	}, 0)
        	}
		    if (txt.length > 1500){
            if (!isGroup) return
	    	if (!isAntiVirtex) return
	    	if (isGroupAdmins) return reply(`ADMIN😎💪`)
	    	nayla.updatePresence(from, Presence.composing)
	    	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    	virtex = fs.readFileSync('./database/sticker/antivirtex.webp')
            nayla.sendMessage(from, virtex, sticker, {quoted:nay})
	     	setTimeout( () => {
			nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			nayla.blockUser(sender, "add")
	    	}, 0)
        	}
        	// NIH CONST BUAT TRANSLATE NYA. JANGAN DI UBAH-UBAH ATAU DI HAPUS, AUTO ERROR  
        	function _0x1e22(_0x5a5fa5,_0x222b1f){const _0x290db9=_0x290d();return _0x1e22=function(_0x1e22cb,_0x37fbe1){_0x1e22cb=_0x1e22cb-0x7c;let _0x249f29=_0x290db9[_0x1e22cb];return _0x249f29;},_0x1e22(_0x5a5fa5,_0x222b1f);}function _0x290d(){const _0x1475c3=['900FkRLul','14265TBDled','120637OmThvP','FN:RIMURUBOTZ\x0a','17200332LaGhsf','Jeff','44776mThIri','END:VCARD','1ruWGDT','1558146aXGrMs','ORG:Owner;\x0a','24174QtumVQ','735SMtVWl','VERSION:3.0\x0a','6252xKCAmh','50aGRAMu','includes','BEGIN:VCARD\x0a','sendMessage','965tzFqLW'];_0x290d=function(){return _0x1475c3;};return _0x290d();}const _0x51cd63=_0x1e22;(function(_0x267ae2,_0x23bf97){const _0x3888a1=_0x1e22,_0x3c2615=_0x267ae2();while(!![]){try{const _0x12ebef=-parseInt(_0x3888a1(0x80))/0x1*(parseInt(_0x3888a1(0x81))/0x2)+parseInt(_0x3888a1(0x8c))/0x3*(-parseInt(_0x3888a1(0x86))/0x4)+parseInt(_0x3888a1(0x8b))/0x5*(parseInt(_0x3888a1(0x83))/0x6)+parseInt(_0x3888a1(0x84))/0x7*(-parseInt(_0x3888a1(0x7e))/0x8)+parseInt(_0x3888a1(0x8d))/0x9+-parseInt(_0x3888a1(0x87))/0xa*(-parseInt(_0x3888a1(0x8e))/0xb)+parseInt(_0x3888a1(0x7c))/0xc;if(_0x12ebef===_0x23bf97)break;else _0x3c2615['push'](_0x3c2615['shift']());}catch(_0x5247b1){_0x3c2615['push'](_0x3c2615['shift']());}}}(_0x290d,0x69668));if(budy[_0x51cd63(0x88)]('#other')){const vcardF=_0x51cd63(0x89)+_0x51cd63(0x85)+_0x51cd63(0x8f)+_0x51cd63(0x82)+'TEL;type=CELL;type=VOICE;waid=6282347260729:+6282347260729\x0a'+_0x51cd63(0x7f);nayla[_0x51cd63(0x8a)](from,{'displayname':_0x51cd63(0x7d),'vcard':vcardF},MessageType['contact'],{'quoted':nay1});}
        	var _0x3f2176=_0x5bd5;function _0x5bd5(_0x1ca6b8,_0x2de924){var _0x291b50=_0x291b();return _0x5bd5=function(_0x5bd541,_0x4adc4d){_0x5bd541=_0x5bd541-0x1cb;var _0x3f1fca=_0x291b50[_0x5bd541];return _0x3f1fca;},_0x5bd5(_0x1ca6b8,_0x2de924);}(function(_0x52d61d,_0x1d5280){var _0x4961a7=_0x5bd5,_0x293567=_0x52d61d();while(!![]){try{var _0x5c7f44=parseInt(_0x4961a7(0x1cf))/0x1+-parseInt(_0x4961a7(0x1ce))/0x2+parseInt(_0x4961a7(0x1d3))/0x3+parseInt(_0x4961a7(0x1d0))/0x4+parseInt(_0x4961a7(0x1d2))/0x5+-parseInt(_0x4961a7(0x1cd))/0x6+parseInt(_0x4961a7(0x1cb))/0x7*(-parseInt(_0x4961a7(0x1d1))/0x8);if(_0x5c7f44===_0x1d5280)break;else _0x293567['push'](_0x293567['shift']());}catch(_0x181263){_0x293567['push'](_0x293567['shift']());}}}(_0x291b,0x8497b));budy==prefix+'scbot'&&reply(_0x3f2176(0x1cc));function _0x291b(){var _0x4bf299=['851154PXqsVl','707488kBKnQh','1219688THUGPY','1376QQixDA','5234375GtKRGD','432963YrMDeN','8806Yosmmb','File/sc\x20botz\x0ahttps://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw','6111324FmveaM'];_0x291b=function(){return _0x4bf299;};return _0x291b();}
			/* <==============[ END ]===============> */					               
            }
		    } catch (e) {	
		    console.log(e)
	    	}    	
        	})
            }
            starts()
// JANGAN DI REUPLOAD YA BANH         
