
let langs_img = document.getElementById("langs_img")
let languages = document.getElementsByClassName("languages")[0]

langs_img.addEventListener("click", function () {
    let langs_content = document.getElementsByClassName("langs_content")[0]
    langs_content.style.display = "inline-block"
    langs_content.style.animation = "show-lang-menu 0.5s forwards"
})

window.addEventListener("click", (event) => {
    // Si el element pare del click no es langs_content, ni tampoc es langs_img...
    if (!event.target.parentElement.matches(".langs_content") && !event.target.parentElement.matches("#langs_img")) {
        let langs_content = document.getElementsByClassName("langs_content")[0]
        langs_content.style.animation = "hide-lang-menu 0.5s forwards"
        setTimeout(() => {
            langs_content.style.display = "none"

        }, 500)
    }
})