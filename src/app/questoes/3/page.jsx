const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaPares = (n) => {
  let soma = 0;

  for(let i = 0; i < n.length; i++){
    if(n[i] % 2 === 0){
      soma+= n[i];
    } 
  }

  return soma
}

export default function Questao3() {
  const soma = somaPares(numerosInteiros);
  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <p>Soma: {soma}</p>
    </>
  );
}
