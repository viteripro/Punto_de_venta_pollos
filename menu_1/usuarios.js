const table = document.getElementById('user-table');
const tableBody = table.querySelector('tbody');

fetch('config/data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const row = tableBody.insertRow();
      const nameCell = row.insertCell();
      nameCell.textContent = item.nombre;
      const emailCell = row.insertCell();
      emailCell.textContent = item.correo;
      const ageCell = row.insertCell();
      ageCell.textContent = item.edad;
    });
  });