// this goes at the bottom of the page, shit's already loaded baby
document.addEventListener("DOMContentLoaded", function() {
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const lazyImage = entry.target
              lazyImage.src = lazyImage.dataset.src
              lazyImage.classList.remove("lazy");
              imgObserver.unobserve(lazyImage);
          }
      })
  });
  const arr = document.querySelectorAll('img')
  arr.forEach((v) => {
      imageObserver.observe(v);
  })

  document.querySelector('.readtoggle').addEventListener('click', iDoOrDoNotSee);
});


function iDoOrDoNotSee(e){
    e.preventDefault();
    if(!document.body.className.includes('idonotseeit')){
      document.body.classList.add('idonotseeit');
    } else {
      document.body.classList.remove('idonotseeit');
    }
}
