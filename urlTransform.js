function urlTransform() {
    var url_input = document.getElementById("url_input").value; // copia a url digitada pelo usuário
    var whereToSlice = url_input.indexOf("://") + 3; // determina a partir de onde cortar o endereço, dependendo se ele é http:// ou https://
    var url_noHttp = url_input.slice(whereToSlice); // retira o http:// ou https://
    var whereToSlice = url_noHttp.indexOf("/"); // determina onde termina o nome do servidor e começa o nome do arquivo
    var website = url_noHttp.slice(0, whereToSlice); // copia o nome do servidor
    var articlePage = url_noHttp.slice(whereToSlice); // copia o nome do arquivo
    var website = website.replace(/\./g, "-"); // transforma o nome do servidor para se adequar ao proxy
    var newUrl = "http://".concat(website, ".ez88.periodicos.capes.gov.br", articlePage); // remonta o endereço, adequando ao proxy
    newUrl = newUrl.link(newUrl); // cria o link
    document.getElementById("transformedURL").innerHTML = newUrl; // mostra ao usuário o endereço com o link
}