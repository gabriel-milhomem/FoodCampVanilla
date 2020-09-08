/* VARIAVEIS GLOBAIS */
var confirmar = document.querySelector(".confirmar");
var site = document.querySelector("#interface");
var entradaDados = document.querySelector("#entradaDados");
var iconeFormulario = document.getElementsByClassName("iconeFormulario");
var checkSobremesa = false;
var checkComida = false;
var checkBebida = false;
var ultimoVerdeComida;
var ultimoVerdeSobremesa;
var ultimoVerdeBebida;
var total;

/*
  Entrada: qual "tipo" de secao do produto (comida (0) , bebida (1) , sobremesa (2) ) e "opcao" ( qual produto em si dessa secao )
  O que ela faz: aciona borda, lógica de UMA borda acionada, flags que representam que a secao foi clicado para acionar o botão, seta as variaveis "ultimo"  
*/

function escolha(opcao, tipo){
  var icone = document.getElementsByTagName("ion-icon");
  if (tipo == 0 ) {
    var comidas = document.getElementsByClassName("comidas");
    
    if(checkComida) {
      comidas[ultimoVerdeComida].style.border = "none";
      icone[ultimoVerdeComida].style.display = "none";
    }

    checkComida = true;
    icone[opcao].style.display = "block";

    if(opcao == 0){
      comidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeComida = opcao;
    }

    else if(opcao == 1){
      comidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeComida = opcao;
    }

    else if(opcao == 2){
      comidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeComida = opcao;
    }

    else {
      comidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeComida = opcao;
    }
  }

  else if(tipo == 1) {
    var bebidas = document.getElementsByClassName("bebidas");

    if(checkBebida) {
      bebidas[ultimoVerdeBebida].style.border = "none";
      icone[ultimoVerdeBebida + 4].style.display = "none";
    }

    checkBebida = true;
    icone[opcao + 4].style.display = "block";

    if(opcao == 0){
      bebidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeBebida = opcao;
    }

    else if(opcao == 1){
      bebidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeBebida = opcao;
    }

    else if(opcao == 2){
      bebidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeBebida = opcao;
    }

    else {
      bebidas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeBebida = opcao;
    }
  }

  else {
    var sobremesas = document.getElementsByClassName("sobremesas");

    if(checkSobremesa) {
      sobremesas[ultimoVerdeSobremesa].style.border = "none";
      icone[ultimoVerdeSobremesa + 8].style.display = "none";
    }

    checkSobremesa = true;
    icone[opcao + 8].style.display = "block";

    if(opcao == 0){
      sobremesas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeSobremesa = opcao;
    }

    else if(opcao == 1){;
      sobremesas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeSobremesa = opcao;
    }

    else if(opcao == 2){
      sobremesas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeSobremesa = opcao;
    }

    else {
      sobremesas[opcao].style.border = "5px solid #32B72F";
      ultimoVerdeSobremesa = opcao;
    }
  }

  if(checkSobremesa && checkBebida && checkComida) {
    var botao = document.getElementById("botao");
    botao.style.background = "#32B72F";
    botao.innerHTML = "Fechar Pedido";
  }
}

/* Função para pedir. Dois caminhos if -->  TELA DE CONFIRMAÇÃO else --> Enviar mensagem redirecionando para o link do whatsapp */
function pedir(mensagemWpp) {
  var bebidaString = document.getElementsByTagName("h2")[ultimoVerdeBebida + 5].innerHTML;
  var pratoString = document.getElementsByTagName("h2")[ultimoVerdeComida + 1].innerHTML;
  var sobremesaString = document.getElementsByTagName("h2")[ultimoVerdeSobremesa + 9].innerHTML;
  var precoPrato = document.getElementsByTagName("span")[ultimoVerdeComida].innerHTML;
  var precoSobremesa = document.getElementsByTagName("span")[ultimoVerdeSobremesa + 8].innerHTML;
  var precoBebida = document.getElementsByTagName("span")[ultimoVerdeBebida + 4].innerHTML;
  var seuNome = document.querySelector("#nome").value;
  var seuEndereco = document.querySelector("#endereco").value;
  var precos = [precoPrato, precoBebida, precoSobremesa];
  var nomes = [pratoString, bebidaString, sobremesaString];
  precoPrato = precoPrato.replaceAll("," , ".");
  precoSobremesa = precoSobremesa.replaceAll("," , ".");
  precoBebida = precoBebida.replaceAll(",", ".");
  total = parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa);

  if(!mensagemWpp){
    entradaDados.style.display = "none";
    confirmar.style.display = "flex";
    for(var i = 0; i < 3; i++){
      document.querySelector("#nome" + i).innerText = nomes[i];
      document.querySelector("#preco" + i).innerText = precos[i];
    }
    document.querySelector("#total").innerText = "R$ " + total.toFixed(2).replaceAll(".",",");
  }
  
  else {
    var mensagem = "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\nOlá, gostaria de fazer o *pedido:*\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n*- Prato*: " + pratoString +"\n*- Bebida:* " + bebidaString + "\n*- Sobremesa:* " + sobremesaString + "\n*- Total:* R$ " + total.toFixed(2).replaceAll(".",",")+ "\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n*- Nome:* " + seuNome + "\n*- Endereço:* " + seuEndereco + "\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=";
    mensagem = encodeURIComponent(mensagem);
    window.open("https://api.whatsapp.com/send?phone=5562984224182&text=" + mensagem, "_blank");
    confirmar.style.display = "none";
    site.style.opacity = "1";
  }
}

/* Abrir a tela de "DADOS" */
function dados() {
  if(checkSobremesa && checkBebida && checkComida) {
    site.style.opacity = "0.1";
    entradaDados.style.display = "flex";
  }
}

/* Função da lógica do botão "cancelar" */
function clickCancelar() {
  confirmar.style.display = "none";
  entradaDados.style.display = "none";
  site.style.opacity = "1";
  iconeFormulario[0].style.display = "none";
  iconeFormulario[1].style.display = "none";
}

/* Função para revelar o icone de confirmação no onblur dos inputs */
function iconeAparece(numIcone) {
  if(numIcone == 0){
    iconeFormulario[0].style.display = "block";
  }

  else {
    iconeFormulario[1].style.display = "block";
  }
}

/* Função do icone voltar na tela de confirmação */
function voltarTela() {
  confirmar.style.display = "none";
  entradaDados.style.display = "flex";
}