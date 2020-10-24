const motd2html = require('./motd2html');

let motd = "§f§lMoti§a§lKaverit §8§l» §7Sinulla §7on §7kaveripyyntö §7pelaajalta: §9§9ElkkuYT§7§r"

console.log(motd2html.toHtml(motd))