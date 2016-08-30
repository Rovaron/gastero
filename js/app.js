new Vue({
    el: 'body',
    data: {
        msg: "hello world",
        gastos: [
            {nome: "Cigarro", valor: 7.75},
            {nome: "Cerveja", valor: 7.00},
            {nome: "Pastel", valor: 4.00}
        ],
        gasto: {nome: '', valor: ''}
    },
    methods: {
        novoGasto: function(e){
            e.preventDefault();
            this.gastos.push(this.gasto);
            this.gasto = {};
        },
        removeGasto: function(gasto){
            this.gastos.$remove(gasto);
        },
        clearZero: function(){
            if(this.gasto.valor == 0){
                this.gasto.valor = "";
            }
        }
    },
    computed: {
        isValid: function() {
            return this.gasto.nome != '' && this.gasto.valor != '' && typeof this.gasto.valor == "number";
        },
        totalGastos: function(){
            var sum = 0;
            this.gastos.reduce(function(prev, gasto){
               sum += gasto.valor;
            },0);
            return sum;
        }
    }
});