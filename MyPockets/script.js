
const btnRegistrar = document.getElementById('registrar');
const modal = document.getElementById('modalRegistro');
const cerrarModal = document.getElementById('cerrarModal');


btnRegistrar.addEventListener('click', () => {
  modal.style.display = 'flex'; 
});


cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none'; 
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
