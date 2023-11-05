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

    accordion ? accordion.onclick = (e) => {
        e.stopPropagation();
    } : null;
})();



// CUSTOMER REVIEW
(function() {
    const reviewCards = document.querySelectorAll('.review-card');
    const transforms = ['70%', '60%', '50%', '40%', '30%'];
    let cardIntervalId = null;
    let spreadMode = false;

    // card styles in diffrent mode
    const handleCardStyles = (mode) => {
        if (mode === 'spread') {
            clearInterval(cardIntervalId);
            for (let i = 0; i < reviewCards.length; i++) {
                reviewCards[i].style.position = 'relative';
                reviewCards[i].style.top = 'initial';
                reviewCards[i].style.left = 'initial';
                reviewCards[i].style.transform = 'none';
                reviewCards[i].onmouseover = () => null;
                reviewCards[i].onmouseout = () => null;
            }
        } else if (mode === 'stack') {
            clearInterval(cardIntervalId);
            for (let i = 0; i < reviewCards.length; i++) {
                reviewCards[i].style.position = 'absolute';
                reviewCards[i].style.top = '50%';
                reviewCards[i].style.left = '50%';
                reviewCards[i].style.transform = 'translate(-50%, -50%)';
            }
        } else if (mode === 'automate') {
            for (let i = 0; i < reviewCards.length; i ++) {
                reviewCards[i].style.position = 'absolute';
                reviewCards[i].style.top = transforms[i];
                reviewCards[i].style.left = transforms[i];
                reviewCards[i].style.transform = `translate(-${transforms[i]}, -${transforms[i]})`;
                reviewCards[i].style.zIndex = 10 - transforms[i][0];
            }
        }
    }
    
    const automateReviewCards = () => {
        cardIntervalId = setInterval(() => {
            // swap ternsform styles
            let temp = transforms[0];
            for (let i = 0; i < transforms.length - 1; i ++) {
                transforms[i] = transforms[i + 1];
            }
            transforms[transforms.length - 1] = temp;
            
            // apply ternsform styles
            handleCardStyles('automate');
        }, 1000);
    }
    
    const mouseOverAndOutEffect = () => {
        for (let i = 0; i < reviewCards.length; i ++) {
            reviewCards[i].onmouseover = () => {
                handleCardStyles('stack');
            }
        
            reviewCards[i].onmouseout = () => {
                automateReviewCards();
            }
        }
    }
    
    const cardClickEffect = () => {
        for (let i = 0; i < reviewCards.length; i++) {
            reviewCards[i].onclick = () => {
                if (!spreadMode) {
                    handleCardStyles('spread');
                    spreadMode = true;
                } else {
                    handleCardStyles('stack');
                    mouseOverAndOutEffect();
                    spreadMode = false;
                }
            }
        }
    }
    
    automateReviewCards();
    mouseOverAndOutEffect();
    cardClickEffect();
})();