const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 


  fetch('config/data.json')
    .then(response => response.json())
    .then(data =>{
     
    const usuario = data.usuarios.find(u => u.usuario === username.value && u.contraseña === password.value);
   
    if (usuario) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'menu_1/index.html'; 
      } else {
        alert('Credenciales inválidas. Intente nuevamente.'); 
      username.style.border= "3px solid red";
      password.style.border= "3px solid red";
 
    }
})


}); 