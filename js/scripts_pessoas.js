//IMPORTANDO ARQUIVOS
import { calcDesconto } from "./scripts_calculos.js"

// Pegando Elementos Do DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

// Criando ARRAY pessoas 
const pessoas = []

// CAPTURAR O EVENTO submit DO FORMULARIO
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPER O EFEITO PADRÃO DE SUBMETER AOS DADOS DO FORMULÁRIO
    evt.preventDefault()

    //CRIAR UM OBJETO FORMULÁRIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRIAR UM OBJETO LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    //CHAMANDO A FUNÇÃO addPessoa E PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)

    //LIMPAR O FORMULÁRIO
    formPessoa.reset()

})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    //ADICIONANDO P PBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)

    //APÓS ADICIONAR O OBJETO LITERAL NO ARRAY CHAMA A FUNÇÃO LISTPESSOAS
    listPessoas()
}

//FUNÇÃO PARA LISTAR PESSOAS NO ARRAY
const listPessoas = () => {
    //LIMPANDO A div LISTA
    divLista.innerHTML = ''
    //PERCORRER O ARRAY pessoas COM O Foreach
    pessoas.forEach((elem, i) => {
        divLista.innerHTML += `${i} - ${elem.nome} - ${elem.idade}, ${parseFloat(elem.renda).toFixed(2).replace('.', ',')} <br>`
    })
}