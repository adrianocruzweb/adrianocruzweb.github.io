const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

const changeTheme = () => {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark") rootHtml.setAttribute("data-theme","light")
    if(currentTheme === "light") rootHtml.setAttribute("data-theme","dark")

    toggleTheme.classList.toggle("bi-triangle")
    toggleTheme.classList.toggle("bi-triangle-fill")
}

toggleTheme.addEventListener("click", changeTheme);