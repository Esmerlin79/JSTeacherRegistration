 
    let tab = document.querySelector('#muestra')

    let data = JSON.parse(localStorage.getItem("Profesor"));
    tab.innerHTML =" ";
    for(let item in data){
        tab.innerHTML +=`
        <tr>
        <td>${data[item].cedula}</td>
        <td>${data[item].nombre}</td>
        <td>${data[item].apellido}</td>
        <td>${data[item].sexo}</td>
        <td>${data[item].escuela}</td>
        <td><a href="vista.html?cedula=${data[item].cedula}" class="btn btn-primary">Imprimir<a> </td>
        <td><a href="registro.html?cedula=${data[item].cedula}" class="btn btn-danger">Editar<a/></td>
       </tr>
        `;
      
    }
