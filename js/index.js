const btnDropdown = document.querySelector('#dropdown-button');

btnDropdown.addEventListener('focus', () => {
    document.querySelector('#dropdown-menu').classList.add('active');
})

btnDropdown.addEventListener('blur', () => {
    document.querySelector('#dropdown-menu').classList.remove('active');
})