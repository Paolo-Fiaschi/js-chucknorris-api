<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuck Norris</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script src="main.js"></script>
</head>
<body>   

    <!--

    url: https://api.chucknorris.io/

Scaricare la lista delle categorie dalle api e mostrarle all’interno di una select.

Fare un bottone che al click richiama le api per ottenere un ‘chuck joke’ in 
base alla categoria selezionata

Aggiungere a un contenitore il joke ottenuto mostrando l’icona e 
la frase (usiamo HandleBars...)

Fare un text input che ricerca un joke in base al testo inserito, 
e se ne trova almeno uno, aggiunge il primo trovato al contenitore

    -->

    <select class="lista-categorie"></select>

    <button class="scarica-joke">Recupera categoria</button>

    <input class='mio-text' type="text" value=''>

    <div class="contenitore-jokes"></div>

    <script id="joke-template" type="text/x-handlebars-template">
        <div class="entry">
            <img src="{{avatar}}" alt="" srcset="">
            <h1>{{joke}}</h1>
            <span>{{data}}</span>
        </div>
    </script>
    
</body>
</html>