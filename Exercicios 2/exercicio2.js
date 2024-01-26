/*
1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

//1:
function calculoIMC(altura, peso){
    let IMC = peso / altura.mathPow(2);
}

//2:
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }

  //3:
  function conversaoDolar(dolar, reais){
    let reais = 4.80;
    let dolar = parseFloat(prompt('Digite o valor a ser convertido em reais'));
    let conversaoDolar = dolar * reais;
    return conversaoDolar;
  }

  //4:
    function calcularAreaPerimetroSalaRetangular(altura, largura) {
        let area = altura * largura;
        let perimetro = 2 * (altura + largura);
        
        console.log(`Área da sala: ${area} metros quadrados`);
        console.log(`Perímetro da sala: ${perimetro} metros`);
  }

  //5:
  function perimetroCircular(raio){
    let PI = 3.14;
    let raio = parseFloat(prompt('digite o valor do raio'));
    let perimetroCircular = 2*PI * raio;
    return perimetroCircular;
  }

  //6:
  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }