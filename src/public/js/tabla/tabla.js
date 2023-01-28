class tablas {
    constructor() {
        this.numeroColumna = document.getElementById('columnas')
    }
    generarTablas() {
        var codijoTabla = "<table><tbody>"
        codijoTabla += "<tr>"
        codijoTabla += "<td>RTV</td>"
        codijoTabla += "<td>COMISION</td>"
        codijoTabla += "<td>IMPUESTO SOBRE VEHICULOS</td>"
        codijoTabla += "<td>COMISION</td>"
        codijoTabla += "<td>MATRICULA</td>"
        codijoTabla += "<td>COMISION</td>"
        codijoTabla += "<td>FONDO VIAL</td>"
        codijoTabla += "<td>COMISION</td>"
        codijoTabla += "<td>TOTAL PAGO</td>"
        codijoTabla += "</tr>"
        codijoTabla += "<tr>"
        for (let a = 0; a < parseInt(this.numeroColumna.value); a++) {
            codijoTabla += "<td><input type='text' name='rtvTuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='commissionTuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='vehicleTaxTuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='commission2TuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='tuitionTuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='commission3TuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='roadFundRegistrationTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='commission4TuitionTax' id=''></td>"
            codijoTabla += "<td><input type='text' name='totalTuitionTax' id=''></td>"
        }
        codijoTabla += "</tr>"
        codijoTabla += "</tbody></table>"
        codijoTabla += " <div id='boton'><button type='submit'>Guardar</button></div>"
        document.getElementById('formulario').innerHTML = codijoTabla
    }
}

let tabla = new tablas()
