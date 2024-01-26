/*
1- Crie uma lista vazia, com o nome listaGenerica.
2- Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
3- Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
4- Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
5- Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
6- Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
*/

//1:
let lista = [];

//2:
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python1'];
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

//4:
let lista1 = ['João', 'Nazira', 'Pedro'];
console.log(lista1[0]);
console.log(lista1[1]);
console.log(lista1[2]);