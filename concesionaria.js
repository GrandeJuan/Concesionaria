const autos = require('./autos.js');

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        autosFiltrados = this.autos.filter(function (auto) {
            return auto.patente == patente
        })
        if(autosFiltrados.length == 0){
            return null
        }else{
            return autosFiltrados[0]
        }
    }
};

console.log(concesionaria.buscarAuto('APL123'));