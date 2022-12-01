// Look, I'm not going to comment this.
// Just ask and I can explain anything

const dont = "dont"
const talk = "talk"
const about = "about"

const fff = [
    hero,
    roundball,
    box,
    stacked,
    snow
]

const podcast = document.querySelector('.podcast')
let canvi = []

podcast.addEventListener("canplay", ()=>{
    if(!document.body.classList.contains("audio-ready")){
        document.body.classList.add("audio-ready")
        animate();
    }
})
podcast.src = "donttalkveryverysmall.mp3"

document.querySelectorAll('.tap').forEach((el,i)  => {
    const w = Math.floor(el.clientWidth / 10);
    const h = Math.floor(el.clientHeight / 16);
    const tt = tapestry(w, h, fff[i],el)
    tt.render()
    canvi.push(tt);
})

window.addEventListener('resize', (e) => {
    debounce(() => {
        canvi = []
        document.querySelectorAll('.tap').forEach((el,i)  => {
            const w = Math.floor(el.clientWidth / 10);
            const h = Math.floor(el.clientHeight / 16);
            const tt = tapestry(w, h, fff[i],el)
            tt.render()
            canvi.push(tt);
        })
    }, 300)()
})

function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}


function animate(){
    requestAnimationFrame(() => {
        canvi.forEach(c => c.render())
        animate()
    })
}
function podcastIsPlaying(){
    return podcast ? !podcast.paused : false
}

function tapestry(w,h,ff,el){
    let i = 0

    function render(){
        el.innerHTML = weave(i)
        i ++    
    }

    function weave(t){
        let tt = ""
        for(let y = 0; y < h; y++){
            for(let x = 0; x < w; x++){
                tt += ff({x,y},{t,w,h})
            }
            tt+= "<br>"
        }
        return tt
    }
    return {render}
}


function stacked(coords, context){
    const {t, w, h} = context
    const {x, y} = coords
    const pal = (dont + talk + about).split("").join(" ")
    let c = "."
    if(podcastIsPlaying()){
        const tt = t * 0.001
        const o = Math.sin(y * Math.sin(tt) * 0.2 + x * 0.04 + tt) * 20
        const i = Math.round(Math.abs(x + y + o)) % pal.length
        c = pal[i]
    }
    return c
}

function box(coords, context){
    const {t, w, h} = context
    const {x, y} = coords


    let c = "."

    if(podcastIsPlaying()){
        let v = rot({x:x-w/2,y:y-h/2}, (t*0.01) % 3.14 )
        let vv = rot({x:x-w/2,y:y-h/2}, ((t*0.01) + .7) % 3.14 )
        c = sdBox(v, {x:6, y:6}) > 0 ? "." : dont[x % dont.length] 
        c = sdBox(v, {x:5, y:5}) > 0 ? c : "."
        c = sdBox(vv, {x:5, y:5}) > 0 ? c : talk[x % talk.length]
        c = sdBox(vv, {x:4, y:4}) > 0 ? c : "."
        c = sdBox(vv, {x:8, y:1}) > 0 ? c : about[x % about.length]

    }
    return c
}

function snow(coords, context){
    const {w, h, t} = context
    const {x, y} = coords
        
    let c = "."
    if(podcastIsPlaying()){
        let dd = [
            snowflake(3,2, 0.01),
            snowflake(4,8, 0.01),
            snowflake(1,9, 0.01),
            snowflake(5,1, 0.009),
            snowflake(8,7, 0.01),
        ]
    
        let ttt = [
            snowflake(1,2, 0.008),
            snowflake(5,5, 0.01),
            snowflake(6,1, 0.009),
            snowflake(7,3, 0.007),
            snowflake(3,6, 0.01),
        ]
        let aa = [
            snowflake(9,2, 0.011),
            snowflake(5,8, 0.009),
            snowflake(1,2, 0.014),
            snowflake(0,5, 0.008),
            snowflake(4,7, 0.01),
        ]
    
        c = checkSnowflakes(dd)  ?  dont[x % dont.length] : c
        c = checkSnowflakes(ttt) ? talk[x % talk.length] : c
        c = checkSnowflakes(aa) ? about[x % about.length] : c
        console.log(w)
    }

    return c

    function getX(off,i){ return Math.floor((Math.sin(t*i+off)/2)*w)+Math.floor(w/2) }
    function getY(off,i){ return Math.floor(t*(i*10)+off) % h }
    function snowflake(xx,yy,i){ return {x: getX(xx,i), y: getY(yy,i)} }
    function checkSnowflakes(ss){ return ss.some(s => x == s.x && y == s.y ) }
}

