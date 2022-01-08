/*
    Global Variables
*/

var links = window.links;
var tags = window.tags;
var activeTags = [];

var linksElement = document.querySelector("#links");
var tagsElement = document.querySelector("#tags");
var activeTagsElement = document.querySelector("#active-tags");
var searchQuery = "";
var sortType = 3;

/*
    Templates
*/
const templates = {
  link: function (ll) {
    return `
      <a class="link" href="${ll.href}" target="blank"
          data-tags="${ll.tags.join(',')}" title="${ll.title}" >
        ${_cfl(ll.title)} - ${ll.href.replace('https://','').replace('www.','').replace(/\/$/,'')}
      </a>
      `
  },
  tag: function(tt) {
    const href = tt;
    return `<button class="tag ${activeTags.indexOf(tt) != -1 ? "active" : ""}" data-href="${href}" tabindex="0">${tt}</button>`
  }
}

/*
    Render functions
*/
function renderLinks () {
  lll = activeTags.length ? filterLinks(activeTags) : links;
  lll = searchQuery ? searchLinks(lll, searchQuery) : lll;
  lll = sortLinks(sortType, lll);
  var linkCount = lll.length == 1 ? "one lonely link":`${lll.length} links`;
  var tagsParagraph = activeTags.length ? " - " + activeTags.join(" and ") : "";
  var searchParagraph = searchQuery ?
      (!tagsParagraph ? " - ": " and ")
      + "\"" + searchQuery + "\""
      : "";

  activeTagsElement.innerHTML = linkCount + tagsParagraph + searchParagraph;
  var allLinks = "";
  linksElement.innerHTML = "";
  lll.forEach((link, i) => {
    allLinks += templates.link(link)
  });
  linksElement.innerHTML = allLinks
}

function renderTags (filter) {
  ttt = filter ? filterTags(filter) : tags;
  tagsElement.innerHTML = "";
  ttt.forEach((tag, i) => {
    tagsElement.innerHTML += templates.tag(tag)
  });
}

/*
    Filter and sorting functions
*/

function filterLinks (filters) {
  return links.filter(ll => {
    var isMatched = true;
    for(var i = 0; i < filters.length; i++){
      if( ll.tags.indexOf(filters[i]) < 0 ) {
        isMatched = false;
      }
    }
    return isMatched
  })
}

//this one isn't really used
function filterTags (filter) {
  return tags.filter(tt => {
    return tt.includes(filter)
  })
}

function searchLinks (links, searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  return links.filter(ll => {
    if (ll.title.toLowerCase().includes(searchTerm) || ll.href.toLowerCase().includes(searchTerm)) return true
    for(var i = 0; i < ll.tags.length; i++){
      if(ll.tags[i].includes(searchTerm)) return true
    }
    return false
  })
}

function sortLinks (sort, lll) {
  var href = function(h){ return h.replace('https://','').replace('www.','').replace(/\/$/,'') }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  sort = parseInt(sort)
  switch (sort) {
    case 3:
      return lll;
      break;
    case 4:
      return [...lll].reverse();
      break;
    case 1:
      return [...lll].sort((a,b) => {return a.title[0] > b.title[0] ? 1 : -1});
      break;
    case 2:
      return [...lll].sort((a,b) => {return a.title[0] > b.title[0] ? 1 : -1}).reverse();
      break;
    case 5:
      var llll = [...lll];
      shuffleArray(llll);
      return llll;
      break;
    default:
      return lll;
  }
}

function _cfl(string) { return string.charAt(0).toUpperCase() + string.slice(1); }

/*
    Event listeners
*/
var searchInput = document.querySelector("#search");
searchInput.addEventListener('input', function(e){
  searchQuery = e.target.value;
  renderLinks();
})

var sortInput = document.querySelector("#sort-by");
sortInput.addEventListener("input", function(e){
  sortType = e.target.value;
  renderLinks();
})

document.body.addEventListener('click', function(e){
    if(e.target.classList.contains('tag')){
      tagClickHandler(e);
    }
})

function tagClickHandler(e) {
  var tag = e.target.innerText;
  var index = activeTags.indexOf(tag);
  if(index < 0){
    activeTags.push(tag)
    e.target.classList.add("active")
  } else {
    activeTags.splice(index,1);
    e.target.classList.remove("active")
  }
  renderLinks();
}

/*
  Init
*/
renderLinks();
renderTags();
