const balu = {
    nome: "Balu Basil",
    peso: 12.5,
    cor: "Preto",
    altura: 0.55,
    raca: "Vira-lata",
    falar(){
        alert("auau");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei");
    },
    saudar(){
        let msg = `Nome: ${this.nome}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura: ${this.altura}\n`;
        msg = msg + `Raça ${this.raca}\n`;
        msg = msg + `Cor: ${this.cor}\n`;
        alert(msg);
    }
}