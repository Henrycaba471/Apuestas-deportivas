"use strict";
//* Bot para apuestas deportivas, este bot solo tira resultados aleatorios no tine un api con estadisticas de los partidos

const d = document,
    EqLocal = d.getElementById("local"),
    EqVisitante = d.getElementById("visitante"),
    send = d.getElementById("send"),
    result = d.querySelector(".resultado"),
    form = d.querySelector(".sugerencia"),
    apuesta = d.querySelector(".apuesta");

d.addEventListener("click", (e) => {
    if (e.target.matches("#send")) {
        let random = Math.round(Math.random() * 2);
        e.preventDefault();
        if (EqLocal.value === "") {
            return result.innerHTML = ("No has ingresado el equipo Local")
        }
        if (EqVisitante.value === "") {
            return result.innerHTML = ("No has ingresado el equipo Visitante")
        }

        result.innerHTML = (`Local: <h3 class="local1">${EqLocal.value}</h3> <img src="assets/images/icons/vs.png" alt="vs" class="vs"/> <br> Visitante: <h3 class="visitante1">${EqVisitante.value}</h3>`);

        if (random === 0) {
            return apuesta.innerHTML = (`<h3 class="apuesta1">Apuesta: ${EqLocal.value}</h3>`);
        }
        if (random === 1) {
            return apuesta.innerHTML = (`<h3 class="apuesta1">Apuesta: Empate</h3>`);
        }
        if (random === 2) {
            return apuesta.innerHTML = (`<h3 class="apuesta1">Apuesta: ${EqVisitante.value}</h3>`);
        }
    }
});
