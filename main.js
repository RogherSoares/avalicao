let itensList = [];
let valorList = [];
let categoriaList = [];

function addDados() {
    const item = document.getElementById("itemNome").value;
    const valor = document.getElementById("itemPreco").value;
    const categoria = document.getElementById("itemCategoria").value;

    if (item && valor && categoria) {
        itensList.push(item);
        valorList.push(valor);
        categoriaList.push(categoria);

        // Exibe a tabela se estiver escondida
        const tabele = document.getElementById("tabela");
        if (tabele.style.display === "none") {
            tabele.style.display = "table"; 
        }

        criarLista();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function criarLista() {
    let tabela = "<tr><th>Nome</th><th>Categoria</th><th>Valor</th></tr>";
    for (let i = 0; i < itensList.length; i++) {
        const valor = parseFloat(valorList[i]);
        const valorStyle = valor > 100 ? "color: rgb(255, 0, 0);" : ""; 

        tabela += "<tr><td style='border: 1px solid rgb(0, 0, 0);'>" + itensList[i] + "</td>" +
                  "<td style='border: 1px solid rgb(0, 0, 0);'>" + categoriaList[i] + "</td>" +
                  "<td style='border: 1px solid rgb(0, 0, 0); " + valorStyle + "'>" + parseFloat(valorList[i]).toFixed(2) + " R$" + "</td>" +
                  "<td>" +
                  "<button class='remover' style='padding: 2px;' onclick='removerItem(" + i + ")'>Remover</button>" +
                  "<button class='editar' style='padding: 2px;' onclick='editarItem(" + i + ")'>Editar</button>" +
                  "</td></tr>";
    }
    tabela += "<tr><td colspan='3' style='border: 1px solid rgb(0, 0, 0);'><strong>Total</strong></td>" +
              "<td style='border: 1px solid rgb(0, 0, 0);'><strong>" + calcularTotal() + " R$" + "</strong></td></tr>";
    document.getElementById("tabela").innerHTML = tabela;
}

function calcularTotal() {
    let valorTotal = 0;
    for (let i = 0; i < valorList.length; i++) {
        valorTotal += parseFloat(valorList[i]);
    }
    return valorTotal.toFixed(2);
}
function removerItem(i) {
    itensList.splice(i, 1);
    valorList.splice(i, 1);
    categoriaList.splice(i, 1);

    if (itensList.length === 0) {
        tabele = document.getElementById("tabela");
        tabele.style.display = "none";
    }

    criarLista();
}
function editarItem(i) {
    const novoNome = prompt("Digite o novo nome para o item:", itensList[i]);
    const novaCategoria = prompt("Digite a nova categoria para o item:", categoriaList[i]);
    const novoValor = prompt("Digite o novo valor para o item:", valorList[i]);

    if (
        novoNome !== null && novoNome.trim() !== "" &&
        novaCategoria !== null && novaCategoria.trim() !== "" &&
        novoValor !== null && !isNaN(novoValor) && novoValor.trim() !== ""
    ) {
        itensList[i] = novoNome.trim();
        categoriaList[i] = novaCategoria.trim();
        valorList[i] = parseFloat(novoValor).toFixed(2);

        criarLista(); 
    } else {
        alert("Por favor, insira informações em todos os campos.");
    }
}