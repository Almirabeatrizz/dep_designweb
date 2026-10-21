class Animal{
    constructor(n, p, r, a, c){
        this.nome = n;
        this.peso = p;
        this.raca = r; 
        this.altura = a;
        this.cor = c;
    }
    falar(){
        alert("oi");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    }
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei");
    }
    saudar(){
        let msg = `Nome: ${this.nome}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura: ${this.altura}\n`;
        msg = msg + `Raça ${this.raca}\n`;
        msg = msg + `Cor: ${this.cor}\n`;
        alert(msg);
    }
}

class Cachorro extends Animal{
    constructor(n, p, r, a, c, d){
        super(n, p, r, a, c);
        this.dentes = d;
    }
    falar(){
        alert("auau");
    }
    saudar(){
        super.saudar();
        alert("Sou um cachorro");
    }
}

class Papagaio extends Animal{
    constructor(n, p, r, a, c){
        super(n, p, r, a, c);
    }
    saudar(){
        super.saudar();
        alert("Sou um papagaio");
    }
}



const balu = new Animal("Balu Brasil", 12.5, "Viralata", 0.5, "Preto");
const mel = new Animal("Mel", 45.5, "Labrador", 1.5, "Amarelo");
const leleco = new Papagaio("Leleco Brasil", 0.250, "Papagaio Brasileiro", 0.15, "Verde e amarelo");
const priscila = new Animal("Priscila Brasil", 55, "Homosapiens", 1.55, "Amarela");
