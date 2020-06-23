const fs = require('fs')
const chalk = require('chalk')
const yaml = require('yaml')
const oop = require('object-path')

const postPattern = /y\~[\w+.\[\d\]]+/g

let linkBuffer = {}
let posts = fs.readdirSync("./posts/").filter(p => p.includes('html'))

console.log(chalk.blue('building content'))

posts.forEach((post, i) => {
  postData = fs.readFileSync(`./posts/${post}`, 'utf8')
  let pattern = postPattern
  let linklist = postData.match(pattern) || []
  let linkObjects = linklist.map(l => linkObj(l))
  buildPost(post, postData, linkObjects)
});


function buildPost(sourceName, source, components){
  var newPost = source

  components.forEach((c, i) => {
    newPost = newPost.replace(c.pattern, c.content);
  });

  fs.writeFile(`./components/${sourceName}`, newPost, function(){
  })
}

// Returns an object with {pattern: component-pattern, content: component-content}
// accepts component reg expression
function linkObj(reg){
  let name = reg.split('\~')[1].split('.')[0]
  let pathname = `./posts/${name}.yaml`
  let property = reg.split(`${name}.`)[1]
  let content = {}
  if(!linkBuffer[name]){
    let contentText = fs.readFileSync(pathname, 'utf8')
    content = yaml.parse(contentText)
    linkBuffer[name] = { name: name, content: content }
  } else {
    content = linkBuffer[name].content
  }

  return { pattern: reg, content: oop.get(content, property)}
}

// load content
// look for links, create list (group subgroups)
// load info
// swap out, save in components file
// next
