/*
  Louis gram page
  TODO
  - frontend
  - rewrite front-end js to be a little cleaner
  - add some info to page, add some ｡･:*:･ﾟ★,｡･:*:･ﾟ☆ d e s i g n ｡･:*:･ﾟ★,｡･:*:･ﾟ☆

  - backend
  - pre render page
  - write build script that copies to main website and deploys for updates
  - write generator for subdirectories and include in build script
  - create basic cachebusting
*/

import post from "./Post.js"

// get files
document.addEventListener("DOMContentLoaded", function(){
    getSites();
});

function getSites() {
    fetch('./files/index.json')
    .then(response => response.json())
    .then(data => {
        var app_content = document.getElementById('thegoods');
        data.map((file) => {
          app_content.insertAdjacentHTML('beforeend', post(file))
        })
    })
    .catch(error => console.error(error))
}
