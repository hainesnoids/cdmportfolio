function pageInit() {
    const pageBounds = document.querySelector("pagebounds");
    const pages = document.querySelectorAll('pagebounds > page');
    for (let idx = 0; idx < pages.length; idx++) {
        let page = pages[idx];
        const pageId = page.getAttribute('id');
        const pageLink = document.querySelector(`*[data-page-id="${pageId}"]`);
        if (pageLink) {
            pageLink.addEventListener('click', () => {
                document.querySelectorAll('pagebounds > page').forEach((b) => {b.classList.remove('active')});
                page.classList.add('active');
                document.querySelectorAll('*[data-page-id]').forEach((b) => {b.classList.remove('active')});
                pageLink.classList.add('active');
                pageBounds.style.left = `-${idx}00%`;
                window.scrollTo({behavior: 'smooth', top: 0});
            })
        } else {
            console.warn(`Page ${pageId} does not have a corresponding link to it.`);
        }
    }
}

document.addEventListener('DOMContentLoaded', pageInit)

// header parallax
// ALSO ADD PARALLAX TO THE LOGO (IT LOOKS SICK ASF)

window.addEventListener("scroll", () => {
    //const background = document.querySelector("header");
    const background = document.querySelector(".parallax-background");
    const midground = document.querySelector("header");

    // background
    window.requestAnimationFrame(() => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const x = scrollX * 0.67; // haha six seven!!
        const y = scrollY * 0.67; // stfu brainrot kid
        background.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
        background.style.height = document.body.getBoundingClientRect().height + "px";
    });

    // midground
    window.requestAnimationFrame(() => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const x = scrollX * 0.33;
        const y = scrollY * 0.33;
        midground.style.left = `${x}px`;
        midground.style.top = `${y}px`;
    });
});