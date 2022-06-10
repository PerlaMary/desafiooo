//


//let db = [];

document.querySelector('#cadastro').addEventListener('click', (w) => {
    w.preventDefault();

    let email = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if (email === ' ' || senha === '') {
     alert("preenchaaa")
    } else if (email != '' || senha != '') {
    location.href = 'index.html';
    salvar(email, senha);
}

   
});

function salvar(e, s) {
    //crio um objeto
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let usuario = {
        id: db.length + 1,
        login: e,
        senha: s
    }

    //jogo o objeto dentro do vetor
    db.push(usuario);
    //salvo o LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'index.html';


}
