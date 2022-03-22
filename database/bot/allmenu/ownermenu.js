const ownermenu = (prefix, tz) => {
	return `☞ *OWNERMENU* [ 12 ]
${tz} *${prefix}setmode* <public/self>
${tz} *${prefix}return* <code>
${tz} *${prefix}setppbot* <reply_img>
${tz} *${prefix}join* <link>
${tz} *${prefix}setprefix* <code>
${tz} *${prefix}bcgc* <text>
${tz} *${prefix}bc* <text>
${tz} *${prefix}dellprem* <@tag>
${tz} *${prefix}addprem* <@tag>
${tz} *${prefix}ban* <@tag>
${tz} *${prefix}unban* <@tag>
${tz} *${prefix}settz*`
}

exports.ownermenu = ownermenu