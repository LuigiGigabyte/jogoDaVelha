var escolha = 0;
var X = ['0','0','0','0','0','0','0','0','0'];
var O = ['0','0','0','0','0','0','0','0','0'];
var velha = 0;
function random(){
    escolha = Math.random();
    if( Math.round(escolha) == 0)
        escolha = "xis";
    else   
        escolha = "bola";
    jogador();
}
function jogador(){
    if(escolha == "xis"){
        document.getElementById("jogador").innerHTML="X";
    }
    else{
        document.getElementById("jogador").innerHTML="O";
    }
}
window.onload = random();
function um() {
    if(X[0] == 0 && O[0] == 0){
        if (escolha == "xis") {
            X[0] = 1;
            escolha = "bola";
            document.getElementById("cover1").src="img/x.svg"
        } else {
            O[0] = 1;
            escolha = "xis";
            document.getElementById("cover1").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function dois() {
    if(X[1] == 0 && O[1] == 0){
        if (escolha == "xis") {
            X[1] = 1;
            escolha = "bola";
            document.getElementById("cover2").src="img/x.svg"
        } else {
            O[1] = 1;
            escolha = "xis";
            document.getElementById("cover2").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function tres() {
    if(X[2] == 0 && O[2] == 0){
        if (escolha == "xis") {
            X[2] = 1;
            document.getElementById("cover3").src="img/x.svg"
            escolha = "bola";
        } else {
            O[2] = 1;
            escolha = "xis";
            document.getElementById("cover3").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function quatro() {
    if(X[3] == 0 && O[3] == 0){
        if (escolha == "xis") {
            X[3] = 1;
            escolha = "bola";
            document.getElementById("cover4").src="img/x.svg"
        } else {
            O[3] = 1;
            escolha = "xis";
            document.getElementById("cover4").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function cinco() {
    if(X[4] == 0 && O[4] == 0){
        if (escolha == "xis") {
            X[4] = 1;
            document.getElementById("cover5").src="img/x.svg"
            escolha = "bola";
        } else {
            O[4] = 1;
            escolha = "xis";
            document.getElementById("cover5").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function seis() {
    if(X[5] == 0 && O[5] == 0){
        if (escolha == "xis") {
            X[5] = 1;
            document.getElementById("cover6").src="img/x.svg"
            escolha = "bola";
        } else {
            O[5] = 1;
            escolha = "xis";
            document.getElementById("cover6").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function sete() {
    if(X[6] == 0 && O[6] == 0){
        if (escolha == "xis") {
            X[6] = 1;
            document.getElementById("cover7").src="img/x.svg"
            escolha = "bola";
        } else {
            O[6] = 1;
            escolha = "xis";
            document.getElementById("cover7").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function oito() {
    if(X[7] == 0 && O[7] == 0){
        if (escolha == "xis") {
            X[7] = 1;
            document.getElementById("cover8").src="img/x.svg"
            escolha = "bola";
        } else {
            O[7] = 1;
            escolha = "xis";
            document.getElementById("cover8").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};

function nove() {
    if(X[8] == 0 && O[8] == 0){
        if (escolha == "xis") {
            X[8] = 1;
            document.getElementById("cover9").src="img/x.svg"
            escolha = "bola";
        } else {
            O[8] = 1;
            escolha = "xis";
            document.getElementById("cover9").src="img/o.svg"
        }
        velha++;
        ganhou();
        jogador();
    }
};
function x(){
    document.getElementById("mensagem").innerHTML="Parabéns! jogador com o X ganhou!!!"
    setTimeout(()=>{
        window.location.reload(true);
    }, 1000);
};
function o(){
    document.getElementById("mensagem").innerHTML="Parabéns! jogador com a O ganhou!!!"
    setTimeout(()=>{
        window.location.reload(true);
    }, 1000);
}
function ganhou(){
    if ((X[0] == 1 && X[1] == 1 && X[2] == 1) || (X[3] == 1 && X[4] == 1 && X[5] == 1) 
    || (X[6] == 1 && X[7] == 1 && X[8] == 1) || (X[6] == 1 && X[7] == 1 && X[8] == 1)
    || (X[0] == 1 && X[3] == 1 && X[6] == 1) || (X[1] == 1 && X[4] == 1 && X[7] == 1)
    || (X[2] == 1 && X[5] == 1 && X[8] == 1) || (X[0] == 1 && X[4] == 1 && X[8] == 1)
    || (X[2] == 1 && X[4] == 1 && X[6] == 1)){
        x();
        velha = 0;
    }
    if ((O[0] == 1 && O[1] == 1 && O[2] == 1) || (O[3] == 1 && O[4] == 1 && O[5] == 1)
    || (O[6] == 1 && O[7] == 1 && O[8] == 1) || (O[0] == 1 && O[3] == 1 && O[6] == 1)
    || (O[1] == 1 && O[4] == 1 && O[7] == 1) || (O[2] == 1 && O[5] == 1 && O[8] == 1)
    || (O[0] == 1 && O[4] == 1 && O[8] == 1) || (O[2] == 1 && O[4] == 1 && O[6] == 1)){
        o();
        velha = 0;
    }
    if(velha == 9){
        document.getElementById("mensagem").innerHTML="iiihh deu velha!!!";
        setTimeout(()=>{
            window.location.reload(true);
        }, 1000);
    }
};