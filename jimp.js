const jimp = require('jimp')

async function main(){

let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
let mask = await jimp.read("mascara.png")
let fundo = await jimp.read("fundo.png")


jimp.read('https://sm.ign.com/ign_br/news/a/avatar-the/avatar-the-last-airbender-is-getting-expansion-novels_sma8.jpg').then(avatar => {
    // Do stuff with the image.

avatar.resize(130, 130)
mask.resize(130, 130)
avatar.mask(mask)
fundo.print(fonte, 170, 175, 'MAEL')
fundo.composite(avatar,40, 90).write('beta.png')

  })
  .catch(err => {
    // Handle an exception.
    console.log('erro ao carregar a imagem')
  });


}
main()