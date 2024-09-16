const sidemenu = document.querySelector("#sidemenu");

function openmenu(){
  sidemenu.style.transform = 'translateX(-16rem)'; 
}
function closemenu(){
  sidemenu.style.transform = 'translateX(16rem)'; 
}