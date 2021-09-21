let array = [12, 15, 18, 19, 20, 35, 60, 27];
let array2 = [
  "paralelepipedo",
  "carro",
  "retangulo",
  "trangulo",
  "boi",
  "ornitorinco",
];

function dividirMultiplicar(arr) {
  let total = arr.reduce((a, p) => a + p);
  let arrayTotal = novoArray.map((a) => a / total);
  return arrayTotal;
}

function palavrasLongas(arr, n) {
  let arrayPalavras = arr.filter((a) => {
    if (a.length > n) {
      return a;
    }
  });
  return arrayPalavras;
}
let dumith = {
  nome: "dumith",
  nota: 50,
};
let aisha = {
  nome: "aisha",
  nota: 70,
};
let maisa = {
  nome: "maisa",
  nota: 100,
};
let alunos = [dumith, aisha, maisa];

function ordemNota(n) {
  n.sort((a, b) => b.nota - a.nota);
  return n;
}

function ordemNome(arr) {
  arr.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0));
  return arr;
}

console.log(ordemNota(alunos));
console.log(ordemNome(alunos));
