const navItems = document.getElementsByClassName('nav-item')
Array.from(navItems).map((item)=>{
  item.addEventListener('click',()=>{
    document.querySelector('.navbar-toggler').classList.add('collapsed')
    document.querySelector('.navbar-collapse').classList.remove('show')
  })})
