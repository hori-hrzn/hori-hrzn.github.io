let desplegable_menu = document.getElementById("desplegable_menu")
let desplegable_menu_status = "closed"

window.addEventListener("click", (event) => {
    if (event.target.matches("#desplegable_but")) {
        // Desplegable clicked
        if (desplegable_menu_status == "closed") {
            desplegable_menu.style.animation = "show 0.2s forwards"
            desplegable_menu.classList.remove("hidden")
            desplegable_menu_status = "open"
        } else {
            desplegable_menu.style.animation = "hide 0.2s forwards"
            setTimeout(() => {
                desplegable_menu.classList.add("hidden")
                desplegable_menu_status = "closed"
            }, 200)
        }
    }
    // Clicked out
    else {
        if (desplegable_menu_status == "open") {
            desplegable_menu.style.animation = "hide 0.2s forwards"
            setTimeout(() => {
                desplegable_menu.classList.add("hidden")
                desplegable_menu_status = "closed"
            }, 200)
        }
    }

})
