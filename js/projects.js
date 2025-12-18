let projectDict = [
    'y2026-speed-run',
    'y2026-green-screen'
]

async function openProject(id) {
    const projectData = await fetch(`projects/${id}.json`).then(res => res.json());
    const template = document.getElementById('project-popup');
    const clone = template.content.firstElementChild.cloneNode(true);

    clone.querySelector('.project-assignment').innerText = projectData['assignment'];
    clone.querySelector('.project-title').innerText = projectData['title'];
    clone.querySelector('.project-date').innerText = projectData['date'];
    clone.querySelector('.project-comment').innerText = projectData['comment'];

    switch (projectData['content']['type']) {
        case 'video': {
            clone.querySelector('.project-embed').innerHTML = `<iframe class="video-js" src="player?v=${projectData['content']['url']}"></iframe>`;
        }
    }

    document.body.appendChild(clone);
    clone.showModal();
    clone.setAttribute('state', 'open');
    clone.querySelector('.project-dialog-buttons .close').addEventListener('click', () => {
        clone.setAttribute('state', 'closed');
        setTimeout(() => {
            clone.close();
            clone.remove();
        },500);
    })
}