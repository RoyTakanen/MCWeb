
exports.toHtml = function(motd) {
    motd = '<span>' + motd
    motd = motd.replace(/\§0/g, '<span style="color: #000000;">')
    motd = motd.replace(/\§1/g, '<span style="color: #0000AA;">')
    motd = motd.replace(/\§2/g, '<span style="color: #00AA00;">')
    motd = motd.replace(/\§3/g, '<span style="color: #00AAAA;">')
    motd = motd.replace(/\§4/g, '<span style="color: #AA0000;">')
    motd = motd.replace(/\§5/g, '<span style="color: #AA00AA;">')
    motd = motd.replace(/\§6/g, '<span style="color: #FFAA00;">')
    motd = motd.replace(/\§7/g, '<span style="color: #AAAAAA;">')
    motd = motd.replace(/\§8/g, '<span style="color: #555555;">')
    motd = motd.replace(/\§9/g, '<span style="color: #5555FF;">')
    motd = motd.replace(/\§a/g, '<span style="color: #55FF55;">')
    motd = motd.replace(/\§b/g, '<span style="color: #55FFFF;">')
    motd = motd.replace(/\§c/g, '<span style="color: #FF5555;">')
    motd = motd.replace(/\§d/g, '<span style="color: #FF55FF;">')
    motd = motd.replace(/\§e/g, '<span style="color: #FFFF55;">')
    motd = motd.replace(/\§f/g, '<span style="color: #FFFFFF;">')
    motd = motd.replace(/\§g/g, '<span style="color: #DDD605;">')
    motd = motd.replace(/\§k/g, '<span style="color: #AA0000;">')
    motd = motd.replace(/\§l/g, '<span style="font-weight: bold;">')
    motd = motd.replace(/\§m/g, '<span style="text-decoration: line-through;">')
    motd = motd.replace(/\§n/g, '<span style="text-decoration: underline;">')
    motd = motd.replace(/\§o/g, '<span style="font-style: italic;">')
    motd = motd.replace(/\§r/g, '</span>')
    motd = motd + '</span>'
    return motd
}