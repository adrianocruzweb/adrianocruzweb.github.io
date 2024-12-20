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

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(menu => {
    menu.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        menu.classList.add("active");
    })
});

const backToTopButton = document.getElementById("backToTop");
window.onscroll = function() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:
        'smooth'
    });
});