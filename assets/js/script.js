
let langs_img = document.getElementById("langs_img")

langs_img.addEventListener("click", function () {
    let langs_content = document.getElementsByClassName("langs_content")[0]
    langs_content.style.display = "inline-block"
})

langs_img.addEventListener("blur", ()=>{
    let langs_content = document.getElementsByClassName("langs_content")[0]
    langs_content.style.display = "none"
})