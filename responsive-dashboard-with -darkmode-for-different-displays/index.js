const themeButton = document.querySelector("#theme-selector")

themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme') 
    //add and remove the class name    
    themeButton.querySelector('.fa-moon').classList.toggle('selected')
    themeButton.querySelector('.fa-sun').classList.toggle('selected')
}) 