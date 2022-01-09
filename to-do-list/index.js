const elementInput = document.querySelector('#input-user')
const elementButton = document.querySelector('#btn')
const elementsList = document.querySelector('.elements-list')

elementButton.addEventListener('click', elementsAction)
elementsList.addEventListener('click', deleteElement)


function elementsAction() {
    const divElement = document.createElement('div')
    divElement.classList.add('element-div')

    const liElement = document.createElement('li')
    liElement.innerText = elementInput.value
    liElement.classList.add('element-li') 
    divElement.appendChild(liElement)

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('element-btn1')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    divElement.appendChild(checkBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('element-btn2')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
    divElement.appendChild(deleteBtn)

    elementsList.appendChild(divElement)
    elementInput.value = ""
}
function deleteElement(event) {
    const element = event.target

    if(element.classList[0] === "element-btn2") {
      const list = element.parentElement
      list.remove()
    }
    if(element.classList[0] === "element-btn1") {
        const list = element.parentElement
        list.classList.toggle('marked-complete')
    }
}
