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
        };
    },
    autosParaLaVenta: function () {
        const autosParaVender = this.autos.filter(function (auto) {
            return auto.vendido == false
        });
        return autosParaVender
    },
    autosNuevos: function () {
        const listaDeAutosParaVender = this.autosParaLaVenta();
        const autos0Km = listaDeAutosParaVender.filter(function (auto) {
            return auto.km < 100
        });
        return autos0Km
    },
    listaDeVentas: function () {
        const listaDeAutosVendidos = this.autos.filter(function (auto) {
            return auto.vendido == true
        });
        const listaDePreciosNominal = listaDeAutosVendidos.map(function (auto) {
            return auto.precio
        });
        return listaDePreciosNominal;
    },
    totalDeVentas: function () {
        const autosVendidos = this.autos.filter(function (auto) {
            return auto.vendido == true
        });
        const listaDePreciosAutosVendidos = autosVendidos.reduce(function (acumulador, auto) {
            return acumulador + auto.precio
        }, 0);
        return listaDePreciosAutosVendidos;
    }
};


/* console.log(autos);
concesionaria.venderAuto('APL123');
console.log(autos);
console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas()); */
console.log(concesionaria.totalDeVentas());