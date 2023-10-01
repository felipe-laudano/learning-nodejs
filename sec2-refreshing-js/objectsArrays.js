//Objects em JavaScript
//É possível criar objetos dentro de chaves e inserir pares de key-value, podem ser chamados também de propriedade(property) ou campo (field) do objeto. Dentro de um objeto, além das variaveis, é possível inserir funções.
const person = {
    name: 'Felipe', //key (chave) = name, value (valor) = Felipe.
    age: 22,
    // greet: () => { //Dessa forma, quando a função for chamada, o nome terá valor undefined, porque ao usar o this aqui, ele interpreta como uma variável fora desse escopo, ou seja, uma variável global.
    //   console.log('Hi, I am ' + this.name) 
    //} //Existem duas formas para contornar isso:

    //greet: function() { //Aqui utilizando a palavra chave 'function'
    //    console.log('Hi, I am ' + this.name)
    //}

    greet() { //Aqui omitindo os : e a palavra function.
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

//Arrays podem ser declarados com colchetes, dentro deles é possível inserir textos, numeros, booleanos e objetos
const hobbies = ['Football', 'Cooking'];
//Percorrendo um array
//for (let hobby of hobbies) {
//    console.log(hobby);
//}

//No JS existem diversos métodos integrados que podem ser usados em arrays, basta chamar o array com um ponto e haverão diversos métodos. Um deles é o método que permite alterar o array passando como argumento uma função, ele retorna o array alterado porém não altera o array principal
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); //hobby é o parametro da arrow function dentro do metodo map, e o que vem após a seta é o retorno

//Constantes não podem ser alteradas porém, array é um tipo por referência e neste caso é possível porque uma variavel de referência tem como primeiro valor um ponteiro de endereço, logo, não editamos o ponteiro e sim o valor que este ponteiro esta apontando. Resumindo, o valor da constante 'hobbies' é um ponteiro e ele não é alterado, o que é alterado é o valor que o ponteiro aponta.
//Usando o método push é possível inserir um novo elemento dentro do array
hobbies.push('Gaming');
console.log(hobbies);
