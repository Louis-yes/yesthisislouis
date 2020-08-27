//select the div that holds all the tags, then select the tags
var tags = document.querySelector('.tags')
var tagsList = tags.getElementsByClassName('tag')

//select the div that holds all the links, then select the links
var links = document.querySelector('.links')
var linksList = links.getElementsByClassName('link')

// loop through tags and convert them to spans, as we don't want them as links anymore
for(var i = 0; i < tagsList.length; i++){
  var ss = document.createElement('span')
  var h = tagsList[i].href.split('/')

  ss.innerHTML = tagsList[i].innerHTML
  ss.className = tagsList[i].className + ' pointer'
  ss.dataset.href = h[h.length-1]
  ss.addEventListener('click', filterByTag)

  tagsList[i].parentNode.replaceChild(ss, tagsList[i])
}

// select the active tags element
var activeTags_el = document.querySelector('#activeTags')
var activeTags = []

// this function accepts a list of links as an argument and updates their visibilty
function updateLinks(ll){
  // reset all
  for(var i = 0; i < ll.length; i++){
      ll[i].style=""
  }
  // loop through active tags and hide any links that include those tags
  for(var u = 0; u < activeTags.length; u++){
    for(var i = 0; i < ll.length; i++){
      if(ll[i].dataset.tags.split(',').indexOf(activeTags[u]) < 0){
        ll[i].style="display: none"
      }
    }
  }
  // update active tags element
  activeTags_el.innerText = activeTags.join(' & ')
}

// click handler for tags
function filterByTag(e){
  var self = e.target
  var cl = self.classList
  if(!cl.contains('active')){
    // this should be done with css but i'm lazy
    cl.add('active','bg-red','white')
    cl.remove('red')
    // add the clicked tag to the activeTags list
    activeTags.push(self.innerText)
  } else {
    // this should be done with css but i'm lazy
    cl.remove('active','bg-red','white')
    cl.add('red')
    // remove the tag from the activeTags list
    var i = activeTags.indexOf(self.innerText)
    if(i >= 0){
      activeTags.splice(i,1)
    }
  }
  // update links
  updateLinks(linksList)
}

console.log("Hi Giles")
