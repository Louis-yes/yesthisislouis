const { marked } = require("marked")
const fs = require("fs");

const mds = fs.readdirSync('.').filter(ff => ff.includes(".md"));
mds.forEach(ff => {
    if(ff === "index.md"){
        makeindex();
    }
    else {
        let file = fs.readFileSync(ff, 'utf8');
        let grass = fs.readFileSync('grass.html', 'utf8');
        makePage(ff.replace(".md",""), file, grass);
    }
})

function makeindex(){
    const file = fs.readFileSync('index.md', 'utf8');
    const yard = fs.readFileSync('yard.html', 'utf8');
    makePage("index", file, yard);
}

function makePage(filename, markdown, template){
    const data = structuredFile(markdown)
    const html = marked.parse(data.md);
    let newFile = template.replace("{{body}}", html);

    if(data.fm){
        data.fm.forEach(pp => {
            newFile = newFile.replace(new RegExp(`\{\{${pp.match}\}\}`,'g'), pp.content)
        })
    }

    fs.writeFileSync(filename + ".html", newFile);
}

function structuredFile(md){
    const fmrx = /^---\n(.+\:.+\n)+---/gm
    const frontmatter = fmrx.exec(md)
    let fm, nmd;

    if(frontmatter){
        fm = frontmatter[0]
        .replace(/---/g,'')
        .trim()
        .split('\n').map(ff => {
            let f = ff.split(":")
            return {match:f[0], content: f[1].trim()}
        });
    }
    nmd = md.replace(fmrx, '').trim()

    return { fm: fm, md: nmd }
}


