//exemplo de um código assíncrono
// setTimeout(() => {
//     console.log('Timer is done!')
// }, 2000); //usando um método do JS de cronometro, primeiro argumento passado é uma função e o segundo é o tempo em milissegundos

//utilizando callbacks
// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback("Done");
//     }, 1500);
// };

// setTimeout(() => {
//     console.log("Timer is done!");
//     fetchData((text) => {
//         console.log(text);
//     });
// }, 2000);

// //exemplo de dois códigos síncronos, são executados primeiro pois não existe nenhuma restrição apenas do hardware
// console.log("Hello");
// console.log("Hi");

//uso de promisses
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData()
        .then((text) => {
            console.log(text);
            return fetchData();
        })
        .then((text2) => {
            console.log(text2);
        });
}, 2000);

console.log("Hello!");
console.log("Hi!");

/** Para estudar JS
 * MDN JavaScript Tutorial: https://developer.mozilla.org/en-US/docs/Learn/JavaScript
 * Academind JS Resources: https://academind.com/learn/javascript
 */