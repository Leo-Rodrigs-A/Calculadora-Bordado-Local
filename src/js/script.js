const orcamentos = [
  {
    id: "1",
    nomeMatriz: "Logo Açaiteria",
    dataCriacao: 1720500000000 // 1º de junho de 2025
  },
  {
    id: "2",
    nomeMatriz: "Logo Lampadario",
    dataCriacao: 1720700000000 // 4 de junho de 2025
  },
  {
    id: "3",
    nomeMatriz: "Logo NP Solar",
    dataCriacao: 1720600000000 // 3 de junho de 2025
  }
];

orcamentos.sort((a, b) => {return b.dataCriacao - a.dataCriacao})

for(i = 0; i < orcamentos.length; i++){
    console.log(orcamentos[i].nomeMatriz)
}

 