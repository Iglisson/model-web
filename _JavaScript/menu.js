const menu_icon = document.querySelector(".menu-icon");

// adicionando a classe show-menu
menu_icon.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
});