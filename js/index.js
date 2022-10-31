const btnDropdown = document.querySelector('#dropdown-button');

btnDropdown.addEventListener('click', () => {
    document.querySelector('#dropdown-button').classList.toggle('active');
    document.querySelector('#dropdown-menu').classList.toggle('active');
})