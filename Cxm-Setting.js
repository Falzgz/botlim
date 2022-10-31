const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
global.youtube = 'https://youtube.com/c/'
global.ig = 'https://www.instagram.com/rifalstore_17'
global.mygc = 'wa.me/6289518022967'
global.myweb = 'https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'
global.linkgrupss = "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'rifalzstore14@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'FALZ THE DARKNESS'
global.botname = 'FALZ THE DARKNESS'
global.footer = 'FALZ THE DARKNESS'
//=================================================//
// Other
global.owner = ['6289518022967','6282113034413','6287732547294','6282114823092','6282180697141','6281267928619','6285767757393','62882002963550','62858781648866','6281333755505','6281375418835','6285780058500','6281381097109','6285814223823','6289521749274','6288296561047','62895418001335','6281219019530','6285727027774','6282180625481']
global.premium = ['6289518022967','6282113034413']
global.packname = 'FALZ THE DARKNESS'
global.ownerr = ['FALZ THE DARKNESSS']
global.author = 'FALZ THE DARKNESS'
global.sessionName = './CyberXyz'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    verif: 'Hai Kakak 👋 Silahkan Verifikasi Terlebih Dahulu Agar Bisa Menggunakan Bot 𝐂𝐘𝐁𝐄𝐑 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊𝐍𝐄𝐒',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = fs.readFileSync("./Database/image/cybermd.jpg")
global.visoka = fs.readFileSync("./Database/video/bijionta.gif")
global.log0 = fs.readFileSync("./Database/image/lol.jpg")
global.menuimg = 'https://i.top4top.io/p_23942dhg00.jpg'
global.ggikal = fs.readFileSync("./Database/video/BiarApa.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
