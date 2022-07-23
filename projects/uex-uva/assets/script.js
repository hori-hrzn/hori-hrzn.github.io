let desplegable_menu = document.getElementById("desplegable_menu")
let desplegable_menu_status = "closed"

let main = document.getElementById("main")
let navbar = document.getElementById("navbar")

let buscar_vid = document.getElementById("buscar_vid")
let search_results_container = document.getElementById("search_results_container")

let vid_menu_insert_open = false



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
    // Clicked out of desplegable
    else {
        if (desplegable_menu_status == "open") {
            desplegable_menu.style.animation = "hide 0.2s forwards"
            setTimeout(() => {
                desplegable_menu.classList.add("hidden")
                desplegable_menu_status = "closed"
            }, 200)
        }
    }

    // If buscar_vid is empty and the user clicks out of the input...

    if (!event.target.matches("#buscar_vid")) {
        if (buscar_vid.value == "") {
            buscar_vid.classList.add("text-gray-400")
            buscar_vid.value = "Vid a buscar..."
        }
    }

    // Clicked outside of vid_menu_insert

    // if (!event.target.matches("#vid_menu_insert")) {
    //     if (vid_menu_insert_open == true)
    //         document.getElementById("vid_menu_insert").remove()
    //         navbar.classList.remove("filter","blur-sm")
    //         main.classList.remove("filter","blur-sm")
    //     vid_menu_insert_open = false
    // }


})

// INSERT/UPDATE/DELETE Functions

function show_vid_menu(mode) {
    switch (mode) {
        case "insert":
            vid_menu_insert();
            break
        case "update":
            vid_menu_update();
            break
        case "delete":
            vid_menu_delete();
            break
    }

}
function insert_vid() {

    let vid_nombre = document.getElementById("vid_menu_nombre").value
    let vid_origen = document.getElementById("vid_menu_origen").value
    for (let i = 0; i < document.getElementsByName("vid_menu_minoritaria").length; i++) {
        if (document.getElementsByName("vid_menu_minoritaria")[i].checked) {
            var vid_minoritaria = document.getElementsByName("vid_menu_minoritaria")[i].value
        }
    }
    let vid_descripcion = document.getElementById("vid_menu_descripcion").value


    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://uex-uva-backend.herokuapp.com/?mode=insert&nombre=" + vid_nombre + "&origen=" + vid_origen + "&minoritaria=" + vid_minoritaria + "&descripcion=" + vid_descripcion, true)
    xhr.onload = () => {

    }
    xhr.send()


}

function vid_menu_insert() {
    navbar.classList.add("filter", 'blur-sm')
    main.classList.add("filter" , 'blur-sm')

    let vid_menu_insert = document.createElement("div")
    vid_menu_insert.classList.add('container', 'absolute', 'rounded', 'border-2', 'border-gray-500', 'w-1/3', 'left-0', 'right-0', 'mx-auto', 'px-2', 'bg-white', 'flex', 'flex-col', 'items-center', 'shadow-xl', 'z-30')
    vid_menu_insert.setAttribute("id", "vid_menu_insert")

    let child = document.createElement("h2")
    child.textContent = "Nombre:"
    vid_menu_insert.appendChild(child)
    child = document.createElement("input")
    child.classList.add("border", "border-purple-600", "focus:outline-none")
    child.setAttribute("id", "vid_menu_nombre")
    vid_menu_insert.appendChild(child)

    child = document.createElement("h3")
    child.textContent = "Origen:"
    vid_menu_insert.appendChild(child)
    child = document.createElement("input")
    child.classList.add("border", "border-purple-600", "focus:outline-none")
    child.setAttribute("id", "vid_menu_origen")
    vid_menu_insert.appendChild(child)

    child = document.createElement("h3")
    child.textContent = "¿Es minoritaria?"
    vid_menu_insert.appendChild(child)

    child = document.createElement("input")
    child.setAttribute("type", "radio")
    child.setAttribute("id", "vid_menu_minoritaria_si")
    child.setAttribute("name", "vid_menu_minoritaria")
    child.setAttribute("value", "si")
    vid_menu_insert.appendChild(child)

    child = document.createElement("label")
    child.setAttribute("for", "vid_menu_minoritaria_si")
    child.textContent = "si"
    vid_menu_insert.appendChild(child)

    child = document.createElement("input")
    child.setAttribute("type", "radio")
    child.setAttribute("id", "vid_menu_minoritaria_no")
    child.setAttribute("name", "vid_menu_minoritaria")
    child.setAttribute("value", "no")
    vid_menu_insert.appendChild(child)

    child = document.createElement("label")
    child.setAttribute("for", "vid_menu_minoritaria_no")
    child.textContent = "no"
    vid_menu_insert.appendChild(child)

    child = document.createElement("h4")
    child.textContent = "Descripción:"
    vid_menu_insert.appendChild(child)
    child = document.createElement("textarea")
    child.setAttribute("id", "vid_menu_descripcion")
    child.classList.add("border", "border-purple-600", "focus:outline-none", "my-2")
    vid_menu_insert.appendChild(child)

    child = document.createElement("button")
    child.classList.add("border", "border-purple-600", 'font-semibold', "focus:outline-none", 'mb-2', "bg-purple-100", "hover:bg-purple-400")
    child.setAttribute("onclick", "insert_vid()")
    child.textContent = "Insertar vid"
    vid_menu_insert.appendChild(child)





    document.getElementById("navbar").after(vid_menu_insert)

    setTimeout(() => {
        vid_menu_insert_open = true
    }, 100)


}

