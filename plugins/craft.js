/*
* THX TO
* Allah SWT
* Ortu
* RESTU
* RIZXYU
*/
let { MessageType } = require('@adiwajshing/baileys')

/*Count price*/
let sword = 9800
let pickaxe = 8927
let armor = 17290
let pancing = 9278

let Esword = 18290
let Epickaxe = 18230
let Earmor = 23847

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.DATABASE.data.users[m.sender]
  global.DATABASE.data.users[m.sender].pickaxe = global.DATABASE.data.users[m.sender].pickaxe || 0
  global.DATABASE.data.users[m.sender].sword = global.DATABASE.data.users[m.sender].sword || 0
  global.DATABASE.data.users[m.sender].pancing = global.DATABASE.data.users[m.sender].pancing || 0

  let caption = `
💠Crafting : 

⛏️pickaxe = ${pickaxe}
🗡️Sword = ${sword}
🎣pancing = ${pancing}

🔮Enchant 

⚒️Pickaxe = ${Epickaxe}
Ketahanan ++
Nambang ++

🗡️Sword = ${Esword}
Ketahanan +++
kelemahan -
Ketajaman ++
Burning fire +

`

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
            if(user.kayu < 10 || user.besi < 5) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : 10 kayu & 5 besi`)
            global.DATABASE.data.users[m.sender].kayu -= 10
            global.DATABASE.data.users[m.sender].besi -= 5
            global.DATABASE.data.users[m.sender].pickaxe += 1
            m.reply("Sukses membuat 1 pickaxe")
            break
          case 'sword':
            if(user.kayu < 10 || user.besi < 5) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan : 10 kayu & 10 besi`)
            global.DATABASE.data.users[m.sender].kayu -= 10
            global.DATABASE.data.users[m.sender].besi -= 10
            global.DATABASE.data.users[m.sender].sword += 1
            m.reply("Sukses membuat 1 sword")
            break
          case 'pancing':
            if(user.kayu < 10 || user.besi < 5) return m.reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan : 10 kayu & 2 besi`)
            global.DATABASE.data.users[m.sender].kayu -= 10
            global.DATABASE.data.users[m.sender].besi -= 2
            global.DATABASE.data.users[m.sender].pancing += 1
            m.reply("Sukses membuat 1 sword")
            break

          default:
            return m.reply(caption)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return m.reply(caption)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
handler.command = /^craft/i

module.exports = handler
