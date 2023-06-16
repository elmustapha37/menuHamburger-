const mainM = document.querySelector(".mainMenu");
const closeM = document.querySelector(".closeMenu");
const openM = document.querySelector(".openMenu");

openM.addEventListener("click",open);
closeM.addEventListener("click",close);

function open(){
    mainM.style.display="flex";
    mainM.style.top=0;
}
function close(){
    mainM.style.top="-100%";
}