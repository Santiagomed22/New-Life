const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*=============== MOSTRAR MENU ===============*/
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
} )  
/*=============== OCULTAR MENU ===============*/
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
} )

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')


/*=============== MOSTRAR SEARCH ===============*/
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/*=============== OCUTAR SEARCH ===============*/
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
/* const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close') */

/* Login show */
/* loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
}) */

/* Login hidden */
/* loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
}) */