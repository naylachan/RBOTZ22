const groupmenu = (prefix, tz) => {
	return `☞ *GROUPMENU* [ 24 ]
${tz} *${prefix}tagall* 
${tz} *${prefix}tagall2*
${tz} *${prefix}tagall3* 
${tz} *${prefix}tagall4* 
${tz} *${prefix}tagall5* 
${tz} *${prefix}hidetag* <text>
${tz} *${prefix}leave* 
${tz} *${prefix}delete* <reply>
${tz} *${prefix}sms* <text>
${tz} *${prefix}kickrandom*
${tz} *${prefix}tagtime* <text>|<time>
${tz} *${prefix}linkgrub* 
${tz} *${prefix}listadmin* 
${tz} *${prefix}setdesc* <text>
${tz} *${prefix}setname* <text>
${tz} *${prefix}group* <buka/tutup>
${tz} *${prefix}listonline* 
${tz} *${prefix}add* <62xxx>
${tz} *${prefix}kick* <@tag>
${tz} *${prefix}antivirtex* <on/off>
${tz} *${prefix}antilink* <on/off>
${tz} *${prefix}antitag* <on/off>
${tz} *${prefix}antitoxic* <on/off>
${tz} *${prefix}welcome* <on/off>`
}

exports.groupmenu = groupmenu