const magicDiv = document.querySelectorAll(".article-row");

window.addEventListener("scroll", fAnimacion)

fAnimacion();

function fAnimacion() {
    const trigger = window.innerHeight / 6 *4;

    magicDiv.forEach(box => {
        const top = box.getBoundingClientRect().top;

        if(trigger > top) box.classList.add("show-content");
        else box.classList.remove("show-content");
    })
}
