import { products } from "./data.js";

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

for (let i = 0; i < products.length; i ++) {
    const productCard = createProductCard(products[i]);

    if (document.querySelector('.home')) {
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
    } else if (document.querySelector('.products')) {
        const top = document.querySelector('.top');
        const recent = document.querySelector('.recent');
        const popular = document.querySelector('.popular');

        const vegetables = document.querySelector('.vegetables');
        const fruits = document.querySelector('.fruits');
        const meatAndFish = document.querySelector('.meat-fish');
        const eggs = document.querySelector('.eggs');
        const beverages = document.querySelector('.beverages');
        const spices = document.querySelector('.spices');
        const driedFruits = document.querySelector('.dried-fruits');

        if (products[i].subCategory === 'top') {
            top.appendChild(productCard);
        } else if (products[i].subCategory === 'recent') {
            recent.appendChild(productCard);
        } else if (products[i].subCategory === 'popular') {
            popular.appendChild(productCard);
        } 
        
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