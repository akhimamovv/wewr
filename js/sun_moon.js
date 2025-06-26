
const themeToggleBtn = document.getElementById('sun');
const allH5 = document.getElementsByTagName("h5");
const allH3 = document.getElementsByTagName("h3");
const allLi = document.getElementsByTagName("li");
const allH2 = document.getElementsByTagName("h2");
const allP = document.getElementsByTagName("p");
const activeNavLink = document.getElementsByClassName('header__nav-link--active')[0];
const specialElements = document.getElementsByClassName("ten-1-min");
const serviceCards = document.getElementsByClassName("services__card");
const aboutSection = document.getElementsByClassName("about__text")[0];
const navLinks = document.getElementsByClassName("header__nav-link");
const dizainercard = document.getElementsByClassName('designer-card');


if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('moon');
    applyDarkModeStyles();
} else {
    applyLightModeStyles();
}


function toggleTheme() {
    document.body.classList.toggle('moon');

    if (document.body.classList.contains('moon')) {
        localStorage.setItem('darkMode', 'enabled');
        applyDarkModeStyles();
    } else {
        localStorage.setItem('darkMode', 'disabled');
        applyLightModeStyles();
    }
}


themeToggleBtn.addEventListener('click', toggleTheme);

function applyDarkModeStyles() {
    themeToggleBtn.style.backgroundColor = "white";
    themeToggleBtn.style.color = "black";
    aboutSection.style.backgroundColor = "rgb(78, 78, 78)";
    themeToggleBtn.textContent = 'sun';
    activeNavLink.style.color = "rgb(92, 238, 214)";

    updateElementsColor(specialElements, "rgb(78, 78, 78)");
    updateElementsColor(serviceCards, "rgb(78, 78, 78)");
    updateElementsColor(navLinks, "rgb(204, 0, 255)", true);
    updateElementsColor(allH3, "rgb(204, 0, 255)", true);
    updateElementsColor(allH5, "rgb(255, 187, 0)", true);
    updateElementsColor(allH2, "rgb(78, 216, 228)", true);
    updateElementsColor(allP, "rgb(68, 255, 168)", true);
    updateElementsColor(allLi, "rgb(151, 255, 219)", true);
    updateElementsColor(dizainercard, "rgb(78, 78, 78)");
}

// Применение стилей светлой темы
function applyLightModeStyles() {
    themeToggleBtn.style.backgroundColor = "gray";
    themeToggleBtn.style.color = "white";
    activeNavLink.style.color = "rgb(106, 183, 157)";
    aboutSection.style.backgroundColor = "rgb(255, 255, 255)";
    themeToggleBtn.textContent = 'moon';

    updateElementsColor(allH5, "rgb(0, 0, 0)", true);
    updateElementsColor(allH2, "rgb(0, 0, 0)", true);
    updateElementsColor(allH2, "rgb(0, 0, 0)", true);
    updateElementsColor(navLinks, "rgb(0, 0, 0)", true);
    updateElementsColor(allP, "rgb(91, 92, 92)", true);
    updateElementsColor(allLi, "rgb(98, 98, 98)", true);
    updateElementsColor(specialElements, "rgb(255, 255, 255)");
    updateElementsColor(serviceCards, "rgb(255, 255, 255)");
    updateElementsColor(dizainercard, "rgb(152, 207, 190)");
}


function updateElementsColor(elements, color, isTextColor = false) {
    for (let i = 0; i < elements.length; i++) {
        if (isTextColor) {
            elements[i].style.color = color;
        } else {
            elements[i].style.backgroundColor = color;
        }
    }
}

