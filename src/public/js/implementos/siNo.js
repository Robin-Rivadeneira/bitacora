class siNo {
    constructor() {
        this.si = document.getElementById('si')
        this.no = document.getElementById('no')
        this.inp = document.getElementById('inp')
    }
    primerSi() {
        if (this.si.value == 'si') {
            this.si.style.display = 'none'
            this.inp.innerHTML = '<input type="text" name="stateSecurityElemenstAndServis" id="si" value="si" readonly>'
            this.no.setAttribute('disabled', '')
        }
    }
    primerNO(){
        if (this.no.value == 'no') {
            this.no.style.display = 'none'
            this.inp.innerHTML = '<input type="text" name="stateSecurityElemenstAndServis" id="no" value="no" readonly>'
            this.si.setAttribute('disabled', '')
        }
    }
}

let siOno = new siNo()