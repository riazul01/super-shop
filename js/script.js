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



// FAQ
(function() {
    let faqHeader = document.querySelectorAll('.faq-header');
    let faqText = document.querySelectorAll('.faq-text');
    let faqIcon = document.querySelectorAll('.faq-icon');

    let accordion = document.querySelector('.faq-accordion');
    let body = document.querySelector('body');

    let prevIndex = null;

    for (let i = 0; i < faqHeader.length; i++) {
        faqHeader[i].addEventListener('click', () => {
            for (let j = 0; j < faqText.length; j++) {
                faqText[j].classList.remove('active-faq-text');
                faqIcon[j].classList.remove('active-faq-icon');
            }

            if (prevIndex === i) {
                prevIndex = null;
            } else {
                faqText[i].classList.add('active-faq-text');
                faqIcon[i].classList.add('active-faq-icon');
                prevIndex = i;
            }
        });
    }

    // close accrodion box
    body.onclick = () => {
        for (let i = 0; i < faqHeader.length; i ++) {
            faqText[i].classList.remove('active-faq-text');
            faqIcon[i].classList.remove('active-faq-icon');
            prevIndex = null;
        }
    }

    accordion.onclick = (e) => {
        e.stopPropagation();
    }
})();