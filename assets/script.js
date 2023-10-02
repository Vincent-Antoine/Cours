function change() {
  titre.style.color = "yellow";
  setTimeout(() => {
    titre.style.color = "yellow";
  }, 2000);
  setTimeout(() => {
    titre.style.color = "blue";
  }, 2000);
}

change();
setInterval(change, 4000);
