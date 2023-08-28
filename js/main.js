$(document).ready(function () {

    /* Bg-color */

    const bg = $('#bg-color')

    bg.click(function () {
        $('body').toggleClass('switch-light switch-dark')
        $('label.error').toggleClass('white-error')
    })

    /* Reset */

    $('.error').hide()

    /* Mask */

    $('#tel').mask('(00) 00000-0000')

    /* Validate */

    $.validator.addMethod('nomeCompleto', function () {
        const name = $('#name').val()
        const nameArray = name.trim().split(' ')
        return nameArray.length >= 2
    })

    $('form').validate({
        rules: {
            name: {
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
            checkbox: {
                required: true
            },
        },
        messages: {
            name: 'Nome completo',
            tel: {
                required: 'Campo obrigatório',
                minlength: '11 digitos (min.)'
            },
            email: 'Email inválido',
            checkbox: 'Concorde com os termos'
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