let dadosList = [];

function addDados() {
    const item = document.getElementById("itemNome").value;
    const valor = document.getElementById("itemPreco").value;
    const categoria = document.getElementById("itemCategoria").value;

    if (item && valor && categoria) {
        dadosList.push(item, valor, categoria);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}