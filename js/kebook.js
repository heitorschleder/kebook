var navbar = document.getElementById('navbar-itens')
var links = Array.from(navbar.querySelectorAll('a'))
var menuToggle = document.getElementById('menu-icon')
var menuItens = document.getElementById('menu-itens')
var closeMenu = document.getElementById('close-menu')
var menuLinks = Array.from(menuItens.querySelectorAll('li'))


links.forEach(navLink => {
    navLink.addEventListener('click', function() {
        let current = document.getElementsByClassName('active')
        if(current.length){
            current[0].className = current[0].className.replace(' active', '')
        }
        this.classList.add('active')
    })
});

menuToggle.addEventListener('click', function() {
    menuItens.classList.toggle('menu-active');
});

closeMenu.addEventListener('click', function() {
    menuItens.classList.toggle('menu-active');
});

menuLinks.forEach(liLinks => {
    liLinks.addEventListener('click', function() {
        menuItens.classList.toggle('menu-active');
    });
})