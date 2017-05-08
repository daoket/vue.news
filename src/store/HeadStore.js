export default {
  mutations: {
    toggleMenu () {
      var page = document.querySelector('#app .page')
      var aside = document.querySelector('.head .aside')
      var pageClass = page.className
      var asideClass = aside.className
      if (pageClass === 'page') {
        page.className = 'page toggle'
      } else {
        page.className = 'page'
      }
      if (asideClass === 'aside') {
        aside.className = 'aside closeMenu'
      } else {
        aside.className = 'aside'
      }
    },
    openSearch () {
      var searchPage = document.querySelector('.head .searchPage')
      searchPage.style.display = 'block'
    },
    closeSearch () {
      var searchPage = document.querySelector('.head .searchPage')
      searchPage.style.display = 'none'
    }
  }
}
