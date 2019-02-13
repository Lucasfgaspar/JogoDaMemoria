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

let listaCard = []; 
let carta = $('.card');
let cartas = [...carta];

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

//mostrar as cartas após um clique
carta.click(function(evt){
    $(evt.target).toggleClass('open show');
});


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
