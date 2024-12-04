const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;


const naoAutorizados = document.querySelectorAll('.nao--autorizado');

naoAutorizados.forEach((botao) => {
    botao.addEventListener('click', function() {
        const popup = document.getElementById('popup');
        popup.classList.remove('hidden');
        popup.style.display = 'flex';
    });
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
    popup.style.display = 'none';
});


const changeTheme = () => {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark") rootHtml.setAttribute("data-theme","light")
    if(currentTheme === "light") rootHtml.setAttribute("data-theme","dark")

    toggleTheme.classList.toggle("bi-triangle")
    toggleTheme.classList.toggle("bi-triangle-fill")
}

toggleTheme.addEventListener("click", changeTheme);


const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accodionActive = accordionItem.classList.contains("active");

        accodionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
});
