(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+1Jk":function(e,t,n){"use strict";n.r(t);var i=n("hosL"),a=n("FA6U"),s=n.n(a),o=n("TZX0"),r=n("3rap"),p=n("ox/y"),l=n("ArkS"),u=n.n(l);class c extends i.Component{render(e){var t=[];console.log("cc "+e.current);for(var n=1;n<=e.pages;n++)t.push(n);return Object(i.h)("div",{className:"pagination"},t.map(t=>Object(i.h)(p.Link,{class:(e.current==t?u.a.active:u.a.inactive)+" "+u.a.paginationlink,href:"/page/"+t},t)))}}n.d(t,"default",(function(){return h}));class h extends i.Component{render(e){var{pagenumber:t}=e,n=[],a=0,p=6<o.length?6:o.length,l=!!t&&'"'+t+"\" isn't an available page number, we've given you the first page instead";t>=0&&t<=Math.ceil(o.length/6)&&(l=!1,a=6*(t-1),p=(p=6*(t-1)+6)<o.length?p:o.length,console.log("fin:"+p+" start:"+a));for(var u=a;u<p;u++)n.push(o[u]);return console.log(n),Object(i.h)("div",{class:s.a.home},l?Object(i.h)("h4",null,l):"",Object(i.h)("div",{class:"posts"},n.map(e=>Object(i.h)(r.a,{post:e}))),o.length>6?Object(i.h)(c,{pages:Math.ceil(o.length/6),current:t}):"")}}},"3rap":function(e,t,n){"use strict";(function(e){n("ox/y");var i=n("tyZD"),a=n.n(i);t.a=t=>{var{post:n}=t;return e("div",{class:a.a.post},e("div",{class:a.a.postBody},e("p",null,n.body),e("p",{class:a.a.attribution},"from ",e("em",null,n.title)," by ",e("em",null,n.author))),e("div",{class:a.a.images},n.media.map(t=>e("img",{src:"/posts/"+n.url+"/"+t}))))}}).call(this,n("hosL").h)},ArkS:function(e){e.exports={paginationlink:"paginationlink__E2TL9",active:"active__2Dlpt"}},FA6U:function(e){e.exports={home:"home__MseGd"}},TZX0:function(e){e.exports=JSON.parse('[{"body":"reality is not\\nbehind a veil\\nit is a veil\\n","type":"quote","author":"Charles Bernstein","title":"Clouds After Rain","post_number":22,"media":["itisdisguise_1.jpg","itisdisguise_2.jpg","itisdisguise_3.jpg"],"url":"itisdisguise"},{"body":"flush\\nof pinfire now\\nuneven crazing—What\\nI mean is, you are still\\nhappening to me. About that,\\nI feel what\\nI feel, which is not the part I’m telling you.\\n","type":"quote","author":"Mary Szybist","title":"In the Doorway, a Jeweled Feeling","post_number":1,"media":["happeningtome_1.jpg","happeningtome_2.jpg","happeningtome_3.jpg"],"url":"happeningtome"}]')},tyZD:function(e){e.exports={post:"post__10_hF",postBody:"postBody__11cZv",attribution:"attribution__2bNNd",images:"images__2eeLY"}}}]);
//# sourceMappingURL=route-home.chunk.acf4a.esm.js.map