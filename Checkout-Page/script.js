// original prices of the products
let originalPrice1 = 94.99;
let newPrice1 = 54.99;

let originalPrice2 = 124.99;
let newPrice2 = 74.99;

// increase quantity functions for product 1 and product 2
function increaseQuantity_prod1(){
    let currentQuantity = document.querySelector(".quantity_prod1");
    
    let newQuantity = increaseQuantity(currentQuantity);

    let arr = calcPrice(originalPrice1, newPrice1, newQuantity);
    document.querySelector(".oprice-1").innerHTML = arr[0];
    document.querySelector(".nprice-1").innerHTML = arr[1];

    calcTotal();

}

function increaseQuantity_prod2(){
    let currentQuantity = document.querySelector(".quantity_prod2");
    
    let newQuantity = increaseQuantity(currentQuantity);

    let arr = calcPrice(originalPrice2, newPrice2, newQuantity);
    document.querySelector(".oprice-2").innerHTML = arr[0];
    document.querySelector(".nprice-2").innerHTML = arr[1];

    calcTotal();
}


// decrease quantity functions for product 1 and product 2
function decreaseQuantity_prod1(){
    let currentQuantity = document.querySelector(".quantity_prod1");
    
    let newQuantity = decreaseQuantity(currentQuantity);

    let arr = calcPrice(originalPrice1, newPrice1, newQuantity);
    document.querySelector(".oprice-1").innerHTML = arr[0];
    document.querySelector(".nprice-1").innerHTML = arr[1];

    calcTotal();
}

function decreaseQuantity_prod2(){
    let currentQuantity = document.querySelector(".quantity_prod2");
    
    let newQuantity = decreaseQuantity(currentQuantity);

    let arr = calcPrice(originalPrice2, newPrice2, newQuantity);
    document.querySelector(".oprice-2").innerHTML = arr[0];
    document.querySelector(".nprice-2").innerHTML = arr[1];

    calcTotal();
}


function increaseQuantity(number){
    let quantity = number.innerHTML;

    if (quantity < 10){
        quantity++;
    } else if (quantity == 10){
        document.getElementById("plus-btn").disabled = true;  
        document.getElementById("minus-btn").disabled = false;  
    }

    number.innerHTML = quantity;

    return quantity;
}

function decreaseQuantity(number){
    let quantity = number.innerHTML;

    if (quantity > 0){
        quantity--;
    } else if (quantity == 0){
        document.getElementById("minus-btn").disabled = true;  
        document.getElementById("plus-btn").disabled = false;  
    }

    number.innerHTML = quantity;

    return quantity;
}

function calcPrice(originalPrice, newPrice, quantity){

    let arr = new Array();
    arr.push(Math.round(originalPrice * quantity * 100) / 100, Math.round(newPrice * quantity * 100) / 100);
    return arr;
}

function calcTotal(){
    let newPrice_Prod1 = document.querySelector(".nprice-1").innerHTML;
    let newPrice_Prod2 = document.querySelector(".nprice-2").innerHTML;
    let shipping = document.querySelector(".sprice").innerHTML;
    let totalCost = parseFloat(newPrice_Prod1) + parseFloat(newPrice_Prod2) + parseFloat(shipping);

    document.querySelector(".tprice").innerHTML = Math.round(totalCost * 100) / 100;
}