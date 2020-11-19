/*
  Louis gram page
  TODO
  - frontend
  - load images in reverse chronological order
  - rewrite front-end js to be a little cleaner
  - add some info to page, add some ｡･:*:･ﾟ★,｡･:*:･ﾟ☆ d e s i g n ｡･:*:･ﾟ★,｡･:*:･ﾟ☆

  - backend
  - pre render page
  - write build script that copies to main website and deploys for updates
  - write generator for subdirectories and include in build script
  - create basic cachebusting
*/

import post from "./Post.js"

const SLIDE = {
  init: function(){
    [...document.getElementsByTagName('img')].forEach((item, i) => {
      item.ondragstart = function() { return false; };
    });
  },
  isMousedown:false,
  initPos:  {x: 0, y: 0},
  makeSlider: function(el){
    el.addEventListener('mousedown', function(e){
      this.isMousedown = true;
      el.dataset.scrollLeft = el.scrollLeft;
      this.initPos = {x: e.clientX, y: e.clientY};
    })
    el.addEventListener('mouseup', function(e){
      this.isMousedown = false
    })
    el.addEventListener('mousemove', function(e){
      if(this.isMousedown){
        var maxScrollLeft = el.scrollWidth - el.clientWidth;
        var offset = parseInt(el.dataset.scrollLeft) + this.initPos.x - e.clientX;
        if(offset <= maxScrollLeft){ el.scrollLeft = offset;}
      }
    })
  }
}

// get files
document.addEventListener("DOMContentLoaded", function(){
    getSites();
});

function getSites() {
    fetch('./files/index.json')
    .then(response => response.json())
    .then(data => {
        var app_content = document.getElementById('thegoods');
        data.reverse().map((file) => {
          app_content.insertAdjacentHTML('beforeend', post(file))
        })
        window.setTimeout(function () {
          setUpEvents();
        }, 0);
    })
    .catch(error => console.error(error))
}

function setUpEvents(){
  var sliders = [...document.getElementsByClassName('slides')];
  SLIDE.init();
  sliders.forEach((item, i) => SLIDE.makeSlider(item));
}
