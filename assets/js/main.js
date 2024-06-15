const menuItem = document.querySelector('.menu-items')
const menuCategoties = document.querySelector('.menu-categories')
const barCategoriesBtn = document.querySelector('.bar-categories')
const searchBar = document.querySelector('.search-bar')
const menuTitle = document.querySelector('.menu-title')
const mainMenuBtn = document.querySelector('.btn-menu')
const barBtn = document.querySelector('.btn-bar')
const arrowBack = document.querySelector('.arrow-back')
const {categories, items} = model
const {barCategories, barItems} = bar

// -------------------------------------------------------------------------

let itemsData = Object.keys(items).map((key) => [items[key]]);
let categoriesData = Object.keys(categories).map((key) => [categories[key]]);

let barItemsData = Object.keys(barItems).map((key) => [barItems[key]]);
let barCategoriesData = Object.keys(barCategories).map((key) => [barCategories[key]]);
// console.log(barItemsData, barCategoriesData);

// -------------------------------------------------------------------------

const dataItem = itemsData.map((item) => {
    return renderItem(item[0]);
});

menuItem.innerHTML += dataItem.join("")

function renderItem(item){
    const{description, id, image, name, price, weight} = item
    return `<div class="menu-card">
        <div class="card-body">
            <div class="card-image">
                <img src="${image}" alt="">
            </div>
            <div class="card-content">
                <div class="info-menu-card d-flex">
                    <div class="product-header">
                        <span>${name}</span>
                        <span>${weight}</span>
                    </div>
                    <p class="product-title">${description}</p>
                </div>
                <div class="price-place">
                    <div class="product-price d-flex">
                        <span>${price}<sup>$</sup></span>
                        
                        <button id="${id}" class="btn">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// -------------------------------------------------------------------------

                       /** main menu category */
const category = categoriesData.map((cat) => {
    return renderCategory(cat[0])
})

function renderCategory(category) {
    const imageItem = itemsData.map((item) => {
        var {image} = item[0]
        return image
    })
    let {id, name} = category
    return `
    <div class="category" id="${id}" style="background-image: url('${imageItem[id]}');">
        <div class="image-opacity"></div>
        <div class="category-header">${name}</div>
    </div>`
}

menuCategoties.innerHTML += category.join("")

mainMenuBtn.addEventListener('click', () => {
    searchBar.style.display = "flex"
    menuCategoties.style.display = "block"
    barCategoriesBtn.style.display = "none"
    menuTitle.style.display = "none"
    menuItem.style.display = "none"
    // if (arrowBack.clicked = "true") {
    //     searchBar.style.display = "none"
    //     menuCategoties.style.display = "none"
    //     menuTitle.style.display = "block"
    //     menuItem.style.display = "flex"
    // }
})

arrowBack.addEventListener("click", ()=>{
    window.location.href = "./index.html"
})

// -----------------------------------------------------------------
                        /** bar category */

const barDataCategory = barCategoriesData.map((barCat) => {
    // console.log(barCat[0]);
    return renderBarCategories(barCat[0])
});

function renderBarCategories(barCat) {
    const barImageItem = barItemsData.map((item) => {
        var {image:barImage} = item[0]
        return barImage
    })
    const {id:barId, name:barName} = barCat
    return `
    <div class="category" id="${barId}" style="background-image: url('${barImageItem[barId]}');">
        <div class="image-opacity"></div>
        <div class="category-header">${barName}</div>
    </div>`
}

barCategoriesBtn.innerHTML = barDataCategory.join("")

console.log(barBtn);

barBtn.addEventListener('click', () => {
    barBtn.style.backgroundColor = "#f7906c"
    barBtn.style.color = "white"
    searchBar.style.display = "flex"
    menuCategoties.style.display = "none"
    barCategoriesBtn.style.display = "block"
    menuTitle.style.display = "none"
    menuItem.style.display = "none"
})



// const{categoryId, description, discount, id, image, name, price, weight} = item[0]
