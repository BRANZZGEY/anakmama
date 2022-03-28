let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Axis:* [6289512545999]
┣➥ *Dana:* [6289512545999]
┣➥ *Gopay:* [6289512545999]
┣➥ *Ovo:* [6289512545999]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6289512545999*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
