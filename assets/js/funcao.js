var senha = document.querySelector('#senha')
var mostraSenha = document.querySelector('.mostra-senha')
var click = false

mostraSenha.addEventListener('click', function() {
    
    if (click) {
        senha.setAttribute('type', 'password')
        mostraSenha.textContent = 'mostrar senha'
        
      
    } else {
        senha.setAttribute('type', 'text') 
        mostraSenha.textContent = 'ocultar senha'
    }

    click = !click
})