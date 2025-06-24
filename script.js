const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu")
close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
})
open.addEventListener("click", () => { menu.style.visibility = "visible"; })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const searchInput = document.querySelector('input[type="search"]');
const items = document.querySelectorAll(".section2 .items");

searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    items.forEach(item => {
        const name = item.querySelector(".name").textContent.toLowerCase();
        item.style.display = name.includes(query) ? "block" : "none";
    });
});
