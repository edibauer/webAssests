/*Se selecciona la clase en el documento y se guarda en un a vribale local para manipular en el programa*/
const sidebarButton = document.querySelector ('.sidebar__button');
/*Verificaddor
console.log (sidebarButton);*/

/*Se le coloca un metodo a la varibale creada. Dicho metodo debe contener sus argumentos*/ 
sidebarButton.addEventListener ('click', function () {
    /*Verificador
    console.log ('clickeado');*/

    /*Se seelciona una parete del docuetno por su ID y se le coloca un metodo para agregar y quietar una clase */
    document.getElementById ('sidebar').classList.toggle ('sidebar__active');
})