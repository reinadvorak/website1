open = document.getElementById('open')
container = document.getElementById('container')
btn = document.getElementById('btn')
close = document.getElementById('close')

close.addEventListener('click', () => {
    btn.classList.add('show-btn')
})

open.addEventListener('click', () => {
    container.classList.add('show-container')
})

close.addEventListener('click', () => {
    container.classList.remove('show-container')
})

open.addEventListener('click', () => {
    btn.classList.remove('show-btn')
})
