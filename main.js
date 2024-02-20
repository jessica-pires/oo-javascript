class Animal {
    constructor(raca, nome, porte) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
    }

    emitirSom() {
        console.log('Som do animal');
    }
}

class Cachorro extends Animal {
    constructor(raca, nome, porte) {
        super(raca, nome, porte);
    }emitirSom() {
        console.log('Au au');
    }
}

class Gato extends Animal {
    constructor(raca, nome, porte) {
        super(raca, nome, porte);
    }
    emitirSom() {
        console.log('Miau');
    }
}


let bicho1 = new Cachorro('Shih-tzu', 'Nina', 'pequeno');
let bicho2 = new Cachorro('Labrador', 'Mel', 'grande');
let bicho3 = new Gato('Siamês', 'Stevao', 'medio');


console.log(bicho1);
console.log(bicho2);
console.log(bicho3);
bicho3.emitirSom()
bicho1.emitirSom()

