class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        return [].concat(this._negociacoes); // return a copy of _negociacoes. defense program
    }
}