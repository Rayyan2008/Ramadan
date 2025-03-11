const body = document.body;
const nightMode = document.getElementById('night-mode');
const nightModeIcon = nightMode.querySelector('i');

const themes = {
    "light-green": "#e8f5e9",
    "light-blue": "#e3f2fd",
    "light-grey": "#eceff1",
    "dark-green": "#1b5e20",
    "dark-blue": "#0d47a1",
    "dark-grey": "#263238"
};

document.querySelectorAll(".theme-controls button").forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.id;
        body.style.setProperty('--primary-bg', themes[theme]);

        if (theme.includes("dark")) {
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
        }
    });
});

nightMode.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    nightModeIcon.classList.toggle('fa-moon');
    nightModeIcon.classList.toggle('fa-sun');
});

document.getElementById('counter').addEventListener('click', () => window.location.href = 'counter.html');
document.getElementById('duas').addEventListener('click', () => window.location.href = 'duas.html');
document.getElementById('imaan').addEventListener('click', () => window.location.href = 'imaan.html');
