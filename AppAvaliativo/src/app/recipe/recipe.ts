export class Estoque{

    _id:string
    codigo:number
    descricao:string
    quantidade_disponivel:number
    capacidade_maxima:number
    quantidade_minima:number

    constructor(_id:string,codigo:number,descricao:string,quantidade_disponivel:number,capacidade_maxima:number,quantidade_minima:number){
        this._id = _id,
        this.codigo = codigo,
        this.descricao= descricao,
        this.quantidade_disponivel= quantidade_disponivel,
        this.capacidade_maxima = capacidade_maxima,
        this.quantidade_minima = quantidade_minima
    }

}