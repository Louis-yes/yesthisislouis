const path = require('path')
const fs = require('fs')

const links = fs.readFileSync(path.join(__dirname, '../../yesthisislouis/yyyy/links/links.csv'), 'utf8')

let links_ = links.split("\n").filter(a => a.length).map(ll => {
  const r = /\"(.*?)\"/g
  const mm =  ll.match(r).map(m => m.replace(/\"/g,""))
  return {
    href: mm[0],
    title: mm[1],
    tags: mm[2].split(',').map(m => m.trim())
  }
})

let tags = []
for(let i = 0; i < links_.length; i++){
  for(var u = 0; u < links_[i].tags.length; u++){
    if(tags.indexOf(links_[i].tags[u]) < 0){
      tags.push(links_[i].tags[u])
    }
  }
}

module.exports = store

function store () {
    return {
      tags:tags,
      links:links_
    }
}
