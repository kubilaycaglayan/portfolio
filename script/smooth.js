const smooth = (function() {
  const firstProject = document.getElementsByClassName("project1")[0];

  const getHeight = function getHeight() {
    return parseInt(window.getComputedStyle(firstProject).height);
  };

  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      console.log('aşağıııı', getHeight())
      window.scrollBy({
        top: getHeight(),
        behavior: 'smooth',})
    } else {
      console.log('yukarıııı', -getHeight())
      window.scrollBy({
        top: -getHeight(),
        behavior: 'smooth',})
    }
    lastScrollTop = scrollTop;
  })


}())