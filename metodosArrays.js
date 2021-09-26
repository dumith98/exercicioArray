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
// Exercício integrador

let arrayObjetos = [
  {
    nome: "arroz",
    preco: 2,
    vendas: 100000,
  },
  {
    nome: "soja",
    preco: 8,
    vendas: 2000,
  },
  {
    nome: "milho",
    preco: 7,
    vendas: 10000,
  },
  {
    nome: "trigo",
    preco: 10,
    vendas: 50000,
  },
];

function lucroTotal(array) {
  let lucro = 0;

  for (let i = 0; i < array.length; i++) {
    lucro += array[i].vendas * array[i].preco;
  }
  return lucro;
}

console.log(lucroTotal(arrayObjetos));

function lucroItem(array, nome) {
  let lucro = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].nome == nome) {
      lucro += array[i].vendas * array[i].preco;
    }
  }
  return lucro;
}

console.log(lucroItem(arrayObjetos, "arroz"));

function verificarLucros(array, p) {
  for (let i = 0; i < array.length; i++) {
    let lucro = array[i].vendas * array[i].preco;
    if (lucro >= p) {
      console.log("O " + array[i].nome + " atingiu a meta de " + p);
    } else {
      console.log("O " + array[i].nome + " não atingiu a meta de " + p);
    }
  }
}

verificarLucros(arrayObjetos, 200000);

function ordearLucro(array) {
  array.sort((a, b) => {
    let lucroA = a.vendas * a.preco;
    let lucroB = b.vendas * b.preco;
    return lucroB - lucroA;
  });
  return array;
}
console.log(ordearLucro(arrayObjetos));

function mudarValor(array, nome) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].nome == nome) {
      array[i].preco = 5;
    }
  }
  return array;
}
console.log(mudarValor(arrayObjetos, "arroz"));

function lucroTotalImpostos(array) {
  let lucro = 0;
  for (let i = 0; i < array.length; i++) {
    lucro += array[i].vendas * array[i].preco;
  }
  return lucro * 0.55;
}
console.log(lucroTotalImpostos(arrayObjetos));
