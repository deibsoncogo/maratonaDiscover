// EXECUTA UM GRUPO DE COMANDO QUANDO UMA TECLA A PRESSIONADA
window.onkeydown = function(event) {
  if ( event.keyCode == 107 ) { // +
    Modal.open()
  }
  
  if ( event.keyCode == 27 ) { // ESC
    Modal.close()
  }

  // for(let i = 0; i < transaction.length; i++) {}
}

// COMANDOS PARA ABRIR E FECHAR A TELA DE QUE ADICIONA AS TRANSAÇÕES
const Modal = {
  open() {
    // MODELO DE TODO NOSSO HTML EM OBJETO
    document.querySelector('.modal-overlay').classList.add('active')
    document.querySelector('.button.new').setAttribute('tabindex', '-1')
  },
  
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
    document.querySelector('.button.new').setAttribute('tabindex', '0')
  },
}

// USANDO O LOCAL STORAGE COMO BANCO DE DADOS
const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
  },

  set(transactions) {
    localStorage.setItem(
      "dev.finances:transactions",
      JSON.stringify(transactions)
    )
  },
}

// COMANDOS QUE IRAM REALIZAR AS SOMATÓRIAS
const Transaction = {
  // CRIA UM ATALHO PARA O BANCO DE DADOS
  all: Storage.get(),

  // ADICIONA NOVAS TRANSAÇÕES
  add(transaction) {
    Transaction.all.push(transaction)
    App.reload()
  },

  // REMOVE TRANSAÇÕES JÁ EXISTENTE
  remove(index) {
    Transaction.all.splice(index, 1)
    App.reload()
  },

  // SOMAR AS ENTRADAS
  incomes () {
    let income = 0

    Transaction.all.forEach(transaction => {
      if(transaction.amount > 0) {
        income += transaction.amount
      }
    })

    return income
  },

  // SOMAR AS SAÍDAS
  expenses () {
    let expense = 0

    Transaction.all.forEach(transaction => {
      if(transaction.amount < 0) {
        expense += transaction.amount
      }
    })

    return expense
  },

  // SOMAR TODAS TRANSAÇÕES
  total () {
    return Transaction.incomes() + Transaction.expenses()
  },
}

// ATUALIZAR A TABELA COM AS TRANSAÇÕES EXISTENTE
const DOM = {
  // SELECIONA O CAMPO DE LINHAS (tbody) DA TABELA PELO ID
  transactionsContainer: document.querySelector('#data-table tbody'),

  // CRIA A LINHA (tr) PARA EXIBIR OS DADOS
  addTransaction(transaction, index) {
    // CRIA O tr
    const tr = document.createElement('tr')

    // RECEBE ELEMENTOS HTML
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
    tr.dataset.index = index

    // ADICIONA AO tbody OS DADOS
    DOM.transactionsContainer.appendChild(tr)
  },

  // CRIA O LOCAL ONDE OS DADOS SERÃO EXIBIDOS
  innerHTMLTransaction(transaction, index) {
    // VERIFICA SE A TRANSAÇÃO É POSITIVA (ENTRADA) OU NEGATIVA (SAÍDA)
    const CSSClass = transaction.amount > 0 ? "income" : "expense"

    // ENVIA O VALOR PARA A CLASSE APLICAR A MASCARA DE MOEDA
    const amount = Utils.formatCurrency(transaction.amount)

    // ESQUEMA DE ONDE OS DADOS DEVEM SER SALVO
    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSClass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td><img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação"></td>
    `
    return html
  },

  updateBalance() {
    document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes())
    
    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())
    
    document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = ""
  }
}

// CRIAÇÃO DE DIVERSAS COISAS UTEIS
const Utils = {
  formatAmount(value) {
    value = Number(value.replace(/\,\./g, "")) * 100
    return value
  },

  formatDate(date) {
    // split REALIZA DIVISÕES A PARTIR DE UMA REGRA
    const splittedDate = date.split("-")
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  },

  // COMANDO QUE CRIA A MASCARA DE MOEDA
  formatCurrency(value) {
    // IDENTIFICA OS VALORES NEGATIVO
    const signal = Number(value) < 0 ? "-" : ""
    
    // REMOVE TUDO QUE NÃO É NÚMERO
    value = String(value).replace(/\D/g, "")

    // DIVIDE POR CEM
    value = Number(value) / 100

    // CRIA A MASCARA DA MOEDA BRASILEIRA
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })

    return signal + value
  }
}

// CRIAÇÃO DO FORMULÁRIO QUE VAI RECEBER OS DADOS DE ENTRADA
const Form = {
  // RECUPERAR OS VALORES INDIVIDUALMENTE
  description: document.querySelector('input#description'),
  amount: document.querySelector('input#amount'),
  date: document.querySelector('input#date'),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    }
  },
  
  // VERIFICAR SE OS CAMPOS ESTÃO PREENCHIDOS
  validateFields() {
    const {description, amount, date} = Form.getValues()
    
    // trim REMOVE OS ESPAÇOS VAZIOS
    if(description.trim() === "" || amount.trim() === "" || date.trim() === "") {
      throw new Error("EXISTE CAMPO VAZIO")
    }
  },
  
  // FORMATAR OS DADOS
  formatValues() {
    let {description, amount, date} = Form.getValues()

    amount = Utils.formatAmount(amount)
    date = Utils.formatDate(date)

    return {
      description,
      amount,
      date,
    }
  },

  // LIMPA OS CAMPOS DEPOIS DE SALVAR
  clearFields() {
    Form.description.value = ""
    Form.amount.value = ""
    Form.date.value = ""
  },

  submit(event) {
    // DESATIVA O COMPORTAMENTO PADRÃO DO FORMULÁRIO
    event.preventDefault()

    try {
      Form.validateFields()
      const transaction = Form.formatValues()
      Transaction.add(transaction)
      Form.clearFields()
      Modal.close()
    } catch (error) {
      alert(error.message)
    }
  },
}

const App = {
  init() {
    // forEach EXECUTA A FUNÇÃO PASSANDO POR CADA ELEMENTO DO ARRAY (FOR AUTOMÁTICO)
    Transaction.all.forEach((transaction, index) => {
      DOM.addTransaction(transaction, index)
    })
    
    DOM.updateBalance()

    Storage.set(Transaction.all)
  },

  reload() {
    DOM.clearTransactions()
    App.init()
  },
}

App.init()
