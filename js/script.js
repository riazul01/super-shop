// HEADER
(function() {
    let header = document.querySelector('header');
    let sections = document.querySelector('.sections');

    window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;

        if (scrollTop > header.offsetHeight) {
            header.classList.add('active-header');
            sections.style.marginTop = header.offsetHeight + 'px';
        } else {
            header.classList.remove('active-header');
            sections.style.marginTop = 0 + 'px';
        }
    }
})();