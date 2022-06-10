document.querySelector('#logar').addEventListener('click', (e) => {
    e.preventDefault();
    entrar()

})

function entrar() {

    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');
    
    //vetor vazio
    let listaUser = [];

    //crio um objeto de objetos 
    let usuarioValido = {
        login: '',
        senha: ''
    }

    //recebendo o vetor de objetos
    listaUser = JSON.parse(localStorage.getItem('usuarios'));

    //vai varrer todos os itens
    listaUser.forEach(elemento=>{
        //capturar o usuario
        if (usuario.value === elemento.login && senha.value === elemento.senha){
            usuarioValido = {
                id: elemento.id,
                login: elemento.login,
                senha: elemento.senha
            }
        }
    })

    if(usuario.value === usuarioValido.login && senha.value === usuarioValido.senha){
        alert('certoo')
        saveSession(usuarioValido.id);
        window.location.href ='recados.html';
    }else{
        alert('erradoo')
    }
    console.log(usuarioValido);
}


function saveSession(data){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logado", JSON.stringify(data));
}









