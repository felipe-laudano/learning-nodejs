const person = {
    name: 'Felipe', //key (chave) = name, value (valor) = Felipe.
    age: 22,
    greet() { //Aqui omitindo os : e a palavra function.
        console.log('Hi, I am ' + this.name);
    }
};

//destructuring consegue pegar as propriedades de um objeto e utiliza-las
const printName = ({ name }) => {
    console.log(name);
}
//mesma função que a de cima
const printName2 = personData => console.log(personData.name)
printName(person);
printName2(person);

//usando destructuring com objeto fora de uma função
const { name, age } = person;
console.log(name, age);

//usando com arrays
const hobbies = ['Programming', 'Football'];
const [hobby1, hobby2] = hobbies; //ao contrario dos objetos, pode dar qualquer nome para os elementos do array sendo que eles são puxados pelo indices
console.log(hobby1, hobby2);