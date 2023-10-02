let titre = document.getElementById("title");

function change() {
  titre.style.color = "yellow";
  setTimeout(() => {
    titre.style.color = "blue";
  }, 2000);
}

change();
setInterval(change, 4000);
