let itensList = [];
let valorList = [];
let categoriaList = [];
let valorTotal = 0;

function addDados() {
    const item = document.getElementById("itemNome").value;
    const valor = document.getElementById("itemPreco").value;
    const categoria = document.getElementById("itemCategoria").value;

    if (item, valor, categoria) {
        itensList.push(item);
        valorList.push(valor);
        categoriaList.push(categoria);
        criarLista();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function criarLista() {
    let tabela = "<tr><th>Nome</th><th>Categoria</th><th>Valor</th></tr>";
    for (let i = 0; i < itensList.length; i++) {
        tabela += "<tr><td style='border: 1px solid rgb(0, 0, 0);'>" + itensList[i] + "</td><td style='border: 1px solid rgb(0, 0, 0);'>" + categoriaList[i] + "</td><td style='border: 1px solid rgb(0, 0, 0);'>" + valorList[i] + "</td><td><button onclick='removerItem(" + i + ")'>Remover</button></tr>";
    }
    tabela += "<tr><td colspan='3' style='border: 1px solid rgb(0, 0, 0);'><strong>Total</strong></td><td style='border: 1px solid rgb(0, 0, 0);'><strong>" + calcularTotal() + "</strong></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
}

function calcularTotal() {
    let valorTotal = 0;
    for (let i = 0; i < valorList.length; i++) {
        valorTotal += parseFloat(valorList[i]);
    }
    return valorTotal.toFixed(2);
}
function removerItem(index) {
    itensList.splice(index, 1);
    valorList.splice(index, 1);
    categoriaList.splice(index, 1);

    criarLista();
}