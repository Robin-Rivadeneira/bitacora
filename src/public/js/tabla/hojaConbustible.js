class tablas {
    constructor() {
        this.numeroColumna = document.getElementById('columnas')
    }
    generarTablas() {
        var codijoTabla = "<table><tbody>"
        codijoTabla += "<tr>"
        codijoTabla += "<td>N°</td>"
        codijoTabla += "<td>Fecha</td>"
        codijoTabla += "<td>INICIAL</td>"
        codijoTabla += "<td>FINAL</td>"
        codijoTabla += "<td>Km</td>"
        codijoTabla += "<td>1/8</td>"
        codijoTabla += "<td>1/4</td>"
        codijoTabla += "<td>3/8</td>"
        codijoTabla += "<td>1/2</td>"
        codijoTabla += "<td>5/8</td>"
        codijoTabla += "<td>3/4</td>"
        codijoTabla += "<td>7/8</td>"
        codijoTabla += "<td>1</td>"
        codijoTabla += "<td>USD</td>"
        codijoTabla += "<td>GL</td>"
        codijoTabla += "<td>1/8</td>"
        codijoTabla += "<td>1/4</td>"
        codijoTabla += "<td>3/8</td>"
        codijoTabla += "<td>1/2</td>"
        codijoTabla += "<td>5/8</td>"
        codijoTabla += "<td>3/4</td>"
        codijoTabla += "<td>7/8</td>"
        codijoTabla += "<td>1</td>"
        codijoTabla += "<td>1/8</td>"
        codijoTabla += "<td>1/4</td>"
        codijoTabla += "<td>3/8</td>"
        codijoTabla += "<td>1/2</td>"
        codijoTabla += "<td>5/8</td>"
        codijoTabla += "<td>3/4</td>"
        codijoTabla += "<td>7/8</td>"
        codijoTabla += "<td>1</td>"
        codijoTabla += "<td>TNQ</td>"
        codijoTabla += "<td>Km/GL</td>"
        codijoTabla += "</tr>"
        codijoTabla += "<tr>"
        for (let a = 0; a < parseInt(this.numeroColumna.value); a++) {
            codijoTabla += "<td><input type='text' name='idMileage' id=''></td>"
            codijoTabla += "<td><input type='text' name='dateMileage' id=''></td>"
            codijoTabla += "<td><input type='text' name='startMileage' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishMileage' id=''></td>"
            codijoTabla += "<td><input type='text' name='totalMileage' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='startGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='precieGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='gallonsGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='newGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='finishGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='tankedGas' id=''></td>"
            codijoTabla += "<td><input type='text' name='totalTankeMondGas' id=''></td>"
        }
        codijoTabla += "</tr>"
        codijoTabla += "</tbody></table>"
        codijoTabla += " <div id='boton'><button type='submit'>Guardar</button></div>"
        document.getElementById('formulario').innerHTML = codijoTabla
    }
}

let tabla = new tablas()