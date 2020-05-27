$(document).ready(function() {

    var baseUrl = 'https://api.chucknorris.io/jokes/';

    $.ajax({
        url : baseUrl + 'categories',
        method : 'GET',
        success : function(data) {

            console.log(data);

            for(var i = 0; i < data.length; i++) {

                $('.lista-categorie').append('<option value = "' + data[i] + '">' + data[i] + '</option>');
            }
            
        }
    });

    $('.scarica-joke').click(function() {

        var categoriaSelezionata = $('.lista-categorie').val();

        $.ajax({
            url : baseUrl + 'random',
            method : 'GET',
            data : {
                'category' : categoriaSelezionata
            },
            success : function(data) {

                console.log(data);                   
                
                aggiungiJoke(data);
            }
        });

    });

    $('.mio-text').keyup(function(e) {

        if (e.which == 13) {

            var valoreScritto = $(this).val();

            console.log(valoreScritto);

            $.ajax({
                url : baseUrl + 'search',
                method : 'GET',
                data : {
                    'query' : valoreScritto
                },
                success : function(data) {

                    console.log(data); 
                    
                    if (data.total > 0) {

                        var indice = Math.floor(Math.random() * data.total);

                        var joke = data.result[indice];

                        console.log(joke);

                        aggiungiJoke(joke);                        
                    }
                }
            });                
            
        }
    });

    function aggiungiJoke(joke) {

        var template = Handlebars.compile($('#joke-template').html());

        // execute the compiled template and print the output to the console
        var context = { 
            avatar : joke.icon_url,
            joke : joke.value,
            data : joke.updated_at
        };

        $('.contenitore-jokes').append(template(context));
    }

});