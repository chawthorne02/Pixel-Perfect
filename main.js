

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const headerLinks = document.getElementsByClassName('header-links')[0]

toggleButton.addEventListener('click', () =>  {
    headerLinks.classList.toggle('active')
})  