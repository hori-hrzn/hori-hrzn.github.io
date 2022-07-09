// This script is embedded in the main index.html file, and when it loads, it redirects the user to the correct language page

let lang = navigator.language
// ca-valencia, ca, es, en...

if (lang == "es") {
    window.location.replace("./es/")
} else if (lang == "ca" || lang == "ca-valencia") {
    window.location.replace("./val/")
} else {
    window.location.replace("./en/")
}
