function guardar(){
   
    var _id = document.getElementById("id").value;
    var _id = _id.trim();
    var _ob = document.getElementById("ob").value;
    var _ob = _ob.trim();
    var _tipo = document.getElementById("tipo").value;
    if(_id==""){
        alert("Por favor ingrese el numero de identificaciòn");
        return false;
    }
    if (_ob.length == ""){
        alert("Por favor ingrese en el campo de observaciones(debe ser menor a 5 caracteres)");
        return false;
    }
    if(_ob == ""){
        alert("Debe completar el campo observaciones!!");
        return false;
    }
    if(_tipo == "value3"){
        alert("Debe ingresar un tipo de artìculo, en el campo tipo");
        return false;
    }
    var fila="<tr><th>"+_id+"</th><th>"+_tipo +"</th><th>"+_ob +"</th></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
}