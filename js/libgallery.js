const hoverAudio = new Audio("./hover.wav");
const activeAudio = new Audio("./active.wav");

function libGalleryPageRender() {
    const years = document.querySelectorAll("gallery year")
    const months = document.querySelectorAll("gallery month")
    const images = document.querySelectorAll("gallery img")

    // handle showing and hiding year content
    years.forEach(element => {
        const legend = element.getElementsByTagName("legend")[0]
        const content = element.getElementsByTagName("content")[0]
        legend.addEventListener("mouseenter", () => {
            new Audio("./hover.wav").play();
        });
        legend.addEventListener("click", () => {
            new Audio("./active.wav").play();
            const isVisible = (String(content.getAttribute("visible")).toLowerCase() === 'true');
            content.setAttribute("visible", !isVisible);
        })
        if (element.parentElement.getAttribute("data-libgallery-default-state") === "open") {
            content.setAttribute("visible", "true");
        }
    });

    // handle showing and hiding month content
    months.forEach(element => {
        const legend = element.getElementsByTagName("legend")[0]
        const content = element.getElementsByTagName("content")[0]
        legend.addEventListener("mouseenter", () => {
            new Audio("./hover.wav").play();
        });
        legend.addEventListener("click", () => {
            new Audio("./active.wav").play();
            const isVisible = (String(content.getAttribute("visible")).toLowerCase() === 'true');
            content.setAttribute("visible", !isVisible);
        })
        if (element.parentElement.parentElement.getAttribute("data-libgallery-default-state") === "open") {
            content.setAttribute("visible", "true");
        }
    });

    // handle image viewing
    images.forEach(element => {
        element.addEventListener("mouseenter", (e) => {
            new Audio("./hover.wav").play();
        });
        element.addEventListener("click", () => {
            new Audio("./active.wav").play();
            window.open(element.src).focus();
        });
    })
}

document.addEventListener("DOMContentLoaded", libGalleryPageRender);