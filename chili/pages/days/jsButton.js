// buttonFAQ//
const buttonFaq = document.getElementById("faq");
const affichageFaq = document.getElementById("videoFaq");

buttonFaq.addEventListener("click", function () {
  if (getComputedStyle(affichageFaq).display != "block") {
    affichageFaq.style.display = "block";
  } else {
    affichageFaq.style.display = "none";
  }
});

// buttonTambours//
const buttonTambours = document.getElementById("tambours");
const affichageTambours = document.getElementById("sonTambours");

buttonTambours.addEventListener("click", function () {
  if (getComputedStyle(affichageTambours).display != "block") {
    affichageTambours.style.display = "block";
  } else {
    affichageTambours.style.display = "none";
  }
});
// buttonBUS510
const buttonBus = document.getElementById("bus510");
const affichageImageBus = document.getElementById("imageBus");

buttonBus.addEventListener("click", function () {
  if (getComputedStyle(affichageImageBus).display != "block") {
    affichageImageBus.style.display = "block";
  } else {
    affichageImageBus.style.display = "none";
  }
});

// buttonMural
const buttonMural = document.getElementById("mural");
const affichageImageMural = document.getElementById("imageMural");

buttonMural.addEventListener("click", function () {
  if (getComputedStyle(affichageImageMural).display != "block") {
    affichageImageMural.style.display = "block";
  } else {
    affichageImageMural.style.display = "none";
  }
});

// buttonTete
const buttonTete = document.getElementById("tete");
const affichageImageTete = document.getElementById("imageTete");

buttonTete.addEventListener("click", function () {
  if (getComputedStyle(affichageImageTete).display != "block") {
    affichageImageTete.style.display = "block";
  } else {
    affichageImageTete.style.display = "none";
  }
});
