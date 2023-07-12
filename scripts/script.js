document.addEventListener("DOMContentLoaded", function(){

    let menu = document.querySelector(".menu");
    let itens = document.querySelector(".itens");

    menu.addEventListener("click", OpenMenu);

    function OpenMenu(){
        menu.classList.toggle("x");
        itens.classList.toggle("show");
    }

    let body = document.body;
    let nav = document.querySelector("nav");

    body.addEventListener("click", CloseMenu);

    function CloseMenu(){
        if (!nav.contains(event.target)){
            menu.classList.remove("x");
            itens.classList.remove("show");
        }
    }

}
)



