function nombre() {
  num = Math.floor(Math.random() * 100) + 1; /* aléa*/
}
function devinette() {
  let nb = document.getElementById("nb").innerHTML;
  let choisi = document.getElementById("devine").value;
  if (nb > 0) {
    nb = nb - 1;
    if (choisi < num) {
      alert("non le nombre est plus grand!");
      document.getElementById("nb").innerHTML = nb;
    } else if (choisi > num) {
      document.getElementById("nb").innerHTML = nb;
      alert("non le nombre est plus petit!");
    } else {
      alert("vous avez trouver le nombre!!");
    }
  } else {
    alert("désolé c'est fini le nombre est" + num);
  }
}
