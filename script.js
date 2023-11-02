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





// hero
let heroImg = document.querySelector('.hero-image');
let heroDescription = document.querySelector('.hero-description');

// update hero image
function updateHeroImage(imgIndex) {
    let imgSrc = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png'];
    let oldImg = document.querySelector('.hero-image img');
    heroImg.removeChild(oldImg);

    let newImg = document.createElement('img');
    newImg.setAttribute('class', 'animate__animated animate__bounceInDown');
    newImg.src = `./images/hero/${imgSrc[imgIndex]}`;

    heroImg.appendChild(newImg);
}

// update hero title
function updateHeroTitle(titleIndex) {
    let txt1 = `The best dried fruits for your family health`;
    let txt2 = `Get your daily needs easy and instant`;
    let txt3 = `Try fresh fruits for better healthy lifestyle`;
    let txt4 = `Get upto 50% discount on every products`;
    let txt5 = `Hot deals available with amazing products`;
    let txt6 = `Fresh vegetables with a big discount`;

    let textAra = [txt1, txt2, txt3, txt4, txt5, txt6];

    let oldText = document.querySelector('.hero-title');
    heroDescription.removeChild(oldText);

    let newTitle = document.createElement('h1');
    newTitle.setAttribute('class', 'animate__animated animate__bounceInRight hero-title');
    newTitle.textContent = `${textAra[titleIndex]}`;

    heroDescription.appendChild(newTitle);
}

// update hero button
function updateHeroButton() {
    let oldButton = document.querySelector('.hero-button');
    heroDescription.removeChild(oldButton);

    let newButton = document.createElement('button');
    newButton.textContent = `Explore`;
    newButton.setAttribute('class', 'animate__animated animate__bounceInUp hero-button');

    heroDescription.appendChild(newButton);
}

// initiate slide position
let heroIndex = 0;

// slide right
function heroSlideRight() {
    heroIndex++;

    if (heroIndex === 6) {
        heroIndex = heroIndex % 6;
    }

    updateHeroImage(heroIndex);
    updateHeroTitle(heroIndex);
    updateHeroButton();
}

// slide left
function heroSlideLeft() {
    heroIndex--;

    if (heroIndex < 0) {
        heroIndex = 5;
    }

    updateHeroImage(heroIndex);
    updateHeroTitle(heroIndex);
    updateHeroButton();
}

// auto slide
let heroSlide = setInterval(() => {

    heroSlideRight();

}, 10000);

// slider button
let heroSlideLeftBtn = document.querySelector('.hero-slide-left');
let heroSlideRightBtn = document.querySelector('.hero-slide-right');

// actions while click left arrow button
heroSlideLeftBtn.onclick = () => {
    heroSlideLeft();
}

// actions while click right arrow button
heroSlideRightBtn.onclick = () => {
    heroSlideRight();
}










// Call to action
let arrivalCard = document.querySelectorAll('.new-arrival-card');

// three cards width including each of their margin right
let move = (arrivalCard[0].offsetWidth + 20) * 3;

// slide three cards in every 3 seconds
let newArrival = setInterval(() => {
    if (move >= ((arrivalCard[0].offsetWidth + 20) * (arrivalCard.length / 2))) {
        move = 0;
    }

    for (let i = 0; i < arrivalCard.length; i++) {
        arrivalCard[i].style.transform = `translateX(-${move}px)`;
    }

    move += (arrivalCard[0].offsetWidth + 20) * 3;

}, 3000);








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