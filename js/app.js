/*
 * Crie uma lista que contenha todos os seus cartões
 */

/*
 * Exibir os cartões na página
 * - embaralhe a lista de cartões usando o método "shuffle" fornecido abaixo
 * - percorra cada cartão e crie seu HTML
 * - adicione o HTML de cada cartão à página
 */

// Função aleatória http://stackoverflow.com/a/2450976

let jogadas = 0;
let carta = $('.card');
let cartas = [...carta];
let cartasAbertas = [];
let pares = 0;
let deck = $('.deck');

//embaralhar cartas
function embaralharCartas(){
    cartas = shuffle(cartas);
    for(var i=0; i<cartas.length; i++) {
        $(".deck").innerHTML = "";
        [].forEach.call(cartas, function(item) {
            $(".deck").append(item);
        });
    }
}
embaralharCartas();

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//mostrar as cartas após um clique e aumenta o numero de jogadas
carta.click(function(evt){
    $(evt.target).toggleClass('open show disabled');
    cartasAbertas.push($(evt.target));
    aumentarJogadas();
    removerEstrela();

    if (cartasAbertas.length === 2){
        testarComb();
    }
    console.log(cartasAbertas);
    
    
});
//função aumenta o numero de jogadas
function aumentarJogadas(){
    jogadas++;
    let vezjogadas = $('.moves');
    vezjogadas.text(jogadas);
}
//função para remover estrelas
function removerEstrela(){
    let estrelas = $('.fa-star');
    if(jogadas === 20 || jogadas === 26 || jogadas === 32 || jogadas === 38){
        $(estrelas[estrelas.length-1]).toggleClass('fa-star fa-star-o');
    }
}
//restart de jogo
$('.fa-repeat').click(function(){
    location.reload();
});
//
function obterImagemCarta(carta){
    return carta[0].firstChild.nextSibling.classList[1];
}
//testar combinação das cartas
function testarComb(){
    if (cartasAbertas.length === 2){
        let carta1 = obterImagemCarta(cartasAbertas[0]);
        let carta2 = obterImagemCarta(cartasAbertas[1]);

        if (carta1 === carta2){
            combCorreta();        
        } else {
            combErrada();
        }
    }
}  
//se cartas forem iguais atribuir classe 'match disable'
function combCorreta(){
    for(let i=0; i<cartasAbertas.length; i++) {
        cartasAbertas[i].addClass('match disabled');
    }
    cartasAbertas = [];
    pares++;
}
//se cartas forem erradas retirar classes 'open show'
function combErrada(){
    for(let i=0; i<cartasAbertas.length; i++){
        cartasAbertas[i].toggleClass('erro');
    }
    setTimeout(function(){
        for(let i=0; i<cartasAbertas.length; i++){
            cartasAbertas[i].toggleClass('open show erro disabled');
        }
        cartasAbertas = [];
    }, 1000); 
        
}



/*
 * Configure o ouvinte de eventos para um cartão. Se um cartão for clicado:
 * - exibe o símbolo do cartão (coloque esta funcionalidade em outra função que você chama deste)
 * - adicione o cartão a uma * lista * de cartões "abertos" (coloque esta funcionalidade em outra função que você chama desta)
 * - se a lista já tiver outro cartão, verifique se os dois cartões correspondem
 * + se os cartões coincidirem, bloqueie os cartões na posição aberta (coloque esta funcionalidade em outra função que você chama desta)
 * + se os cartões não coincidirem, remova os cartões da lista e oculte o símbolo do cartão (coloque esta funcionalidade em outra função que você chama deste)
 * + incrementa o contador de movimentos e exibe-o na página (coloca essa funcionalidade em outra função que você chama desta)
 * + se todos os cartões tiverem correspondido, exibir uma mensagem com a pontuação final (colocar essa funcionalidade em outra função que você chama a partir desta)
 */
