function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
let val = getParameterByName('cedula');

function muestra(cedula) {
    let data = JSON.parse(localStorage.getItem("Profesor"))
    for (let item in data) {
        if (data[item].cedula == cedula) {
            let pe = document.querySelector('#cedImg');
            pe.setAttribute('src', data[item].fotoCedula)
            let ced = document.querySelector('#uno')
            let nom = document.querySelector('#dos')
            let ape = document.querySelector('#tres')
            let fechh = document.querySelector('#cuatro')
            let sex = document.querySelector('#sexo');
            let correo = document.querySelector('#correo')
            let des = document.querySelector('#des');
            let es = document.querySelector('#escuela')
            ced.innerHTML = "Cedula: " + data[item].cedula
            nom.innerHTML = "Nombre: " + data[item].nombre
            ape.innerHTML = "Apellido: " + data[item].apellido
            fechh.innerHTML = "Fecha Nacimiento: " + data[item].fechaNacimiento
            sex.innerHTML = "Sexo: " + data[item].sexo
            correo.innerHTML = "Correo: " + data[item].correo
            des.innerHTML = "Descripcion de PC: " + data[item].descripcion
            es.innerHTML = "Escuela: " + data[item].escuela
            let foto = document.querySelector('#foto')
            foto.setAttribute('src', localStorage.getItem(data[item].cedula + data[item].escuela))
        }
    }

}

muestra(val)