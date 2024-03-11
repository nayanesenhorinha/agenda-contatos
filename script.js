// variáveis
const nome = document.querySelector('#nome');
const telefone = document.querySelector('#telefone');
const form = document.querySelector('form');
const contatosNomes = [];
const contatoTelefones = [];
const erro = document.querySelector("#erro");

// funções
const validaContato = () => {
    if(contatosNomes.includes(nome.value) && contatoTelefones.includes(telefone.value)) {
        erro.innerText = "Contato já cadastrado";
        return false;
    } else {
        contatosNomes.push(nome.value);
        contatoTelefones.push(telefone.value);
        return true;
    }
}

const validarForm = () => {
    if(nome.value == ''){
        erro.innerText = "Digite um nome";
        return false;

    } else if(telefone.value == ''){
        erro.innerText = "Digite um telefone";
        return false;
    } else {
        return true;
    }
}

const limparForm = () => {
    nome.value = '';
    telefone.value = '';
}

const exibirContatos = () => {
    const tabela = document.querySelector('tbody');
    let contato = document.createElement('tr');
    contato.innerHTML = `
        <td>
            ${nome.value}
        </td>
        <td>
            ${telefone.value}
        </td>
    `
    tabela.append(contato);
    limparForm();
}

const salvarContatos = () => {
    if(validarForm()) {
        if(validaContato()) {
            exibirContatos();
        }
    } 
}

// eventos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    erro.innerText = "";
    salvarContatos();
})