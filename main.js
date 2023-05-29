let listaDeCompras = [];
let listaDeFrutas = [];
let listaDeCongelados = [];
let listaDeLaticinios = [];
let listaDeDoces = [];

let addLista = prompt("Voce gostaria de adicionar um item na sua lista de compras? 1 - Sim, 2 - Não, 3 - Remover um item da lista")
while (addLista == "1"){
    let novoProduto = prompt("Qual item voce gostaria de adicionar?")
    let categoria = prompt("Qual categoria esse produto se encaixa?")
    if (categoria == "frutas"){
        listaDeFrutas.push(novoProduto)
    }
    else if(categoria == "congelados"){
        listaDeCongelados.push(novoProduto)
    }
    else if(categoria == "laticinios"){
        listaDeLaticinios.push(novoProduto)
    }
    else if(categoria == "doces"){
        listaDeDoces.push(novoProduto)
    }

    console.log(listaDeFrutas, listaDeCongelados, listaDeDoces, listaDeLaticinios)
    
    addLista = prompt("Voce gostaria de adicionar um item na sua lista de compras? 1 - Sim, 2 - Não, 3 - Remover um item da lista")

}

if(addLista == "2"){
    alert(`Lista de Compras: \n Frutas: ${[listaDeFrutas]} \n Congelados: ${[listaDeCongelados]} \n Laticinios: ${[listaDeLaticinios]} \n Doces: ${[listaDeDoces]}`)
}

function eachlist(item){
    listaDeFrutas.indexOf
}

while (addLista == "3"){
    listaDeFrutas.forEach(eachlist(number)) {
        console.log(number)}};
