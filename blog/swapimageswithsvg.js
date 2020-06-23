const fs = require("fs")
const chalk = require("chalk")
const potrace = require("potrace");

let index = fs.readFileSync('index.html', 'utf8');

const pattern = /src="\S+"/g
let imgs = index.match(pattern).filter(p => !p.split('.')[1].includes('js'))
imgs.forEach((img, i) => {
  let svg = "";
  let imgpath = img.split("\"")[1];
  let filename = imgpath.split('.')[0] + '.svg'
  if(fs.existsSync(filename)){
    svg = fs.readFileSync(filename)
    index = index.replace(img, `data-${img} src='data:image/svg+xml;utf8,${svg}'`)
  }
})

fs.writeFile("index.html",index,() => console.log(chalk.green('Swapped out images for svg')))
