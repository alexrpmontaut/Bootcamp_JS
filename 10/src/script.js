//Variables
//Objetos
const user = {
    id: 1,
    name: "Jhon",
    surname: "Doe"
};

const item = {
    name: "table",
    color: "red"
}
//Arrays
const dedos = ["pulgar", "índice", "corazón", "anular", "meñique"];
const colores = ["rojo", "azul", "verde", "amarillo"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//Lista de la compra
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
  ];



//Utilities
const hasId = ({id}) => (id ? true : false);
//También funciona así:
//const hasId = ({id}) => (!!id);

const head = ([first]) => first;

const tail = ([, ...rest]) => rest;

const swapFirstToLast = ([first, ...rest]) => [...rest, first];

const excludeId = ({id, ...rest}) => ({...rest});

const wordsStartingWithA = ArrayWords => ArrayWords.filter(word => word.toLowerCase().charAt(0) == "a");

const concat = (...words) => words.join("|");

const multArray = (ArrayNums, multip) => (ArrayNums.map(num => num * multip));

const calcMult = (...nums) => nums.reduce((sumNums, num) => sumNums + num, 0);

const swapFirstSecond = ([first,second,...rest]) => [second,first,...rest];

const firstEqual = (...words) => (character = words.pop(), words.every(word => word.charAt(0) == character));

const longest = (...arrays) => arrays.sort()[0];

const searchInStringV1 = (sentence, character) => (Array.from(sentence).map((value) => (value == character ? 1 : 0)).reduce((a,b) => a + b, 0));
    
const searchInStringV2 = (sentence, character) => (Array.from(sentence).filter(value => value == character)).length;

const sortCharacters = (sentence) => (Array.from(sentence).sort());

const shout = (...words) => (words.join("!!!, ") + "!!!").toUpperCase();

//Compra

const calcIva = ([...products]) => products.map((product => (product.price * 0.21).toFixed(2)));

const sortMoreToLess = ([...products]) => products.sort((a, b) => (a.units < b.units ? 1 : -1));

const drogueriaPrice = ([...products]) => products.filter(value => value.category == "Droguería").reduce((a,b) => a + b.price, 0);

const listProducts = ([...products]) => products.sort((a, b) => (a.category > b.category ? 1 : -1)).map(value => value.product + " -> " + value.price * value.units + "€");



//Console Log
console.log("Probando hasId:");
console.log(">>¿Tiene id el objeto user?");
console.log(hasId(user));
console.log(">>¿Tiene id el objeto item?");
console.log(hasId(item));
console.log("\n");
console.log("Probando head:");
console.log(">>Primer elemento de dedos:");
console.log(head(dedos));
console.log(">>Primer elemento de colores:");
console.log(head(colores));
console.log("\n");
console.log("Probando tail:");
console.log(">>Todos los elementos excepto el primero de dedos:");
console.log(tail(dedos));
console.log(">>Todos los elementos excepto el primero de colores:");
console.log(tail(colores));
console.log("\n");
console.log("Probando swapFirstToLast:");
console.log(">>Aplicado en dedos:");
console.log(swapFirstToLast(dedos));
console.log(">>Aplicado en colores:");
console.log(swapFirstToLast(colores));
console.log("\n");
console.log("Probando excludeId:");
console.log(">>Aplicado en user");
console.log(excludeId(user));
console.log(">>Aplicado en item");
console.log(excludeId(item));
console.log("\n");
console.log("Probando wordsStartingWithA:");
console.log(">>Aplicado en dedos:");
console.log(wordsStartingWithA(dedos));
console.log(">>Aplicado en colores:");
console.log(wordsStartingWithA(colores));
console.log("\n");
console.log("Probando concat:");
console.log(">>Aplicado en (uno, dos, tres):");
console.log(concat("uno","dos","tres"));
console.log("\n");
console.log("Probando multArray:");
console.log(">>Aplicado en (numeros, 2):");
console.log(multArray(numeros, 2));
console.log(">>Aplicado en (numeros, 3):");
console.log(multArray(numeros, 3));
console.log("\n");
console.log("Probando calcMult:");
console.log(">>Aplicado en (1,2,3,4):");
console.log(calcMult(1,2,3,4));
console.log(">>Aplicado en (11,46,34,28):");
console.log(calcMult(11,46,34,28));
console.log("\n");
console.log("Probando swapFirstSecond:");
console.log(">>Aplicado en dedos:");
console.log(swapFirstSecond(dedos));
console.log(">>Aplicado en colores:");
console.log(swapFirstSecond(colores));
console.log("\n");
console.log("Probando firstEqual:");
console.log(">>Aplicado en (perro, pato, pez) con la P:");
console.log(firstEqual("perro","pato", "pez", "p"));
console.log(">>Aplicado en (gato, gorila, jirafa) con la G:");
console.log(firstEqual("gato","gorila", "jirafa", "g"));
console.log("\n");
console.log("Probando longest:");
console.log(">>Aplicado en (colores, numeros, dedos):");
console.log(longest(colores, numeros, dedos));
console.log(">>Aplicado en (numeros, dedos, colores):");
console.log(longest(numeros, dedos, colores));
console.log("\n");
console.log("Probando searchInStringV1:");
console.log(">>Aplicado en 'una frase bastante larga' y 'a':");
console.log(searchInStringV1("una frase bastante larga","a"));
console.log(">>Aplicado en 'otra frase diferente' y 'a':");
console.log(searchInStringV1("otra frase diferente","a"));
console.log("\n");
console.log("Probando searchInStringV2:");
console.log(">>Aplicado en 'una frase bastante larga' y 'a':");
console.log(searchInStringV2("una frase bastante larga","a"));
console.log(">>Aplicado en 'otra frase diferente' y 'a':");
console.log(searchInStringV2("otra frase diferente","a"));
console.log("\n");
console.log("Probando sortCharacters:");
console.log(">>Aplicado en 'una frase bastante larga':");
console.log(sortCharacters("una frase bastante larga"));
console.log(">>Aplicado en 'otra frase diferente':");
console.log(sortCharacters("otra frase diferente"));
console.log("\n");
console.log("Probando shout:");
console.log(">>Aplicado en (uno, dos, tres):");
console.log(shout("uno","dos","tres"));
console.log("\n");
console.log("Probando calcIva:");
console.log(calcIva(shoppingCart));
console.log("Probando sortMoreToLess:");
console.log(sortMoreToLess(shoppingCart));
console.log("Probando drogueriaPrice:");
console.log(drogueriaPrice(shoppingCart));
console.log("Probando listProducts:");
console.log(listProducts(shoppingCart));