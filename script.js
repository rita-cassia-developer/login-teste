function saudacao() {
    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const hora = new Date().getHours();
    let saudacao = "";

    if (senha.length < 5) {
    alert("A senha deve ter no mínimo 5 caracteres.");
    return;
}

    if (hora < 12) {
        saudacao = "Bom dia, " + nome + "!";
    } else if (hora < 18) {
        saudacao = "Boa tarde, " + nome + "!";
    } else {
        saudacao = "Boa noite, " + nome + "!";
    }

    document.getElementById('saudacao').innerText = saudacao;
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        saudacao(); 
    });

}
