import { products } from "./data.js";

// HERO
(function() {
    let heroImg = document.querySelector('.hero-image');
    let heroDesc = document.querySelector('.hero-desc');

    // update hero image
    const updateHeroImage = (imgIndex) => {
        let imgSrc = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png'];
        let oldImg = document.querySelector('.hero-image img');
        heroImg.removeChild(oldImg);

        let newImg = document.createElement('img');
        newImg.setAttribute('class', 'animate__animated animate__bounceInDown');
        newImg.src = `../images/hero/${imgSrc[imgIndex]}`;

        heroImg.appendChild(newImg);
    }

    // update hero title
    const updateHeroTitle = (titleIndex) => {
        let txt1 = `The best dried fruits for your family health`;
        let txt2 = `Get your daily needs easy and instant`;
        let txt3 = `Try fresh fruits for better healthy lifestyle`;
        let txt4 = `Get upto 50% discount on every products`;
        let txt5 = `Hot deals available with amazing products`;
        let txt6 = `Fresh vegetables with a big discount`;

        let textAra = [txt1, txt2, txt3, txt4, txt5, txt6];

        let oldText = document.querySelector('.hero-title');
        heroDesc.removeChild(oldText);

        let newTitle = document.createElement('h1');
        newTitle.setAttribute('class', 'animate__animated animate__bounceInRight hero-title');
        newTitle.textContent = `${textAra[titleIndex]}`;

        heroDesc.appendChild(newTitle);
    }

    // update hero button
    const updateHeroButton = () => {
        let oldButton = document.querySelector('.hero-button');
        heroDesc.removeChild(oldButton);

        let newButton = document.createElement('button');
        newButton.textContent = `Explore`;
        newButton.setAttribute('class', 'animate__animated animate__bounceInUp hero-button');

        heroDesc.appendChild(newButton);
    }

    // initial slide position
    let heroIndex = 0;

    // slide right
    const heroSlideRight = () => {
        heroIndex++;

        if (heroIndex === 6) {
            heroIndex = heroIndex % 6;
        }

        updateHeroImage(heroIndex);
        updateHeroTitle(heroIndex);
        updateHeroButton();
    }

    // slide left
    const heroSlideLeft = () => {
        heroIndex--;

        if (heroIndex < 0) {
            heroIndex = 5;
        }

        updateHeroImage(heroIndex);
        updateHeroTitle(heroIndex);
        updateHeroButton();
    }

    let slideTimerId = null;

    // auto slide
    const autoSlideRight = () => {
        slideTimerId = setInterval(() => {
            heroSlideRight();
        }, 10000);
    }

    // slider button
    let heroSlideLeftBtn = document.querySelector('.hero-slide-left');
    let heroSlideRightBtn = document.querySelector('.hero-slide-right');

    heroSlideLeftBtn.onclick = () => {
        clearInterval(slideTimerId);
        heroSlideLeft();
        autoSlideRight();
    }

    heroSlideRightBtn.onclick = () => {
        clearInterval(slideTimerId);
        heroSlideRight();
        autoSlideRight();
    }

    autoSlideRight();
})();



// CALL TO ACTION
(function() {
    const createCallToActionCard = (product) => {
        const cardImage = document.createElement('div');
        cardImage.setAttribute('class', 'cta-card-image');

        const image = document.createElement('img');
        image.src = product.imageUrl;
        image.alt = product.name.split(' ').join('-');

        cardImage.appendChild(image);

        const cardText = document.createElement('div');
        cardText.setAttribute('class', 'cta-card-text');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = product.name;

        const cardPrice = document.createElement('p');
        cardPrice.textContent = product.price + product.currency + '/' + product.unit;
        
        cardText.appendChild(cardTitle);
        cardText.appendChild(cardPrice);

        const card = document.createElement('div');
        card.setAttribute('class', 'cta-card');

        card.appendChild(cardImage);
        card.appendChild(cardText);

        return card;
    }

    const renderCallToActionCards = () => {
        const cards = document.querySelector('.cta-cards');
        
        const vegetables = products.filter((item) => item.category === 'vegetables');

        for (let i = 0; i < vegetables.length; i ++) {
            const card = createCallToActionCard(vegetables[i]);
            cards.appendChild(card);
        }
    }

    const slideCallToActionCards = () => {
        let callToActionCard = document.querySelectorAll('.cta-card');

        // three cards width including each of their margin right
        let movePer = (callToActionCard[0].offsetWidth + 20) * 3;

        // slide three cards in every 3 seconds
        let newArrival = setInterval(() => {
            if (movePer >= ((callToActionCard[0].offsetWidth + 20) * callToActionCard.length)) {
                movePer = 0;
            }

            for (let i = 0; i < callToActionCard.length; i++) {
                callToActionCard[i].style.transform = `translateX(-${movePer}px)`;
            }

            movePer += (callToActionCard[0].offsetWidth + 20) * 3;

        }, 3000);
    }

    renderCallToActionCards();
    slideCallToActionCards();
})();



// GREAT DISCOUNT
(function() {
    let greatDiscountWrap = document.querySelector('.great-discount-wrap');
    let image = document.querySelector('.gd-image > img');
    let savePer = document.querySelector('.save-per');
    let productName = document.querySelector('.gd-product-name');
    let productPrice = document.querySelector('.gd-product-price');
    let discountMessage = document.querySelector('.gd-discount-message');

    let product = products.find((item) => item.id.toString() === greatDiscountWrap.getAttribute('data-id'));

    // initialize date, month, year
    let date = new Date();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    const createInfiniteCountdown = (date, time) => {
        let curntTime = Date.now();
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
        let totalSeconds = (eventTime - curntTime) / 1000;

        if (totalSeconds < 0) {
            monthIndex = (monthIndex + 1) % 12;

            if (monthIndex === 0) {
                year = year + 1;
            }

            let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
            totalSeconds = (eventTime - curntTime) / 1000;
        }

        let dayConst = 86400;
        let hourConst = 3600;
        let minuteConst = 60;

        let days = Math.floor(totalSeconds / dayConst);
        totalSeconds = totalSeconds % dayConst;

        let hours = Math.floor(totalSeconds / hourConst);
        totalSeconds = totalSeconds % hourConst;

        let minutes = Math.floor(totalSeconds / minuteConst);
        totalSeconds = totalSeconds % minuteConst;

        let seconds = Math.floor(totalSeconds);

        days = (days < 10) ? '0' + days : days;
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        return [days, hours, minutes, seconds];
    }

    image.src = product.imageUrl;
    image.alt = product.name.split(' ').join('-');
    savePer.textContent = `Save upto ${product.discountInPercent}%`;
    productName.textContent = (product.name.split(' ')[0].toLowerCase() === 'fresh') ? product.name : `Fresh ${product.name}`;
    productPrice.textContent = `${product.price - (product.price * (product.discountInPercent / 100))}${product.currency} Only`;
    
    // infinite countdown
    let timeCount = setInterval(() => {
        let times = createInfiniteCountdown('28', '12:00:00');
        discountMessage.textContent =  `Offer ends in ${times[0]}d ${times[1]}h ${times[2]}m ${times[3]}s`;
    }, 1000);
})();