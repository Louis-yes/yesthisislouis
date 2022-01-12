const { marked } = require("marked")
const fs = require("fs");

const dir = fs.readdirSync('.').filter(ff => ff.includes(".md"));

const yard = fs.readFileSync('yard.html', 'utf8')
const file = fs.readFileSync('index.md', 'utf8');
const html = marked.parse(file);
const newFile = yard.replace("{{body}}", html)
fs.writeFileSync("index.html", newFile)


