window.onload = function () {
    var theme = localStorage.getItem("theme") == null ? "light" : localStorage.getItem("theme");
    if (theme == "dark") {
        document.getElementById('darkModeToggle').checked = true;
    } else {
        document.getElementById('darkModeToggle').checked = false;
    }
    localStorage.setItem("theme", theme);
    detectColorScheme(theme);
}

//determines if the user has a set theme
function detectColorScheme(theme) {
    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

function toggleDarkMode() {
    if (document.getElementById('darkModeToggle').checked) {
        detectColorScheme("dark");
        localStorage.setItem("theme", "dark");
    } else {
        detectColorScheme("light");
        localStorage.setItem("theme", "light");
    }
}

SimpleScrollbar.initAll();