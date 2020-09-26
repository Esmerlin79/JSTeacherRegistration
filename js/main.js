// https://api.adamix.net/apec/cedula/40230757391

$(document).ready(function () {

    document.querySelector('#form').addEventListener('submit', function (e) {
        // Para registro
        let cedula = document.querySelector('#cedula').value;
        let escuela = document.querySelector('#escuela').value;
        fetch('https://api.adamix.net/apec/cedula/' + cedula)
            .then(data => data.json())
            .then(data => {
                var nombre = data.Nombres;
                var apellido = data.Apellido1 + data.Apellido2
                var sexo = data.IdSexo
                var fechaN = data.FechaNacimiento
                var fotoCed = data.foto
                let correo = document.querySelector('#correo').value;
                let des = document.querySelector('#des').value;

                console.log(reader.result)
                let Profesor = {
                    cedula: cedula,
                    nombre: nombre,
                    apellido: apellido,
                    sexo: sexo,
                    fechaNacimiento: fechaN,
                    fotoCedula: fotoCed,
                    correo: correo,
                    escuela: escuela,
                    descripcion: des
                }

                if (localStorage.getItem("Profesor") == null) {
                    let arr = [];
                    arr.push(Profesor);
                    localStorage.setItem("Profesor", JSON.stringify(arr))

                } else {
                    let arr = JSON.parse(localStorage.getItem("Profesor"))
                    arr.push(Profesor)
                    localStorage.setItem("Profesor", JSON.stringify(arr))
                }

            })

        const foto = document.getElementById('foto');
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            localStorage.setItem(cedula + escuela, reader.result)
            e.preventDefault()
        })
        reader.readAsDataURL(foto.files[0])

        setInterval(function () {
            window.location = "index.html"
        }, 1000)


        e.preventDefault()


    })

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function edita(val) {
        let data = [];
        data = JSON.parse(localStorage.getItem("Profesor"))
        for (let item in data) {
            if (data[item].cedula == val) {
                document.querySelector('#cedula').value = data[item].cedula;
                document.querySelector('#correo').value = data[item].correo;
                document.querySelector('#des').value = data[item].descripcion;
                document.querySelector('#escuela').value = data[item].escuela;
                data.splice(item, 1)
            }
            localStorage.setItem('Profesor', JSON.stringify(data))
            localStorage.removeItem(data[item].cedula + data[item].escuela)
            const foto = document.getElementById('foto');
            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                localStorage.setItem(cedula + escuela, reader.result)
                e.preventDefault()
            })
            reader.readAsDataURL(foto.files[0])

            setInterval(function () {
                window.location = "index.html"
            }, 1000)


        }

    }
    let val = getParameterByName('cedula');
    console.log(val)
    edita(val);

})