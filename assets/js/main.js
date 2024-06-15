const menuItem = document.querySelector('.menu-items')
const menuCategoties = document.querySelector('.menu-categories')
const {categories, items} = model

let itemsData = Object.keys(items).map((key) => [items[key]]);
let categoriesData = Object.keys(categories).map((key) => [categories[key]]);

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

const category = categoriesData.map((cat) => {
    // console.log(cat[0]);
    return renderCategory(cat[0])
})

function renderCategory(category) {
    const imageItem = itemsData.map((item) => {
        var {image} = item[0]
        return image
    })
    console.log(imageItem[1]);
    // console.log(image);
    console.log(itemsData);
    let {id, name} = category
    return `
    <div class="category" id="${id}" style="background-image: url('${imageItem[id]}');">
        <div class="image-opacity"></div>
        <div class="category-header">${name}</div>
    </div>`
}

menuCategoties.innerHTML += category.join("")





// const{categoryId, description, discount, id, image, name, price, weight} = item[0]