function update_vid() {

}

function vid_menu_update() {

}

function delete_vid() {

}

function vid_menu_delete() {

}



// Input text 'buscar_vid' events


buscar_vid.value = "Vid a buscar..."


buscar_vid.addEventListener("click", () => {
    if (buscar_vid.value == "Vid a buscar...") {
        buscar_vid.value = ""
    }
})

buscar_vid.addEventListener("keyup", () => {
    if (buscar_vid.classList.contains("text-gray-400")) {
        buscar_vid.classList.remove("text-gray-400")
    }
    let vid = buscar_vid.value;

    search_results_container.innerHTML = ""


    // IF BUSCAR_VID VALUE IS EMPTY, NO RESULTS APPEAR
    if (vid == "") {
        return
    }


    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://uex-uva-backend.herokuapp.com/?mode=request&vid=" + vid, true)
    xhr.onprogress = () => {
        search_results_container.textContent = "Searching..."
    }
    xhr.onload = () => {
        // CLEAN ONPROGRESS
        search_results_container.textContent = ""
        // JSON IS PARSED INTO AN ARRAY WITH JSON OBJECTS
        let data = JSON.parse(xhr.responseText)
        // DATA IS THE ARRAY WITH THE OBJECTS
        // EXAMPLE: CALLING 1 OBJECT AND RETURN IT'S ORIGEN -> data[0].origen

        for (let i = 0; i < data.length; i++) {
            let vid_nombre = data[i].nombre
            let vid_origen = data[i].origen
            let vid_descripcion = data[i].descripcion
            let vid_minoritaria = data[i].minoritaria



            let vid_result = document.createElement("div")
            vid_result.setAttribute("id", "search_result")

            let vid_result_nombre = document.createElement("h3")
            let vid_result_link = document.createElement("a")
            vid_result_link.setAttribute("href", "http://")
            vid_result_link.classList.add("text-purple-600", "font-semibold", "underline")
            vid_result_link.textContent = vid_nombre

            // WHEN THE NAME IS CLICKED...
            vid_result_link.addEventListener("click", () => {
                let vid_data = document.getElementById("vid_data")
                let vid_data_nombre = document.getElementById("vid_data_nombre")
                let vid_data_origen = document.getElementById("vid_data_origen")
                let vid_data_minoritaria = document.getElementById("vid_data_minoritaria")
                let vid_data_descripcion = document.getElementById("vid_data_descripcion")

                vid_data_nombre.textContent = vid_nombre
                vid_data_origen.textContent = vid_origen
                vid_data_minoritaria.textContent = vid_minoritaria
                vid_data_descripcion.textContent = vid_descripcion

                vid_data.classList.remove('hidden')



            })


            vid_result_nombre.appendChild(vid_result_link)
            vid_result.appendChild(vid_result_nombre)

            search_results_container.appendChild(vid_result)


        }
    }
    xhr.send()

})
