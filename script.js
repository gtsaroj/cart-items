const product1 = document.querySelector(".pro-container");
const product2 = document.querySelector(".mainContainer")
const cartItems = document.querySelector(".cart-items")



function RenderProductEl() {
    products.forEach((_product) => {
        product1.innerHTML += `
          
<div class="pro">
        <img src="${_product.imgSrc}" alt="">
        <div class="description">
            <span>Model 05</span>
            <h5>${_product.name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${_product.price}</h4>
        </div>
       <div class="add-to-cart" onclick="addToCart(${_product.id})"> <i class="fa fa-shopping-cart cart"></i></div>
    </div>
`
    })
}
RenderProductEl();

function prod2() {
    products.forEach((_product) => {
        product2.innerHTML += `
     <div class="pro">
        <img src="${_product.imgSrc}" alt="">
        <div class="description">
            <span>Model 05</span>
            <h5>${_product.name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${_product.price}</h4>
        </div>
       <div> <i class="fa fa-shopping-cart cart"></i></div>
    </div>
`

    })
}
prod2();


// create array of cart
let cart = [];



//add to cart
function addToCart(id) {
    if (cart.some((product) => product.id == id)) {
        alert("Items already exist")
    }
    else {
        const item = products.find((product) => product.id == id);
        cart.push({
            ...item,
            numberOfUnits: 1
        });
    }
    updateCart()
}

function updateCart() {
    renderCartItems();
    // renderSubTotal();
}

function renderCartItems() {
    cart.forEach((item) => {
        cartItems.innerHTML +=`
            <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${item.imgSrc}" width="100" height="100">
                        <span class="cart-item-title">${item.name}</span>
                    </div>
                    <span class="cart-price cart-column">$${item.price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
        `
    })
}























