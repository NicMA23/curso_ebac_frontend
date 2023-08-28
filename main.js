$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault()

        const addTask = $('#input').val()

        const newItem = $(`<li class="task">${addTask}</li>`)

        $(newItem).appendTo('ul')

        $('#input').val('')
    })

    $('ul').on('click', '.task', function () {
        $(this).toggleClass('completed');
    });

})

