const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const checkboxRef = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body');


const onDarkTheme = () => {
    body.classList.contains('light-theme') && body.classList.remove('light-theme');
    body.classList.add('dark-theme')
}


const onLightTheme = () => {
    body.classList.contains('dark-theme') && body.classList.remove('dark-theme');
    body.classList.add('light-theme')
}


if (localStorage.getItem('theme')) {
    const checked = JSON.parse(localStorage.getItem('theme'));
    checkboxRef.checked = checked;
    checked ? onDarkTheme() : onLightTheme();
}


const checkboxState = e => {
    localStorage.setItem('theme', JSON.stringify(e.target.checked));
    e.target.checked ? onDarkTheme() : onLightTheme();

};

checkboxRef.addEventListener('change', checkboxState);