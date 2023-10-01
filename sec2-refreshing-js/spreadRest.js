const hobbies = ['Football', 'Cooking'];
//copiando um array:
//const copiedArray = hobbies.slice(); //método slice sem argumentos copia todo o array sem restrições
//const copiedArray = [hobbies]; //dessa forma existe apenas um elemento dentro do array copiedArray que é outro array. Isso não é uma cópia é um array aninhado.

//Usando o Spread operator (Operador de propagação). Três pontos que podem ser usados em arrays e objetos
const copiedArray = [...hobbies]; //pega todos os elementos ou propriedades do array ou objeto e coloca na área selecionada, neste caso serão pegos todos os elementos do array hobbies e colocados no array copiedArray
console.log(copiedArray);
console.log(hobbies);

//exemplo com um objeto
const person = {
    name: 'Felipe', //key (chave) = name, value (valor) = Felipe.
    age: 22,
    greet() { //Aqui omitindo os : e a palavra function.
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(person);
console.log(copiedPerson);

//REST operator (oposto do spread)
//Exemplo com uma function
//const toArray = (arg1, arg2, arg3) => { //dessa forma é uma função não flexível
//    return [arg1, arg2, arg3];
//};
//console.log(toArray(1, 2, 3, 4)); //Dessa forma o JS aceita, porém, o argumento 4 é ignorado pois na declaração da função apenas 3 parametros foram declarados.

//Para resolver, usa-se o Rest operator:
const toArray = (...args) => { //pega todos os argumentos passados na chamada da função e armazena em um array
    return args;
};
console.log(toArray(1, 2, 3, 4));

//Spread and Rest operators são iguais na sintaxe mas diferem no contexto em que são usados