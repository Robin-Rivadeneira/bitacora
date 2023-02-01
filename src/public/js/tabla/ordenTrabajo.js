class ordenTrabajo {
    constructor() {
        this.numeroColumna = document.getElementById('columnas')
        this.unidadPrecio = document.getElementsByName('unitPriceOrderWork')
        this.cantidad = document.getElementsByName('amountOrderWork')
        this.total = document.getElementsByName('totalPriceOrderWork')
        this.totalTotal = document.getElementById('totalOrderWork')
    }
    generarTablas() {
        var codigoTabla = "<table><tbody>"
        codigoTabla += "<tr>"
        codigoTabla += "<td>CANTIDAD</td>"
        codigoTabla += "<td>TIPO</td>"
        codigoTabla += "<td>DETALLE</td>"
        codigoTabla += "<td>PRECIO UND (INC IVA)</td>"
        codigoTabla += "<td>PRECIO TOTAL (INC IVA)</td>"
        codigoTabla += "</tr>"
        codigoTabla += "<tr>"
        for (let i = 0; i < parseInt(this.numeroColumna.value); i++) {
            codigoTabla += "<td><input type='text' name='amountOrderWork' id=''></td>"
            codigoTabla += "<td><input type='text' name='typeOrderWork' id=''></td>"
            codigoTabla += "<td><input type='text' name='detailOrderWork' id=''></td>"
            codigoTabla += "<td><input type='number' name='unitPriceOrderWork' id=''></td>"
            codigoTabla += "<td><input type='number' name='totalPriceOrderWork' id=''></td>"
            codigoTabla += "</tr>"
        }
        codigoTabla += "</tbody></table>"
        codigoTabla += '<div id="boton"><button type="submit"><div id="iconoGuardar"><img src="/img/icons/white/save.png"></div></button></div>'
        document.getElementById('tabala').innerHTML = codigoTabla
    }
    calculo() {
        for (let i = 0; i < parseInt(this.numeroColumna.value); i++) {
            this.total[i].value = (parseInt(tabla.cantidad[i].value) * tabla.unidadPrecio[i].value) * 100
        }
        for (let m = 0; m < parseInt(this.numeroColumna.value); m++) {
            for (let j = 1; j < parseInt(this.numeroColumna.value); j++) {
                this.totalTotal.value = parseFloat(this.total[m].value) + parseFloat(this.total[j].value)
            }
        }
    }
}

let tabla = new ordenTrabajo()