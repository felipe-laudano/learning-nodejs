//Criando variáveis com var (forma desatualizada). Elas estão no escopo global.
var name = 'Felipe'; //tipo String
var age = 22; //tipo Number, pode ter casas decimais
var hasHobbies = true; //tipo Boolean

//Declarando funções
function summarizeUser(userName, userAge, userHasHobby) { //função com parametros
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby; //função que retorna uma string, concatenada com os argumentos dela
}

//Imprimindo na tela o retorno da função, chamando ela com os argumentos
console.log(summarizeUser(name, age, hasHobbies));

//Criando variáveis com let e const (forma atualizada). Elas estão no escopo global.
const name2 = 'Felipe'; //tipo String, const para indicar que nunca será alterada
let age2 = 22; //tipo Number, pode ter casas decimais, let para indicar que ela pode ser alterada
const hasHobbies2 = true; //tipo Boolean
//Caso tentar alterar uma constante (ex: name2 = 'Joao'), o programa retorna um erro no terminal "TypeError: Assignment to constant variable"

//Arrow functions

//Atribuindo uma função como valor de uma constante
const summarizeUser = function (userName, userAge, userHasHobby) { //função anônima, pois não tem um nome próprio, apenas a constante tem.
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby; 
}

//Outra forma de escrever a mesma função, removendo a palavra function e adicionando a seta entre os argumentos e a chave de abertura. Dessa forma podemos usar a palavra-chave 'this' de outra forma (?)
const summarizeUser = (userName, userAge, userHasHobby) => { 
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby; 
}

//Outra forma de escrever, porém, dessa forma é possível apenas para funções que tenham apenas uma instrução e que seja a 'return'. Aqui são removidas as chaves e a instrução return:
const summarizeUser = (userName, userAge, userHasHobby) => 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby; 

//Outra sintaxe é sem os parenteses pros parametros, porém isso só é possível quando a função tem apenas um parametro:
const addOne = a => a + 1; //Parametro = a, retorno = a + 1

//Por último, caso a função não tenha parametrossão necessários os parenteses:
const addRandom = () => 1 + 2;