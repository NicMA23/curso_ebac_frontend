$(document).ready(function () {

    /* Mask */

    $('#cpf').mask('000.000.000-00')

    $('#tel').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')

    /* Validate */

    $.validator.addMethod('nomeCompleto', function () {
        const name = $('#full-name').val()
        const nameArray = name.trim().split(' ')
        return nameArray.length >= 2
    })

    $.validator.addMethod('endereçoCompleto', function () {
        const endereço = $('#endereço').val()
        const endereçoArray = endereço.trim().split(' ')
        const tamanho = endereçoArray.length

        const ultimoElemento = parseInt(endereçoArray[tamanho - 1])
        const primeiroElemento = parseInt(endereçoArray[0])
        return !isNaN(ultimoElemento) && tamanho >= 2 && isNaN(primeiroElemento)
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                nomeCompleto: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                minlength: 15
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereço: {
                required: true,
                endereçoCompleto: true
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            endereço: 'Digite o endereço',
            nome: 'Digite seu nome completo',
            cep: {
                required: 'Campo obrigatório',
                minlength: '8 digitos (min.)'
            },
            tel: {
                required: 'Campo obrigatório',
                minlength: '11 digitos (min.)'
            },
            cpf: {
                required: 'Campo obrigatório',
                minlength: '11 digitos (min.)'
            }
        },
        submitHandler: function (form) {
            $('form input').val('')
            $('#Submit-message').show()
        },
        invalidHandler: function (evento, validador) {
            $('#Submit-message').hide()
        }
    })
})