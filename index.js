const iconomenu= document.querySelector (".iconomenu");
const navul= document.querySelector(".nav_ul");
iconomenu.addEventListener("click", ()=>{
    navul.classList.toggle("activardesactivar");
    
});
windows.onScroll=()=>{
    navul.classList.remove("activardesactivar");
}
