class eleccion {
    constructor(){
        this.si = document.getElementById('si')
        this.no = document.getElementById('no')
        this.seleccionArchivos = document.getElementById('seleccionArchivos')
    }
    inicio(){
        this.seleccionArchivos.style.display = 'none'
    }
    SI(){
        this.seleccionArchivos.style.display = 'block'
        this.si.setAttribute('', 'disabled')
        this.no.setAttribute('', '')
    }
    NO(){
        this.si.setAttribute('', '')
        this.no.setAttribute('', 'disabled')
    }
}

let elecciones = new eleccion()

window.onload = elecciones.inicio()