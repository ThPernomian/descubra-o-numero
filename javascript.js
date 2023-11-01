//declara vetor de escopo global que irá conter os números já apostados
let erros = []

//Gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1

// declara constante com o número de chances
const chances = 6

function apostarNum(){
    let inNumero = document.getElementById("inNumero")
    let numero = Number(inNumero.value)

    // valida o número
    if(numero <= 0 || numero > 100 || isNaN(numero)){
        alert("Informe um número entre 1 e 100")
        inNumero.focus()
        return
    }

    // referencia espaços das saídas de dados
    let outDica = document.getElementById("outDica")
    let outErros = document.getElementById("outErros")
    let outChances = document.getElementById("outChances")

    // se aposta do jogador for igual ao número sorteado
    if(numero == sorteado){
        alert("Parabéns, Você acertou!")
        //Troca o status do botão
        btApostar.diseabled = true
        btJogar.className = "exibe"
        outDica.innerText = "Parabéns!! Número sorteado: " + sorteado;
    }else{
        // se número existe no vetor erros
        if(erros.indexOf(numero) >= 0){
            alert("Você já apostou o número " + numero + ". Tente outro...")
        }else{
            erros.push(numero)// Adiciona número no vetor
            let numErros = erros.length // Obtem o tamanho do vetor
            let numChances = chances - numErros // calcula o número de chances

            // exibe nº de erros, conteúdo do vetor e nº de chances
            outErros.innerText = numErros + "(" + erros.join(", ") + ")"
            outChances.innerText = numChances
            if(numChances == 0){
                alert("As suas chances acabaram...")
                btApostar.disabled = true
                btJogar.className = "exibe"
                outDica.innerText = "Game Over! Número Sorteado: " + sorteado
            }else{
                // usa operador ternário (condicional) para mensagem da dica
                let dica = numero < sorteado ? "maior" : "menor"
                outDica.innerText = "Dica: Tente um número " + dica + " que " + numero
            }
        }
    }
    // Limpa campo de entrada e posiciona cursor neste campo
    inNumero.value = ""
    inNumero.focus()
}

let btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostarNum)

function jogarNovamente(){
    location.reload() // Recarrega a página
}

let btJogar = document.getElementById("btJogar")
btJogar.addEventListener("click", jogarNovamente)


let idades = [12, 15, 17, 14, 15, 10, 11, 2, 5]

let maiores = false

for(let i = 0; i < idades.length; i++){
    if(idades[i] >= 18){
        console.log(idades[i])
        maiores = true
    }
}
    if(!maiores){
        console.log("Não há idades maiores que 18 na lista");
