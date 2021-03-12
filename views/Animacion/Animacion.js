const cubo = document.getElementById("r");
const letra = document.getElementById("letra");
cubo.addEventListener("click", mover);

function mover(){
    cubo.classList.toggle('rr');
    letra.classList.toggle('letra2');
    // console.log("sss")
}
