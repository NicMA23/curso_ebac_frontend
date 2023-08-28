const form = document.getElementById('formulario')
const valorA = document.getElementById('A')
const valorB = document.getElementById('B')
const email = document.getElementById('email')
const assunto = document.getElementById('assunto')
const sucesso = document.querySelector('.correto')
const falha = document.querySelector('.incorreto')
const empate = document.querySelector('.empate')
let valor = false
let validFormA = false
let validFormB = false

/* 
Nas funções de validação dos inputs, mudei o código "conts validacaA = isNaN(A)" 
para "conts validacaoA = /^-?\d+(\.\d+)?$/.test(A)", pois ,anteriormente, era 
possível por letras depois dos números, ex: 99efr4 era um input com retorno "True"
*/

function validaA(A) {
    const validacaoA = /^-?\d+(\.\d+)?$/.test(A)
    return !validacaoA
}

function validaB(B) {
    const validacaoB = /^-?\d+(\.\d+)?$/.test(B)
    return !validacaoB
}


function maiorQue(A, B) {
    if (A > B) {
        return 1
    } else if (B > A) {
        return 2
    } else {
        return 3
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    validFormA = validaA(valorA.value)
    validFormB = validaB(valorB.value)

    if (!validFormA && !validFormB) {

        valor = maiorQue(parseFloat(valorA.value), parseFloat(valorB.value))

        if (valor === 2) {
            sucesso.style.display = 'block'
            falha.style.display = 'none'
            empate.style.display = 'none'
            valorA.value = ''
            valorB.value = ''
            email.value = ''
            assunto.value = ''
        } else if (valor === 1) {
            falha.style.display = 'block'
            sucesso.style.display = 'none'
            empate.style.display = 'none'
        } else {
            empate.style.display = 'block'
            sucesso.style.display = 'none'
            falha.style.display = 'none'
        }

    } else if (validFormA) {
        document.querySelector('.error-p-A').style.display = 'block'
    } else if (validFormB) {
        document.querySelector('.error-p-B').style.display = 'block'
    }

})

form.addEventListener('reset', function (e) {

    falha.style.display = 'none'
    sucesso.style.display = 'none'
    empate.style.display = 'none'
    document.querySelector('.error-p-A').style.display = 'none'
    document.querySelector('.error-p-B').style.display = 'none'
    valorA.value = ''
    valorB.value = ''
    valorA.classList.remove('error')
    valorB.classList.remove('error')
    email.value = ''
    assunto.value = ''
})

valorA.addEventListener('keyup', function (e) {
    validFormA = validaA(e.target.value)

    if (validFormA) {
        valorA.classList.add('error')
        document.querySelector('.error-p-A').style.display = 'block'
    } else {
        valorA.classList.remove('error')
        document.querySelector('.error-p-A').style.display = 'none'
    }

})

valorB.addEventListener('keyup', function (e) {
    validFormB = validaB(e.target.value)

    if (validFormB) {
        valorB.classList.add('error')
        document.querySelector('.error-p-B').style.display = 'block'
    } else {
        valorB.classList.remove('error')
        document.querySelector('.error-p-B').style.display = 'none'
    }

})