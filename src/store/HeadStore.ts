// 显示隐藏右侧菜单
export default {
  mutations: {
    toggleMenu () {
      const page = document.querySelector('#app .page')
      const aside = document.querySelector('.head .aside')
      const pageClass = page!.className
      const asideClass = aside!.className
      if (pageClass === 'page') {
        page!.className = 'page toggle'
      } else {
        page!.className = 'page'
      }
      if (asideClass === 'aside') {
        aside!.className = 'aside closeMenu'
      } else {
        aside!.className = 'aside'
      }
    },
    openSearch () {
      const searchPage = document.querySelector('.head .searchPage') as HTMLDivElement
      searchPage.style.display = 'block'
    },
    closeSearch () {
      const searchPage = document.querySelector('.head .searchPage') as HTMLDivElement
      searchPage.style.display = 'none'
    }
  }
}
