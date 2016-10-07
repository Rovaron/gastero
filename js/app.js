new Vue({
    el: '#app',
    data: {
        novoGasto: {},
        listaGastos: [
            {nome: "Itaipava", valor:6.00},
            {nome: "Cigarro", valor:7.50},
            {nome: "Miojo", valor:0.87},
            {nome: "Ração Mila", valor:95.00},
            {nome: "Padaria", valor:12.00},
            {nome: "Itaipava", valor:6.00},
            {nome: "Cigarro", valor:7.50},
            {nome: "Miojo", valor:0.87},
            {nome: "Ração Mila", valor:95.00},
            {nome: "Padaria", valor:12.00},
            {nome: "Itaipava", valor:6.00},
            {nome: "Cigarro", valor:7.50},
            {nome: "Miojo", valor:0.87},
            {nome: "Ração Mila", valor:95.00},
            {nome: "Padaria", valor:12.00},
            {nome: "Itaipava", valor:6.00},
            {nome: "Cigarro", valor:7.50},
            {nome: "Miojo", valor:0.87},
            {nome: "Ração Mila", valor:95.00},
            {nome: "Padaria", valor:12.00},
        ]
    },
    methods: {
        adicionarNovoGasto: function (){
            this.listaGastos.push(this.novoGasto)
            this.novoGasto = {}
            document.querySelector("#gasto-nome").focus();
        }
    }
})