export default function selectMonths() {
  const $select = document.getElementById("box-month"),
    documentFragment = document.createDocumentFragment();

  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  months.forEach((el) => {
    const $month = document.createElement("option");
    $month.value = el;
    $month.textContent = el;
    documentFragment.appendChild($month);
    $select.appendChild(documentFragment);
  });
}
