let itensList = [];
let valorList = [];
let categoriaList = [];

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
    let tabela = "<tr><th>Nome</th><th>Categoria</th><th>Valor</th></tr>"
    for (let i = 0; i < itensList.length; i++){
        tabela += "<tr><td>" + itensList[i] + "</td><td>" + categoriaList[i] +"</td><td>" + valorList[i] +"</td></tr>"
        document.getElementById("tabela").innerHTML = tabela;
    }
}