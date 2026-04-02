// JavaScript pour basculer la classe .open
function showResponsiveMenu() {
  var menu = document.getElementById("topnav_responsive_menu");
  var icon = document.getElementById("topnav_hamburger_icon");
  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
  } else {
    menu.className = "";
    icon.className = "";
  }
}
// POUR SECTION SERVICES : UNE CARTE A LA FOIS
///////////////////////////////////////////////////
document.querySelectorAll(".service-card details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll(".service-card details").forEach((other) => {
        if (other !== detail) {
          other.open = false;
        }
      });
    }
  });
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// pour charger plus de commentaires :
const btn = document.getElementById("loadMoreBtn");
const hiddenComments = document.querySelectorAll(".testimonial.hidden");

let index = 0;

btn.addEventListener("click", () => {
  if (index < hiddenComments.length) {
    hiddenComments[index].classList.remove("hidden");
    hiddenComments[index].classList.add("show");
    index++;
  }

  // cacher le bouton quand tout est affiché
  if (index === hiddenComments.length) {
    btn.style.display = "none";
  }
});
