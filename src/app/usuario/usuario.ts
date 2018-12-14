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

    /* set setNome(nome: string) {
        this._nome = nome;
    }

    set setFuncao(funcao: string) {
        this._funcao = funcao;
    }

    set setEmpresa(empresa: string) {
        this._empresa = empresa;
    }

    set setEmbarque(embarque: string) {
        this._embarque = embarque;
    }

    set setDesembarque(desembarque: string) {
        this._desembarque = desembarque;
    }

    set setEmbarcado(embarcado: boolean) {
        this._embarcado = embarcado;
    } */

}
