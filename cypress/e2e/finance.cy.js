
describe('Transacoes',()=>{
    //hooks = execução antes e depois de cada teste
    //before
    //after
    //beforeEach
    //afterEach
    beforeEach(()=>{
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });
    it('Cadastrar uma entrada',() =>{
     
         criarTransacao("Freela",250) // chamada da funcao
        cy.get("tbody tr td.description").should("have.text","Freela") //assert
    });
    
    it('Cadastrar uma saída' ,()=>{
        criarTransacao("Cinema",-50) // chamada da funcao
        cy.get("tbody tr td.description").should("have.text","Cinema") //assert
    })
    it('Excluir Transacao',()=>{
        criarTransacao("Freela",100)
        criarTransacao("Mesada",100)
        cy.contains(".description","Freela")
         .parent()//nevega para o elemento pai
         .find('img')
         .click()
        
         cy.get('tbody tr').should("have.length",1)
    })
    
});


function criarTransacao(descricao,valor){
    cy.contains("+ Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-08-09")
    cy.contains('button', 'Salvar').click()
}