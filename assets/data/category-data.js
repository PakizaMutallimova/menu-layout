
// const categoryPageData = fetch('https://fakestoreapi.com/products')
// .then(categoryPageData=>categoryPageData.json())
// .then(json=>console.log(json))

// console.log(categoryPageData);


// async function postData() {
//     const categoryPageDatas = await fetch('https://fakestoreapi.com/products');
//     const test = await categoryPageDatas.json();
//     return test;
// }

// console.log(await postData());

const mealCategory = [
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/9610964997582898.jpg",
        category: "meal",
        price: 24
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/204313368551993.jpg",
        category: "meal",
        price: 19
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
        category: "meal",
        price: 24
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
        category: "meal",
        price: 24
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
        category: "meal",
        price: 24
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7108784455317878.jpg",
        category: "meal",
        price: 24
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7108784455317878.jpg",
        category: "meal",
        price: 24
    },
    {
        name: "breakfast",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7108784455317878.jpg",
        category: "meal",
        price: 19.9
    }
]

const barCategory = [
    {
        name: "cocktail",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
        category: "bar",
        price: 14
    },
    {
        name: "coffee",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
        category: "bar",
        price: 13
    },
    {
        name: "tea with sweets",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
        category: "bar",
        price: 15
    },
    {
        name: "coffee latte",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
        category: "bar",
        price: 13
    },
    {
        name: "moxito",
        image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
        category: "bar",
        price: 11
    },
    {
        name: "coffee wikjdjd",
        image: "https://dyj6gt4964deb.cloudfront.net/images/264140938451485.jpg",
        category: "bar",
        price: 23
    }
]


// console.log(dataForCategory);

const mealCategorySection = document.querySelector('#meal')
const barCategorySection = document.querySelector('#bar')

const dataMealCategoryItem = mealCategory.map(categoryItem => {
    return renderMealItems(categoryItem)
})

function renderMealItems(dataItem) {
    const { name, image, category, price } = dataItem
    const sectionName = mealCategorySection.querySelector('h2')
    console.log(sectionName);
    sectionName.innerText = category
    return `
    <div id="${category}" class="card-section d-flex">
        <div class="card-sec-img">
            <img src="${image}" alt="">
        </div>
        <div class="card-sec-info">
            <h3>${name}</h3>
            <p>lorem ipsum</p>
            <p>${price} <span>$</span></p>
        </div>
    </div>`
}
mealCategorySection.innerHTML += dataMealCategoryItem.join("")

const dataBarCategoryItem = barCategory.map(categoryItem => {
    return renderBarItems(categoryItem)
})

function renderBarItems(dataItem) {
    const { name, image, category, price } = dataItem
    const sectionName = barCategorySection.querySelector('h2')
    console.log(sectionName);
    sectionName.innerText = category
    return `
    <div id="${category}" class="card-section d-flex">
        <div class="card-sec-img">
            <img src="${image}" alt="">
        </div>
        <div class="card-sec-info">
            <h3>${name}</h3>
            <p>${price} <span>$</span></p>
        </div>
    </div>`
}
barCategorySection.innerHTML += dataBarCategoryItem.join("")