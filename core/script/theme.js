/* ##### Theme Dark or Light ##### */

const colorScheme = document.querySelector('meta[name="color-scheme"]');
const themeText = document.querySelector('.navheader__theme--text');
const themeToggler = document.getElementById('theme-toggle');

setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);
    themeText.innerText = theme;

    themeToggler.addEventListener("click", () => { 
        const newTheme = rotateTheme(theme);
        applyTheme(newTheme);
        themeText.innerText = newTheme;
        saveTheme(newTheme);
        
        theme = newTheme;
    }
)}, 100);

function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
    document.body.className = theme;
    colorScheme.content = theme;
}

function rotateTheme(theme) {
    if (theme === 'dark') {
        return 'light'
    }   return 'dark';
}