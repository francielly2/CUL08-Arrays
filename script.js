// Trabalhando com Arrays

// ------ Declarando 
// Declarando e inicializando um Array numérico
let numeros = [1, 4, 5, 2, 3];

// Declarando e incializando um Array com "string"
let nomes = ["Alice", "Bob", "Karol", "David"];

// Declarando e inicializando um Array com diversos tipos 
//de dados
let misturado = [1, "Alice", true, {chave: "valor"}];
// O elemento 4 é um tipo de objeto.

// ------- Acessando os Arrays
console.log(numero[0]); // Saída de dados - Primeiro elemento 
console.log(nome[2]); // Saída de dados - Terceiro elemento 
console.log(misturado[3]); //Saída: {chave: "valor"}

// ------- Acrescentando elementos nos Arrays
//Neste exemplo é preciso conhecer qual é o útimo elemento do array
numero[5]=6;
// Neste outro exemplo o método push localiza a última posiução 
// e insere o novo elemento.
numero.push[7]; //Existem outros métodos para outras finalizadades.

// ------- Lendo o tamanho do Array 
numeros.length // legth é um atributo que contém o tamanho do vetor
console.log(`A quantidade de elementos do Array numeros é ${numero.legth}`);

// Apresentando o último elemento 
console.log(numero[6]); //Saída = 7

// ------- Ordenando o Array manualmente
// Testar

// ------- Ordenando o Array com método
numeros.sort();
for(i=0; i<=6; i+=1){
    console.log(numeros[i]);
} 

// ------- Procurando um elemento no Array
// Método indexOf() - Retorna -1 caso não encontre.

// Procurando o valor 5.
console.log("O valor 5 esta na posição: " + numero.indexOf(5));
let pos = numeros.indexOf(8);
if(pos == -1){
    console.log("Valor NÂO ENCONTRADO");
} else {
    console.log("Valor ENCONTRADO");
}
