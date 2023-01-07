export default function resultadoJugador() {
  const $select = document.getElementById("box-month"),
    $imagen = document.getElementById("imagen-jugador");

  $select.addEventListener("change", (e) => {
    $imagen.src = `assets/jugadores/${e.target.value}.jpg`;
  });
}
