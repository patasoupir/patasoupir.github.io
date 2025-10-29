//  On ne se sert pas d'une boucle for ici
// parce qu'on ajoute un seul point vert à chaque clic
// pas plusieurs d’un coup.
// La boucle for est utile quand on veut répéter une action immédiatement plusieurs fois
// par exemple pour ajouter 20 points en une seule fois.
// Ici, on veut que chaque clic ajoute un seul point,
// jusqu'à un maximum de 20 — donc une boucle n'est pas nécessaire.
// let liste = document.querySelector(".liste");
// let un = document.querySelector(".un");
// let deux = document.querySelector(".deux");
// let trois = document.querySelector(".trois");
// let quatre = document.querySelector(".quatre");

// BUTTONPOURLEBIEN //
const buttonPourLeBien = document.getElementById("buttonPourLeBien");
const pointsVertsDiv = document.getElementById("pointsVertsDiv");
let countVert = 0;
let maxPointsVert = 20;

buttonPourLeBien.addEventListener("click", () => {
  if (countVert < maxPointsVert){
    const pointVert = document.createElement("div");
    pointVert.classList.add("pointVert");
    pointsVertsDiv.appendChild(pointVert);
    countVert ++;
  } else {
    liste.innerHTML = " ";
    const messageVert = document.createElement("div");
    messageVert.textContent = "Vous allez vraiment bien !";
    messageVert.classList.add("boiteDuMessageVertQuiApparait");
    liste.appendChild(messageVert);
  }
});

// BUTTONPOURLEMAL //
const buttonPourLeMal = document.getElementById("buttonPourLeMal");
const pointsRougesDiv = document.getElementById("pointsRougesDiv");
let countRouge = 0;
let maxPointsRouge = 3;

buttonPourLeMal.addEventListener("click", () => {
  if (countRouge < maxPointsRouge){
    const pointRouge = document.createElement("div");
    pointRouge.classList.add("pointRouge");
    pointsRougesDiv.appendChild(pointRouge);
    countRouge ++;
  } else {
    pointsRougesDiv.innerHTML = "";
    buttonPourLeMal.style.display ="none";
    const message = document.createElement("div");
    message.textContent = "à ce point ? Vous êtes atteint de quelque chose ?";
    message.classList.add("boiteDuMessageRougeQuiApparait");
    pointsRougesDiv.appendChild(message);
}
});

// BUTTONPOURLESREPONSES //
const buttonPourLesReponses = document.getElementById("buttonPourLesReponses");
let reponses = document.getElementById("reponses");

buttonPourLesReponses.addEventListener("click", function () {
  if (getComputedStyle(reponses).display != "block") {
    reponses.style.display = "block";
  } else {
    reponses.style.display = "none";
  }
});

// alert("COUCOU");
// // TESTS //
// document.getElementById("buttonPourLeMal").innerHTML = "Ramène moi des ramens";
// // C TROP BIEN !!!!

