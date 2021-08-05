const autos = require('./autos.js');

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        const autosFiltrados = this.autos.filter(function (auto) {
            return auto.patente == patente
        })
        if (autosFiltrados.length == 0) {
            return null
        } else {
            return autosFiltrados[0]
        }
    },
    venderAuto: function (patente) {
        const autoFiltrado = this.buscarAuto(patente);
        if (autoFiltrado) {
            autoFiltrado.vendido = true
        }
    }
};

console.log(autos);
concesionaria.venderAuto('APL123');
console.log(autos);