const fPiu = document.getElementById("btnPiu")
const fMeno = document.getElementById("btnMeno")
const fMol = document.getElementById("btnMolt")
const fDiv = document.getElementById("btnDiv")
const fValore1 = document.getElementById("txtValore1")
const fValore2 = document.getElementById("txtValore2")
let fRisultato = document.getElementById("txtRisultato")

fPiu.onclick = function(){
    let valore1 = parseInt(fValore1.value)
    let valore2 = parseInt(fValore2.value)
    let risultato = valore1 + valore2
    fRisultato.value = risultato 
}

fMeno.onclick = function(){
    let valore1 = parseInt(fValore1.value)
    let valore2 = parseInt(fValore2.value)
    let risultato = valore1 - valore2
    fRisultato.value = risultato 
}

fMol.onclick = function(){
    let valore1 = parseInt(fValore1.value)
    let valore2 = parseInt(fValore2.value)
    let risultato = valore1 * valore2
    fRisultato.value = risultato 
}

fDiv.onclick = function(){
    let valore1 = parseInt(fValore1.value)
    let valore2 = parseInt(fValore2.value)
    let risultato = valore1 / valore2
    fRisultato.value = risultato 
}
