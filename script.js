(() => {
function mymethod(){
    const ambientmode = document.getElementsByClassName('ytp-menuitem')[0]
        if (ambientmode.getAttribute('aria-checked') === "true")    {
            ambientmode.click()
        } else {
        }
}
window.setTimeout(mymethod, 5000)
})()
