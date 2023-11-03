import { products } from "./data.js";

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








// products
const createProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'product-card');

    const productImageBox = document.createElement('div');
    productImageBox.setAttribute('class', 'product-img');

    const productImage = document.createElement('img');

    const addToFavoriteBtn = document.createElement('div');
    addToFavoriteBtn.setAttribute('class', 'add-to-favorite');

    const hartIcon = document.createElement('span');
    hartIcon.setAttribute('class', 'icon-heart');

    const discountTag = document.createElement('div');
    discountTag.setAttribute('class', 'discount-tag');

    const discountText = document.createElement('span');

    const productDesc = document.createElement('div');
    productDesc.setAttribute('class', 'product-desc');

    const productName = document.createElement('p');
    productName.setAttribute('class', 'product-name');

    const priceBox = document.createElement('div');
    priceBox.setAttribute('class', 'price-box');

    const priceText = document.createElement('strong');

    const productPriceBox = document.createElement('div');
    productPriceBox.setAttribute('class', 'product-price');

    const productPrice = document.createElement('span');

    const prevPriceBox = document.createElement('del');
    prevPriceBox.setAttribute('class', 'prev-price');

    const prevPrice = document.createElement('span');

    const currPriceBox = document.createElement('ins');
    currPriceBox.setAttribute('class', 'curr-price');

    const currPrice = document.createElement('span');

    const addToCartBtn = document.createElement('div');
    addToCartBtn.setAttribute('class', 'add-to-cart-btn');

    const cartIcon = document.createElement('span');
    cartIcon.setAttribute('class', 'icon-cart-plus');

    const cartBtnText = document.createElement('p');

    if (product.addedToCart > 0) {
        cartBtnText.innerText = 'Added';
    } else {
        cartBtnText.innerText = 'Add To Cart';
    }

    addToCartBtn.appendChild(cartIcon);
    addToCartBtn.appendChild(cartBtnText);

    priceText.innerText = 'Price:';

    productPrice.innerText = product.price + product.currency + '/' + product.unit;
    productPriceBox.appendChild(productPrice);

    prevPrice.innerText = product.price + product.currency + '/' + product.unit;
    prevPriceBox.appendChild(prevPrice);

    currPrice.innerText = parseInt(product.price - product.price * (product.discountInPercent / 100)) + product.currency + '/' + product.unit;
    currPriceBox.appendChild(currPrice);

    priceBox.appendChild(priceText);
    priceBox.appendChild(productPriceBox);
    priceBox.appendChild(prevPriceBox);
    priceBox.appendChild(currPriceBox);

    productName.innerText = product.name;

    productDesc.appendChild(productName);
    productDesc.appendChild(priceBox);
    productDesc.appendChild(addToCartBtn);

    discountText.innerText = product.discountInPercent + '% off';
    discountTag.appendChild(discountText);

    addToFavoriteBtn.appendChild(hartIcon);

    productImage.src = product.imageUrl;
    productImage.alt = product.catetory;
    productImageBox.appendChild(productImage);

    productCard.appendChild(productImageBox);
    productCard.appendChild(addToFavoriteBtn);
    productCard.appendChild(discountTag);
    productCard.appendChild(productDesc);

    productCard.setAttribute('id', product.id);

    return productCard;
}


const renderProductsBySubcategory = () => {
    for (let i = 0; i < products.length; i ++) {
        const productCard = createProductCard(products[i]);
    
        const top = document.querySelector('.top-products');
        const recent = document.querySelector('.recent-products');
        const popular = document.querySelector('.popular-products');

        if (products[i].subCategory === 'top') {
            top.appendChild(productCard);
        } else if (products[i].subCategory === 'recent') {
            recent.appendChild(productCard);
        } else if (products[i].subCategory === 'popular') {
            popular.appendChild(productCard);
        }
    }
}

const renderProductsByCategory = () => {
    for (let i = 0; i < products.length; i ++) {
        const productCard = createProductCard(products[i]);
        
        const vegetables = document.querySelector('.vegetables');
        const fruits = document.querySelector('.fruits');
        const meatAndFish = document.querySelector('.meat-fish');
        const eggs = document.querySelector('.eggs');
        const beverages = document.querySelector('.beverages');
        const spices = document.querySelector('.spices');
        const driedFruits = document.querySelector('.dried-fruits');
        
        if (products[i].category === 'vegetables') {
            vegetables.appendChild(productCard);
        } else if (products[i].category === 'fruits') {
            fruits.appendChild(productCard);
        } else if (products[i].category === 'meat-fish') {
            meatAndFish.appendChild(productCard);
        } else if (products[i].category === 'eggs') {
            eggs.appendChild(productCard);
        } else if (products[i].category === 'beverages') {
            beverages.appendChild(productCard);
        } else if (products[i].category === 'spices') {
            spices.appendChild(productCard);
        } else if (products[i].category === 'dried-fruits') {
            driedFruits.appendChild(productCard);
        }
    }
}


if (document.querySelector('.home')) {
    renderProductsBySubcategory();
} else if (document.querySelector('.products')) {
    renderProductsBySubcategory();
    renderProductsByCategory();
}



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