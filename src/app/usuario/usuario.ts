export class Usuario {

    constructor(
        private _nome: string,
        private _funcao: string,
        private _empresa: string,
        private _embarque: string,
        private _desembarque: string,
        private _embarcado: boolean = false) {}

    get nome() {
        return this._nome;
    }

    get funcao() {
        return this._funcao;
    }

    get empresa() {
        return this._empresa;
    }

    get embarque() {
        return this._embarque;
    }

    get desembarque() {
        return this._desembarque;
    }

    get isEmbarcado() {
        return this._embarcado;
    }
}
