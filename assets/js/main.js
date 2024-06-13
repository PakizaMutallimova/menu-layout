// const data = require('../json/data.json')
// import data from '../json/data.json' with { type: "json" };

const menuItem = document.querySelector('.menu-items')
const {categories, items} = model
// console.log(items);

let allDataArray = Object.keys(items).map((key) => [items[key]]);
let allItemsArray = Object.keys(categories).map((key) => [categories[key]]);


let data = allDataArray.map((item) => {
    console.log(item);
    // return item
        return renderItem(item[0]);
    
});

menuItem.innerHTML += data.join("")

function renderItem(item){
    return `<div class="menu-card">
        <div class="card-body">
            <div class="card-image">
                <img src="${item.image}" alt="">
            </div>
            <div class="card-content">
                <div class="info-menu-card d-flex">
                    <div class="product-header">
                        <span>${item.name}</span>
                        <span>${item.weight}</span>
                    </div>
                    <p class="product-title">${item.description}</p>
                </div>
                <div class="price-place">
                    <div class="product-price d-flex">
                        <span>${item.price}<sup>$</sup></span>
                        
                        <button id="${item.id}" class="btn">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}






