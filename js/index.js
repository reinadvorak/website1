open = document.getElementById('open')
container = document.getElementById('container')
btn = document.getElementById('btn')
close = document.getElementById('close')

close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

open.addEventListener('click', () => {
    container.classList.add('show-container')
})

close.addEventListener('click', () => {
    container.classList.remove('show-container')
})
