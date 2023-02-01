class mantenimiento{
    constructor() {
        this.numeroColumna = document.getElementById('columnas')
    }
    generarTablas(){
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
            codigoTabla += "<td><input type='text' name='unitPriceOrderWork' id=''></td>"
            codigoTabla += "<td><input type='text' name='totalPriceOrderWork' id=''></td>"
            codigoTabla += "</tr>"
        }
        codigoTabla += "</tbody></table>"
        codigoTabla += '<div id="boton"><button type="submit"><div id="iconoGuardar"><img src="/img/icons/white/save.png"></div></button></div>'
        document.getElementById('tabala').innerHTML = codigoTabla
    }
}

let tabla = new mantenimiento()