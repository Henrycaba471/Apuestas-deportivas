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
        let random = Math.round(Math.random() * 7);
        e.preventDefault();
        if (EqLocal.value === "") {
            return result.textContent = ("No has ingresado el equipo Local 🤷‍♂️")
        }
        if (EqVisitante.value === "") {
            return result.textContent = ("No has ingresado el equipo Visitante 🤷‍♂️")
        }
        console.log(random);
        result.innerHTML = (`Local: <h3 class="local1">${EqLocal.value}</h3> <img src="assets/images/icons/vs.png" alt="vs" class="vs"/> <br> Visitante: <h3 class="visitante1">${EqVisitante.value}</h3>`);

        if (random <= 2) {
            return apuesta.innerHTML = (`<h3 class="apuesta1">Apuesta: ${EqLocal.value}</h3>`),
            EqLocal.value = "",
            EqVisitante.value = "";
        }
        if (random > 2 && random <= 4) {
            return apuesta.innerHTML = (`<h3 class="apuesta1">Apuesta: Empate</h3>`),
            EqLocal.value = "",
            EqVisitante.value = "";
        }
        if (random > 4 && random <= 8) {
            return apuesta.innerHTML = (`<h3 class="apuesta1">Apuesta: ${EqVisitante.value}</h3>`),
            EqLocal.value = "",
            EqVisitante.value = "";
        }
    }
});

function menuHamburguer(panelBtn,panel,linkMenu){

    d.addEventListener('click', (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.toggle('is-active');
        }
        if (e.target.matches(linkMenu)) {
            d.querySelector(panel).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    });
}
menuHamburguer('.panel-btn', '.panel', '.nav a');

