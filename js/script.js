const colocarSenha = document.getElementById('mostrar');
const suaSenha = document.getElementById('password');
const mostrarSenha = document.getElementById('icon');

mostrarSenha.addEventListener('click', function () {
    colocarSenha.classList.toggle('visible');

    if(colocarSenha.classList.contains('visible')){
        mostrarSenha.src='./assets/eye-slash-fill.svg';
        suaSenha.type='text';
    }
    else {
        mostrarSenha.src='./assets/eye-fill.svg';
        suaSenha.type='password';
    }
})