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
        tabela += "<tr><td>" + itensList[i] + "</td><td>" + categoriaList[i] + "</td><td>" + valorList[i] + "</td></tr>";
    }
    tabela += "<tr><td colspan='2'><strong>Total</strong></td><td><strong>" + calcularTotal() + "</strong></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
}

function calcularTotal() {
    let valorTotal = 0;
    for (let i = 0; i < valorList.length; i++) {
        valorTotal += parseFloat(valorList[i]);
    }
    return valorTotal.toFixed(2);
}