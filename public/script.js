const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('o', 'i');
        } else {
            entry.target.classList.replace('i', 'o');
        }
    });
}, { threshold: 0.7 });

const pages = document.querySelectorAll('.page');
pages.forEach((page) => {
    observer.observe(page);
});

const spaces = document.querySelectorAll('.space');

const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
    console.log(tab);
    tab.addEventListener('click', () => {
        console.log("clicked" + tab.id)
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        let spaceId = tab.id;
        tab.classList.add('active');
        spaces.forEach((space) => {
            space.classList.remove('active');
            if (space.id == spaceId + "Space") {
                space.classList.add('active');
            }
        });
    })
});