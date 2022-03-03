//'use strict'
//ejercicio #1
/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
    word = word.split("");
    console.log(word);
  
}
function wordCutter(word) {
    word = word.split("");
   console.log(word);

   let random = word
       .map(item => ({item, sort: Math.random()}))
       .sort((a,b) => a.sort - b.sort)
       .map(({item}) => item)
   
   console.log(random)
}
wordCutter(testWord);

//ejercicio #2
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let minusList = wordsList.map(element => element.toLowerCase());
    targetWord= targetWord.toLowerCase();
    targetWord= normalizeString(targetWord);
    console.log(minusList)
    console.log(minusList.some(element => targetWord.toLowerCase() === element ))
}

function normalizeString (targetWord) {
    return targetWord = targetWord.normalize ("NFD").replace(/[\u0300-\u036f]/g,"");
}
wordSearcherIgnoreCase(testTargetWordA,testWordsList);
wordSearcherIgnoreCase(testTargetWordB,testWordsList);
wordSearcherIgnoreCase(testTargetWordC,testWordsList);


//ejercicio #3
/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let totalLetters = 0;
    wordsList.forEach(word => totalLetters += word.length);
    const averageSize = totalLetters / wordsList.length;

    const sortedWords = wordsList.sort((a, b) => {
        if(a.length < b.length) {
            return -1;
        } else if(a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    })

    return {
        averageSize,
        shortest: sortedWords[0],
        longest: sortedWords[sortedWords.length - 1],
    }
}
console.log(wordLengthClassifier(testSampleList))


//ejercicio #4
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    let poliWord = word.toLowerCase().split("").reverse().join("");
    if (poliWord === word) {
        console.log("The Word" + word + "is polidrome")
    } else {
        console.log("The Word" + word + "in not polindrome")
    }
}

palindromeVerifier (onVerificationWordA);
palindromeVerifier (onVerificationWordB);
palindromeVerifier (onVerificationWordC);
palindromeVerifier (onVerificationWordD);


//ejercicio #5
/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
   // :)
}


//ejercicio #6
/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const lists = listA.concat(listB);
    console.log(lists);
}
arrayJoiner(wordArrayA, wordArrayB);

//ejercicio #7
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
let posicionesAnagrama = []
listOfWords.forEach((word,num) => {
    const palabraArrayOrdenada = word.split("").sort().join("")
    const palabraMetodoOrdenada = wordToExplore.split("").sort().join("")
    if (palabraArrayOrdenada === palabraMetodoOrdenada){
    posicionesAnagrama.push(num)
   }
})
return posicionesAnagrama
}

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    // :)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}