const navCollapse = document.querySelector(".nav__collapse");
const navToggler = document.querySelector(".nav__toggler");
navToggler.addEventListener("click", function(e){
    e.preventDefault();
    navCollapse.classList.toggle("active");
})

const navCategoriesItems = document.querySelectorAll(".nav__categories-item > a")
for (let navCategoriesItem of navCategoriesItems){
    navCategoriesItem.addEventListener("click", function(e){
        console.log(navCategoriesItem);
        e.preventDefault();

        for (let item of navCategoriesItems){
            console.log("removed")
            item.classList.remove("active");
        }

        navCategoriesItem.classList.add("active");
    });
}