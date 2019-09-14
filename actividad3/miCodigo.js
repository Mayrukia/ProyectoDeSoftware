function cancelar(){
    document.getElementById("id").reset;
    document.getElementById("ob").reset;
    document.getElementById("tipo").reset;
}

function guardar(){
    var id=document.getElementById("id").value;
    var id=id.trim();
    var ob=document.getElementById("ob").value;
    var ob=ob.trim();
    var tipo = document.getElementById("tipo").value;
    if(id== "" ){
        alert("Por favor ingrese el numero de identificaciòn");
        return false;
    }
    if (ob.length >= 255){
        alert("Por favor ingrese en el campo de observaciones(debe ser menor a 5 caracteres)");
        return false;
    }
    if(ob == ""){
        alert("Debe completar el campo observaciones!!");
        return false;
    }
    if(tipo == ""){
        alert("Debe ingresar un tipo de artìculo, en el campo tipo");
        return false;
    }
    var fila = document.createElement("tr");
    var celda0 = document.createElement("td");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    
    var textCelda0 = document.createTextNode(id);
    var textCelda1 = document.createTextNode(tipo);
    var textCelda2 = document.createTextNode(ob);

    celda0.appendChild(textCelda0);
    celda1.appendChild(textCelda1);
    celda2.appendChild(textCelda2);

    fila.appendChild(celda0);
    fila.appendChild(celda1);
    fila.appendChild(celda2);

    var tds = document.getElementsByTagName("td");

    for (i=0;i<tds.length;i++){
        if (tds[i].innerHTML == id){
            alert("Identificador repetido, ingrese un nuevo id");
            return false;
        }
    }

    tabla.appendChild(fila);
    return false;

   
}
