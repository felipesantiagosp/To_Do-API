module.exports = class Tarefa {
    constructor (id, titulo, mensagem, status, data){
        this.id = id;
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.status = status;
        this.data = data;
    }
}