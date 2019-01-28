class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
    } 

  adiciona(event) {

    event.preventDefault();

    let data = new Date(...//spread operator
        this._inputData.value
        .split('-')
        .map(function(item, indice) { // map function
            return item - indice % 2; // 1 mod 2 = 1 ai subtrai um numero
        })
    );
    console.log(data);
}
}