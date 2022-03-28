let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay, Dana:* 6285337509294
• *Telkom:* 6285337509294

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://www.instagram.com/e.erpan1140/

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285337509294', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler