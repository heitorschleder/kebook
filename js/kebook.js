var navbar = document.getElementById('navbar-itens')
var links = navbar.getElementsByClassName('nav-link')

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', () => {
        let current = document.getElementsByClassName('active')
        if(current.length){
            current[0].className = current[0].className.replace(' active', '')
        }
        this.className += ' active'
    })
}

// addEventListener = escutando evento "click" pra dispara uma ação de