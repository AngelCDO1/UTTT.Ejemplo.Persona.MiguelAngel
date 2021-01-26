function validar() {
    var claveu = document.getElementById("txtClaveUnica").value;
    var sex = document.getElementById("ddlSexo");
    var nom = document.getElementById("txtNombre").value;
    var apaterno = document.getElementById("txtAPaterno").value;
    var mpaterno = document.getElementById("txtAMaterno").value;
    var hermanos = document.getElementById("txtHermanos").value;
    var calendario = document.getElementById("Vald");
    var sexdll = sex.options[sex.selectedIndex].value;
    var fecha = calendario.defaultValue;
    var date = parseInt(("" + fecha.substr(6, 10)));
    var ope = 2021 - date;

    var bandera = true;
    var mensaje = "Obligatorio llenar los campos ";

    if (claveu == null || nom == null || apaterno == null || mpaterno == null || date == null) {
        mensaje = "obligatorio llenar los campos";
        bandera = false;
    } else if (!(/\d{3}$/.test(cunica))) {

        mensaje = "solo se admiten numeros minimo 3 digitos";
        bandera = false;

    } else if (!(/[A-z]{3}/.test(nom)) || !(/[A-z]{3}/.test(apaterno)) || !(/[A-z]{3}/.test(mpaterno))) {

        mensaje = "solo se admiten nombre mayores de 3 letras";
        bandera = false;

    } else if (ope <= 18) {

        mensaje = "Debe de ser mayor de edad";
        bandera = false;

    } else if (isNaN(hermanos) == true) {

        mensaje = "Solo ingrese numeros enteros";
        bandera = false;

    } else if (sexdll < 0 || sexdll > 2) {

        mensaje = "Ingresa un sexo";
        bandera = false;

    }

    alert(mensaje);
    return bandera;

}