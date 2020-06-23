const fs = require("fs")
const chalk = require("chalk")
/**
  Component links are in the format
  $~filename.ext
  Which is treated as a link relative to the /components/ folder.
  Other link type to be implemented later, eg maybe posts,
**/



// Gets all component links from a file
// data: string
// returns: string array
function listOfComponentLinks(data) {
  const componentPattern = /\$\~\S+/g
  list = data.match(componentPattern)
  return list
}


// Returns an object with {pattern: component-pattern, content: component-content}
// accepts component reg expression
function componentObj(reg){
  let pathname = `./components/${reg.split('~')[1]}`
  let content = fs.readFileSync(pathname, {encoding:'utf8'})
  return { pattern: reg, content: content}
}


//   loads all links found in passed in file (path) then callsback...
//...with the original text and a list of components
function setup(path, cb){
  var indexOrig = fs.readFileSync(path, 'utf-8')
  var componentLinks = listOfComponentLinks(indexOrig)
  var components = componentLinks.map(cl => componentObj(cl))

  cb(indexOrig, components);
}

// called with a source file to transform and a list of components
// Loops through source and swaps out each component, then writes file...
// ...to index.html
function build(source, components){
  var newIndex = source

  components.forEach((c, i) => {
    newIndex = newIndex.replace(c.pattern, c.content);
  });

  fs.writeFile("index.html", newIndex, function(){
    console.log(chalk.green(rebuildMessage))
  })
}

// starts the build
function createMeaningFromRags(path){
  console.log(chalk.blue('building site'))
  setup(path, build)
}
var rebuildMessage = "~~~> we did it <~~~"
createMeaningFromRags("home.html")
