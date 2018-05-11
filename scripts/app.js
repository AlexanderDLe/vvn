let navSlide = document.getElementById('navSlide');
let toggleNav = document.getElementById('toggleNav');
let exitNav = document.getElementById('exitNav');
let imgLogo = document.getElementById('imgLogo');
let clientWidth = window.innerWidth;
// alert(clientWidth);

navSlide.addEventListener('click', function(){
  toggleNav.classList.remove("toggleNav");
});
exitNav.addEventListener('click', function(){
  toggleNav.classList.add("toggleNav");
});
