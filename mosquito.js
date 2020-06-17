//saber tamanh responsivo da tela

let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let criaTempo = 1500

let nivel = window.location.search

nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    criaTempo = 2000
} else if (nivel === 'dificil') {
    //1000
    criaTempo = 1000
} else if (nivel === 'hardcore') {
    //750
    criaTempo = 750
}
//onresize ao redimencionar ele dispara a fumção
function ajustaTamanho() {
    altura = window.innerHeight //window.screen.availHeight
    largura = window.innerWidth //window.screen.availWidth

    console.log(largura, altura)

}

ajustaTamanho()

let cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)

        window.location.href = 'vitoria.html'

    } else {

        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//como o body não existe para nav colocamos  na função o cod

function posicaoRandomica() {
    //remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            //console.log('valor do incremento' + vidas)
            // alert('voce perdeu(game over )')

            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++

        }

    }
    //numeros aleatorios de 0 a 1 
    let px = Math.floor(Math.random() * largura) - 90
    let py = Math.floor(Math.random() * altura) - 90


    if (px < 0) {
        px = 0
    } else {
        px = px
    }


    if (py < 0) {
        py = 0
    } else {
        py = py
    }

    //criar elemento html
    let mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosquito.png'

    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    mosquito.style.left = px + 'px'
    mosquito.style.top = py + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function () {
        this.remove()
    }
    document.body.appendChild(mosquito)



}
//console.log()


//quando o nav le o return ele  sai da função
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    //console.log(classe)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}


function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    //console.log(classe)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}