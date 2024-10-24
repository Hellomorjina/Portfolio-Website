const sidemenu = document.querySelector("#sidemenu");

function openmenu(){
  sidemenu.style.transform = 'translateX(-16rem)'; 
}
function closemenu(){
  sidemenu.style.transform = 'translateX(16rem)'; 
}

//top header blur bg


const navbar = document.querySelector('nav');
const navlink = document.querySelector('nav ul');


window.addEventListener('scroll',() =>{
    if(scrollY > 50){
      navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-filter', 'backdrop-blur-lg', 'shadow-sm');
      navlink.classList.remove('bg-white','shadow-sm','bg-opacity-50',);
    }else{
      navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-filter', 'backdrop-blur-lg', 'shadow-sm');
      navlink.classList.add('bg-white','shadow-sm','bg-opacity-50',);
    }
})


// ------------dark mode------------------
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function toggleMode() {
  if ( document.documentElement.classList.contains('dark')){
      localStorage.theme = 'dark';
  }else{
      localStorage.theme = 'light';

  }
}