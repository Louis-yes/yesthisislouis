// Take each image in the components html files that doesn't ahve no-lazy or something on it
// do one pass to make all the images, then one pass to swap em in (y)

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
  if(!fs.existsSync(filename)){
    potrace.trace(imgpath,{optTolerance:1, turdSize: 100, threshold: 210}, function(err, newsvg) {
      if (err) throw err;
      fs.writeFileSync(filename, newsvg);
      console.log(chalk.blue(`written ${i+1} of ${imgs.length}`));
    });
  } else {
    console.log(chalk.green(`${i+1} of ${imgs.length} already exists`));
  }
});
