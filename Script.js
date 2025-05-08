function Logar(){
    var Senha = document.getElementById("senha").value;
    var Email = document.getElementById("email").value;
    if( Senha == "admin" && Email == "admin"){
        alert("Sucesso");
        location.href="Streaming-home/Home.html";
    }
    else {
        alert("Senha ou Email incorretos");
    };
}