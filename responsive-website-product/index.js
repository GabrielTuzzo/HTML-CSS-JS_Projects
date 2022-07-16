const listMenu = document.querySelector('#ul-list')
const menuDrop = document.querySelector('#dropMenu')

menuDrop.addEventListener('click', () => {
    listMenu.classList.toggle("active")
    menuDrop.classList.toggle("active")
})

