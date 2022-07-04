let lang = navigator.language

console.log(lang)
// ca-valencia, ca, es, en...
if (lang=="es"){
    window.location.replace("./es/")
}
else if (lang=="en"){
    window.location.replace("./en/")

}