const PANEL = document.querySelectorAll(".panel");

PANEL.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeClassList()
        panel.classList.add('active')
    })

})

function removeClassList() {
    PANEL.forEach((panel) => {
        panel.classList.remove('active')
    })
}