function hero(coords, context){
    const {w, h, t} = context
    const {x, y} = coords

    let c = "."
    
    if(y == 3 && dont[x - 4]){
        c = dont[x - 4]
    } else if(y == 10 && talk[x - (w-4-talk.length)]){ 
        c = talk[x - (w-4-talk.length)]
    } else if(y == 15 && about[x - 4]){
        c = about[x - 4]
    } else if (podcastIsPlaying()){
        c = www(coords, context)
    }
    
    return c
}

function www(coord, context, cursor, buffer){
    const t = context.t * 0.02
    const x = coord.x
    const y = coord.y
    const {w, h} = context

    const v0 = context.w / 4 + wave(t, y, [0.15, 0.13, 0.37], [10,8,5]) * 0.9;
    const v1 = v0 + wave(t, y, [0.12, 0.14, 0.27], [3,6,5]) * 0.8;
    const v2 = v1 + wave(t, y, [0.089, 0.023, 0.217], [2,4,2]) * 0.3;
    const v3 = v2 + wave(t, y, [0.167, 0.054, 0.147], [4,6,7]) * 0.4;
    const i = x > v3 ? 3
        : x > v2 ? 2
        : x > v1 ? 1
        : x > v0 ? 0
        : 0;

    return x / w > podcast.currentTime / podcast.duration ? talk[i] : dont[i];
}

function dotBorder(coord, context){
    const {x, y} = coord
    const {w, h} = context

    if(x == 0 || x == w-1 || y == 0 || y == h-1){
        return "."
    } else {
        return " "
    }
}

function wave(t, y, seeds, amps) {
    return (
        (Math.sin(t + y * seeds[0]) + 1) * amps[0]
        + (Math.sin(t + y * seeds[1]) + 1) * amps[1]
        + (Math.sin(t + y * seeds[2])) * amps[2]
    )
}

function sdCircle(p, radius) { // vec2, float
	return length(p) - radius
}

function length(a) { return Math.sqrt(a.x * a.x + a.y * a.y) }
function vec2(x, y) { return {x, y} }

function roundball(coord, context){
    const {x,y} = coord
    const {w,h,t} = context
    const r = 10;
    const rr = 8;
    const rrr = 6;

    
    const pos = {
        x:  x-w/2+Math.sin(t*0.02)*4,
        y: (y-h/2+Math.cos(t*0.02)*4)*2
    }
    const poss = {
        x:  x-w/2+Math.cos(t*0.02)*4,
        y: (y-h/2+Math.sin(t*0.02)*4)*2
    }
    
    const posss = {
        x:  x-w/2+Math.cos(t*0.02)*5,
        y: (y-h/2+Math.sin(t*0.02)*4)*2
    }
    
    c = "."
    if(podcastIsPlaying()){
        if (sdCircle(pos, r) < 0) c = dont[x%dont.length];
        if (sdCircle(poss, rr) < 0) c = talk[x%talk.length];    
        if (sdCircle(posss, rrr) < 0) c = about[x%about.length];    
    }
    
    return c
}
function mapRange(x, in_min, in_max, out_min, out_max){
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function rot(a, ang, out) {
	out = out || vec2(0, 0)

	const s = Math.sin(ang)
	const c = Math.cos(ang)

	out.x = a.x * c - a.y * s,
	out.y = a.x * s + a.y * c

	return out
}

function sdBox(p, size) {     // vec2, vec2
	const d = {
		x : Math.abs(p.x) - size.x,
		y : Math.abs(p.y) - size.y,
	}
	d.x = Math.max(d.x, 0)
	d.y = Math.max(d.y, 0)
	return length(d) + Math.min(Math.max(d.x, d.y), 0.0)
}