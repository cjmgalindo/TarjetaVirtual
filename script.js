const modal = document.getElementById('modal');
const span = document.getElementsByClassName("close")[0];
const modalText = document.getElementById('modal-text');
const contact = document.querySelector("#btn-contact")



span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const modalPerfil = document.getElementsByClassName("modal-content-perfil")[0];

const modalCompartir = document.getElementsByClassName("modal-content-compartir")[0];
const modalEscanear = document.getElementsByClassName("modal-content-escanear")[0];
const modalUbicacion = document.getElementsByClassName("modal-content-ubicacion")[0];
const modalPagos = document.getElementsByClassName("modal-content-pagos")[0];

function cerrar() {
  modalPerfil.style.display = "none"
  modalCompartir.style.display = "none"
  modalEscanear.style.display = "none"
  // modalUbicacion.style.display = "none"
  // modalPagos.style.display = "none"
}
function libre(p) {
  if( p == "perfil"){
    modalPerfil.style.display = "flex"
  }
  if( p == "compartir"){
    modalCompartir.style.display = "flex"
  }
  if( p == "escanear"){
    modalEscanear.style.display = "flex"
  }
  
  // modalCompartir.style.display = "none"
  // modalEscanear.style.display = "none"
  // modalUbicacion.style.display = "none"
  // modalPagos.style.display = "none"
}

const btn = document.getElementById('btn1'); 
btn.onclick = function() {
  modal.style.display = "block";
  cerrar()
  libre("perfil")
}

const btn2 = document.getElementById('btn2');
btn2.onclick = function() {
  modal.style.display = "block";
  

  cerrar()
  libre("compartir")
}

const btn3 = document.getElementById('btn3');
btn3.onclick = function() {
  modal.style.display = "block";
  
  cerrar()
  libre("escanear")
}

const btn4 = document.getElementById('btn4');
btn4.onclick = function() {
  modal.style.display = "block";
  
}

const btn5 = document.getElementById('btn5');
btn5.onclick = function() {
  modal.style.display = "block";
  
}


const closeBtn = document.querySelector('.close-btn');



// Función para abrir el menú
function openNav() {
  document.getElementById("sidebar").style.width = "40vw";
  document.getElementById("menuOverlay").style.display = "block";
}

// Función para cerrar el menú
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("menuOverlay").style.display = "none";
}

// Función para cerrar el menú al hacer clic fuera de este
document.getElementById("menuOverlay").addEventListener("click", function() {
  closeNav();
});

closeBtn.addEventListener('click', () => {
  closeNav()
});

contact,addEventListener()