class mantenimiento{
    constructor() {
        this.numeroColumna = document.getElementById('columnas')
    }
    tabla1(){
        var codigoTabla = "<table><tbody>"
        codigoTabla += "<tr>"
        codigoTabla += "<td>Fecha</td>"
        codigoTabla += "<td>Hora Inicio</td>"
        codigoTabla += "<td>Hora Fin</td>"
        codigoTabla += "<td>Tiempo Total</td>"
        codigoTabla += "<td>Kilometraje</td>"
        codigoTabla += "<td>Cantidad</td>"
        codigoTabla += "<td>Tipo</td>"
        codigoTabla += "<td>Trabajo o servicio</td>"
        codigoTabla += "<td>Encargado</td>"
        codigoTabla += "<td>Ubicación</td>"
        codigoTabla += "<td>Costo</td>"
        codigoTabla += "<td>observacion</td>"
        codigoTabla += "</tr>"
        codigoTabla += "<tr>"
        for (let i = 0; i < parseInt(this.numeroColumna.value); i++) {
            codigoTabla += "<td><input type='text' name='dateMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='hourStartMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='hourFinishMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='timeMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='mileageMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='amountMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='typeMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='maintenanceManager' id=''></td>"
            codigoTabla += "<td><input type='text' name='ubicationMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='preciMaintenance' id=''></td>"
            codigoTabla += "<td><input type='text' name='preciMaintenance' id=''></td>"
            codigoTabla += "</tr>"
        }
        codigoTabla += "</tbody></table>"
    }
}