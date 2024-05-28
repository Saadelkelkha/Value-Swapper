function permuter(){
    var nombre = document.getElementsByTagName("input");
    var n = nombre[0].value;
    nombre[0].value = nombre[1].value;
    nombre[1].value = n;
};