const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('#hLink')
const darkButton = document.querySelector('#moon')
const darkMode = document.querySelector('#body');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    hamburger.classList.toggle('bg-white')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden')
        hamburger.classList.toggle('bg-white')
    })    
});

darkButton.addEventListener('click', () => {
    darkMode.classList.toggle('dark');
})