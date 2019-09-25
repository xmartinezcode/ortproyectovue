
var app = new Vue({
    el: '#app',
    data: {
        lista: [
        ],
        tipo: '',
        direccion: '',
        latitud: '',
        longitud: '',



    },
    methods: {
        agregarEvento: function () {

            var direccion = document.getElementById("autocomplete").value;
           

            this.lista.push({ tipo: this.tipo, direccion,latitud:this.latitud,longitud:this.longitud });
            this.tipo = "";
            this.direccion = "";
            initMap();
        },


    }
})