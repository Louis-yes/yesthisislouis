(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"69YC":function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Yes this is Louis"}}}}')},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),d=a(r("q1tI")),c=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function j(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+d+o+s+r+a+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,n=e.ariaHidden,o=d.default.createElement(C,(0,l.default)({src:t},i,{ariaHidden:n}));return r.length>1?d.default.createElement("picture",null,a(r),o):o},C=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:i},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,x=e.itemProp,w=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+y+"ms":"none"},s),z="boolean"==typeof b?"lightgray":b,_={transitionDelay:y+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&_,{},s,{},f),q={title:t,alt:this.state.isVisible?"":r,style:T,className:p,itemProp:x};if(m){var N=m,V=g(m);return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&_)}),V.base64&&d.default.createElement(P,{ariaHidden:!0,src:V.base64,spreadProps:q,imageVariants:N,generateSources:k}),V.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,src:V.tracedSVG,spreadProps:q,imageVariants:N,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(C,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:r,title:t,loading:w},V,{imageVariants:N}))}}))}if(h){var A=h,F=g(h),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},R&&_)}),F.base64&&d.default.createElement(P,{ariaHidden:!0,src:F.base64,spreadProps:q,imageVariants:A,generateSources:k}),F.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,src:F.tracedSVG,spreadProps:q,imageVariants:A,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(A),d.default.createElement(C,{alt:r,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:r,title:t,loading:w},F,{imageVariants:A}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:I,sizes:z,fixed:c.default.oneOfType([I,c.default.arrayOf(I)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=R;t.default=_},DW2E:function(e,t,r){var a=r("0/R4"),i=r("Z6vF").onFreeze;r("Xtr8")("freeze",(function(e){return function(t){return e&&a(t)?e(i(t)):t}}))},INYr:function(e,t,r){"use strict";var a=r("XKFU"),i=r("CkkT")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(n)},OGtf:function(e,t,r){var a=r("XKFU"),i=r("eeVq"),n=r("vhPU"),o=/"/g,s=function(e,t,r,a){var i=String(n(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},RXBc:function(e,t,r){"use strict";r.r(t);r("f3/d"),r("Vd3H"),r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var a=r("lSNA"),i=r.n(a),n=r("q1tI"),o=r("4qRI"),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=Object(o.a)((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r("qKvR"),c=r("SIPS"),u=r("MiSq"),f=l,p=function(e){return"theme"!==e&&"innerRef"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function e(t,r){var a,i,o;void 0!==r&&(a=r.label,o=r.target,i=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var s=t.__emotion_real===t,l=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var f=i||g(l),p=!f("as");return function(){var m=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&b.push("label:"+a+";"),null==m[0]||void 0===m[0].raw)b.push.apply(b,m);else{0,b.push(m[0][0]);for(var y=m.length,v=1;v<y;v++)b.push(m[v],m[0][v])}var x=Object(d.withEmotionCache)((function(e,t,r){return Object(n.createElement)(d.ThemeContext.Consumer,null,(function(a){var s=p&&e.as||l,d="",m=[],h=e;if(null==e.theme){for(var y in h={},e)h[y]=e[y];h.theme=a}"string"==typeof e.className?d=Object(c.a)(t.registered,m,e.className):null!=e.className&&(d=e.className+" ");var v=Object(u.a)(b.concat(m),t.registered,h);Object(c.b)(t,v,"string"==typeof s);d+=t.key+"-"+v.name,void 0!==o&&(d+=" "+o);var x=p&&void 0===i?g(s):f,S={};for(var w in e)p&&"as"===w||x(w)&&(S[w]=e[w]);return S.className=d,S.ref=r||e.innerRef,Object(n.createElement)(s,S)}))}));return x.displayName=void 0!==a?a:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=l,x.__emotion_styles=b,x.__emotion_forwardProp=i,Object.defineProperty(x,"toString",{value:function(){return"."+o}}),x.withComponent=function(t,a){return e(t,void 0!==a?h({},r||{},{},a):r).apply(void 0,b)},x}},y=r("SObL"),v=r.n(y),x=r("z8+f"),S=r.n(x),w=b("div",{target:"ed6jdyk0"})("font-family:",S.a.fontStack,";font-weight:400;color:",S.a.mainColor,";background:",S.a.bgColor,";"),O=function(e){var t=e.children;return Object(d.jsx)(w,null,Object(d.jsx)(d.Global,{styles:Object(d.css)(v.a)}),t)},k=r("69YC"),j=b("header",{target:"e11v94p0"})({name:"1gvy3ay",styles:"padding-left:60px;padding-right:60px;padding-top:70px;padding-bottom:20px;h1{font-size:16px;line-height:16px;}"}),L=function(){var e=k.data.site;return Object(d.jsx)(j,null,Object(d.jsx)("h1",null,e.siteMetadata.title))},E=r("9eSz"),P=r.n(E),C=b("div",{target:"e1wceb650"})("box-sizing:border-box;display:block;float:none;width:100%;padding:40px;@media screen and (min-width:800px){padding:73px 59px;}margin-bottom:10px;border:1px solid ",S.a.mainColor,";background:#fcf8f1;font-family:",S.a.fontStack,";font-style:normal;font-weight:normal;font-size:16px;line-height:25px;.text{width:100%;max-width:682px;display:block;margin:0 auto;white-space:pre-line;em{font-style:italic;}}.body{margin-bottom:10px;}.title,.author{&:before{content:'- '}}.images{margin-top:20px;}.gatsby-image-wrapper{max-width:550px;height:auto;width:100%;float:left;display:block;margin-bottom:10px;margin-right:10px;&:last-child{margin-right:0;}}&::after{content:\"\";clear:both;display:table;}");var R=function(e){return Object(d.jsx)(C,{className:"post",key:e.post.name},Object(d.jsx)("div",{className:"text"},Object(d.jsx)("p",{className:"body"},e.post.childPostsYaml.body),Object(d.jsx)("p",{className:"title"},"From ",Object(d.jsx)("em",null,e.post.childPostsYaml.title)),Object(d.jsx)("p",{className:"author"},"By ",Object(d.jsx)("em",null,e.post.childPostsYaml.author))),Object(d.jsx)("div",{className:"images"},e.post.childPostsYaml.media.map((function(e){return Object(d.jsx)(P.a,{key:e.path.id,fluid:e.path.childImageSharp.fluid,alt:e.alt})}))))};r.d(t,"query",(function(){return z}));var I=b("div",{target:"e2ikktz0"})({name:"srg5ox",styles:"padding:20px;@media screen and (min-width:800px){padding-left:60px;padding-right:60px;padding-top:30px;padding-bottom:30px;}"}),z=(t.default=function(e){var t=e.data;return Object(d.jsx)(O,null,Object(d.jsx)(L,null),Object(d.jsx)(I,null,t.posts.edges.sort((function(e,t){return e.post_number-t.post_number})).map((function(e){var t=e.node;return Object(d.jsx)(R,{className:"post",post:t,key:t.name})}))))},"3617396943")},SObL:function(e,t,r){"use strict";function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"]);return a=function(){return e},e}r("WLL4"),r("DW2E"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r("qKvR").css)(a());t.default=i},WLL4:function(e,t,r){var a=r("XKFU");a(a.S+a.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},jm62:function(e,t,r){var a=r("XKFU"),i=r("mQtv"),n=r("aCFj"),o=r("EemH"),s=r("8a7r");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,a=n(e),l=o.f,d=i(a),c={},u=0;d.length>u;)void 0!==(r=l(a,t=d[u++]))&&s(c,t,r);return c}})},mQtv:function(e,t,r){var a=r("kJMx"),i=r("JiEa"),n=r("y3w9"),o=r("dyZX").Reflect;e.exports=o&&o.ownKeys||function(e){var t=a.f(n(e)),r=i.f;return r?t.concat(r(e)):t}},"z8+f":function(e,t){e.exports={mainColor:"rgb(40,41,12)",bgColor:"#f0f0f0",fontStack:"Verdana, Helvetica, arial, sans-serif"}}}]);
//# sourceMappingURL=component---src-pages-index-js-df6143a687e1e26bd47a.js.map