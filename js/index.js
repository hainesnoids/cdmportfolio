function pageInit() {
    const pageBounds = document.querySelector("pagebounds");
    const pages = document.querySelectorAll('pagebounds > page');
    for (let idx = 0; idx < pages.length; idx++) {
        let page = pages[idx];
        const pageId = page.getAttribute('id');
        const pageLink = document.querySelector(`a[data-page-id="${pageId}"]`);
        if (pageLink) {
            pageLink.addEventListener('click', () => {
                page.classList.add('active');
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
window.addEventListener("scroll", () => {
    const background = document.querySelector("header");
    window.requestAnimationFrame(() => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const x = scrollX * 0.67;
        const y = scrollY * 0.67;
        background.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
    });
});