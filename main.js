const fCalc = document.getElementById("btnCalc")
const fValore = document.getElementById("txtValore")
let fRisultato = document.getElementById("txtRisultato")

fCalc.onclick = function(){
    let valore =parseInt(fValore.value)
    let risultato = valore + 5
    fRisultato.value = risultato  
}