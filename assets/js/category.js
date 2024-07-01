import datas from '../data/category-data.js'
const allCategorySection = document.querySelector('.category-sections')
const { categories, items } = datas


const productData = categories.map(category => `
<section id=${category.id}>
  <h2>${category.name}</h2>

    ${items.map(product => category.id == product.categoryId ? `<div id="${product.categoryId}" class="card-section d-flex">
    <div class="card-sec-img">
        <img src="${product.image}" alt="">
    </div>
    <div class="card-sec-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.weight}</p>
        <p>${product.price} <span>$</span></p>
    </div>
</div> ` : "").join("")}

</section>`

).join("")

allCategorySection.innerHTML = productData


// ------------------------------------------------------------
/** slider item click **/

const slider = document.querySelector('.slider')
// slider.innerHTML = categories.map(category => `<a id=${category.id} class="slider-item" href="#${category.id}">${category.name}</a>`).join("")


const sliderItems = document.querySelectorAll(".slider-item")
slider.addEventListener('click', (e) => {
    sliderItems.forEach(item => e.target.id == item.id ? item.classList.add("active") : item.classList.remove("active"))
})
