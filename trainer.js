function confirmarMonstermon() {
    alert("Seleccionaste tu monstermon")
}
function gameOver() {
    respuesta=prompt("Seguro quieres empezar de nuevo?")
}

let buttonConfirm = document.getElementById("button-confirm")
buttonConfirm.addEventListener("click",confirmarMonstermon)

let buttonRestard = document.getElementById("button-yes")
buttonRestard.addEventListener("click",gameOver)
