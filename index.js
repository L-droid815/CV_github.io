//Esta es la parte del menu hamburguesa

var menu_visible = false;

//Aqui es cuando se conecta con el id

let menu = document.getElementById("nav")

function MostrarOcultarMenu(){

    //Esta es la parte en la cual el menu si esta oculto

    if(menu_visible == false){

        //Esta es la parte en la cual el menu se esconde

        menu.style.display = "block"

        //Esta es la parte que comprueba que el menu si esta bien se esconde

        menu_visible =  true

    }

    else{

        menu.style.display = "none"

        menu_visible = false
    }
}

//Esta es la parte en el que escojo una opcion y el menu hamburguesa se esconde

let links = document.querySelectorAll("nav a");

for (var x = 0; x < links.length; x++){

    links[x].onclick = function(){

        menu.style.display = "none"

        menu_visible = false;
    };
}

