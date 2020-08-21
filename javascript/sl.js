var imagenes = [
    "/imagenes/mg1.svg",
    "/imagenes/mg2.svg",
    "/imagenes/mg3.svg"
];
var num = 0;

function siguiente() {
    var slider =
        document.getElementById("slider");
    num++;
    if (num >= imagenes.length) {
        num = 0;
    }
    slider.src = imagenes[num];
};
var num = 0;

function anterior() {
    var slider =
        document.getElementById("slider")
    num--;
    if (num < 0) {
        num = imagenes.length - 1
    };
    slider.src = imagenes[num];
};

