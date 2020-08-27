const links = require('../plugins/links')()

module.exports = body

function _cfl(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const components = {
  link: function (ll) {
      return `
        <a
          class="link db black hover-bg-red underline"
          href="${ll.href}"
          title="${ll.title}"
          data-tags="${ll.tags.join(',')}">
          ${_cfl(ll.title)} - ${ll.href.replace('https://','').replace('www.','').replace(/\/$/,'')}
        </a>
      `
  },
  tag: function(tt) {
    const href = tt
    return `<a href="${href}" class="
      tag link
      pa2 dib ma2
      ba red b--red
      hover-bg-red hover-white
    ">${tt}</a>`
  }
}

function body () {
  return `
  <body class="pa3">
    <div class="
      tags
      fixed
      top-0 h-50
      top-0-ns left-0-ns bottom-0-ns w-50-ns h-100-ns
      overflow-scroll
      "
    >
      ${links.tags.map(tt => components.tag(tt)).join('')}
    </div>
    <div class="
      links
      fixed pa2
      bottom-0 h-50
      top-0-ns right-0-ns bottom-0-ns h-100-ns w-50-ns
      lh-copy
      overflow-scroll
      "
    >
      <span id="activeTags" class="db red"></span>
      ${links.links.map(ll => {
         return components.link(ll)
      }).join('')}
    </div>
    <script src="./assets/scripts.js"></script>
  </body>
  `
}
