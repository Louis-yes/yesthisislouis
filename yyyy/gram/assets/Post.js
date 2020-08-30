function post (file) {
  function slide (i, ii, iii) {
    return `
      <div class="slide image">
        <span class="db absolute top-1 left-1 em f7 white">${ii+1} / ${iii.length}</span>
        <img src="${i.src.replace('\.\/', '')}" alt="${i.alt}" title="${i.title}">
      </div>
    `
  }

  return `
    <div class="post">
      <div class="images slides">
          ${file.images.map(slide).join('')}
      </div>
      <div class="body w-100 mw5 center">
        <h1 class="f4">${file.title.replace(/\_/g, ' ')}</h1>
        <p class="content">${file.content}</p>
        <p class="date i">${file.date.split('-').reverse().join('.')}</p>
      </div>
    </div>
  `
}

export default post
