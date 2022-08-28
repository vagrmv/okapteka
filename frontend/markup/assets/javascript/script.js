const navCollapse = document.querySelector(".nav__collapse");
const navToggler = document.querySelector(".nav__toggler");
navToggler.addEventListener("click", function(e){
    e.preventDefault();
    navCollapse.classList.toggle("active");
})