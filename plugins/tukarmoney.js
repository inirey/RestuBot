let handler = async (m, { conn, text }) => {
  try {
    if(text.length == 0) return m.reply("Angkanya mana?")
    let user = global.DATABASE.data.users[m.sender]
    let uang = user.money
    let exp = user.exp
    let before = [uang, exp]
    let n = Number(text)
    if(isNaN(n)) return m.reply("Kamu hanya dapat memasukkan angka!")
    if(uang < n) return m.reply("Uangmu tidak cukup!")
    if(n <= 0) return m.reply("Dah lah males")
    uang -= n
    exp += n + 2
    global.DATABASE.data.users[m.sender].money = uang
    global.DATABASE.data.users[m.sender].exp = exp

    m.reply(`Sukses menukar ${n} money dengan ${n + 2} exp\n\nUang (Sebelum): ${before[0]}\nExp (Sebelum): ${before[1]}\n\nUang (Sesudah): ${uang}\nExp (Sesudah): ${exp}`)
  } catch(err) {
    return m.reply(`Yahh error\n\n${err.stack}`)
  }
}
handler.help = ['tukaruang <jmlh>']
handler.tags = ['tools']
handler.command = /^(tukaruang)/i
handler.exp = 5

module.exports = handler
