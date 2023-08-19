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

    return productCard;
}

for (let i = 0; i < products.length; i ++) {
    const productCard = createProductCard(products[i]);
    const productWrap = document.querySelector('.products-wrap');
    productWrap.appendChild(productCard);
}