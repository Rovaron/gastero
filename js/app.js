Vue.use(Keen);

new Vue({
    el: 'body',
    components: {

    },
    data: {
        msg: "hello world",
        gastos: [
            {name: "Cigarro", valor: "7.75"},
            {name: "Cerveja", valor: "7,00"},
            {name: "Pastel", valor: "4,00"}
        ]
    }
});