
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

// const mealCategory = [
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/9610964997582898.jpg",
//         category: "meal",
//         price: 24
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/204313368551993.jpg",
//         category: "meal",
//         price: 19
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
//         category: "meal",
//         price: 24
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
//         category: "meal",
//         price: 24
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
//         category: "meal",
//         price: 24
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7108784455317878.jpg",
//         category: "meal",
//         price: 24
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7108784455317878.jpg",
//         category: "meal",
//         price: 24
//     },
//     {
//         name: "breakfast",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7108784455317878.jpg",
//         category: "meal",
//         price: 19.9
//     }
// ]

// const barCategory = [
//     {
//         name: "cocktail",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
//         category: "bar",
//         price: 14
//     },
//     {
//         name: "coffee",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
//         category: "bar",
//         price: 13
//     },
//     {
//         name: "tea with sweets",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
//         category: "bar",
//         price: 15
//     },
//     {
//         name: "coffee latte",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
//         category: "bar",
//         price: 13
//     },
//     {
//         name: "moxito",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/7723889110147378.jpg",
//         category: "bar",
//         price: 11
//     },
//     {
//         name: "coffee wikjdjd",
//         image: "https://dyj6gt4964deb.cloudfront.net/images/264140938451485.jpg",
//         category: "bar",
//         price: 23
//     }
// ]


// console.log(dataForCategory);


const datas = {
    "categories": [
        {
            "id": 0,
            "name": "BREAKFASTS"
        },
        {
            "id": 1,
            "name": "HOT MEALS"
        },
        {
            "id": 2,
            "name": "SALADS"
        }
    ],
    "items": [
        {
            "categoryId": 0,
            "name": "Full English breakfast",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/9610964997582898.jpg",
            "description": "Fried eggs, bacon, toast, cherry tomatoes",
            "weight": "400 g",
            "discount": "20 %",
            "price": "6.99"
        },
        {
            "categoryId": 1,
            "name": "Oatmeal 22222",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
            "description": "2",
            "weight": "4",
            "discount": "3",
            "price": "5"
        },
        {
            "categoryId": 1,
            "name": "Oatmeal 1",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
            "description": "Oatmeal with seasonal berries and berry syrup",
            "weight": "120 g",
            "discount": "10 %",
            "price": "3.25"
        },
        {
            "categoryId": 1,
            "name": "Oatmeal 2",
            "image": "https://dyj6gt4964deb.cloudfront.net/images/217460674308904.jpg",
            "description": "Oatmeal with seasonal berries and berry syrup",
            "weight": "120 g",
            "discount": "10 %",
            "price": "3.25"
        },
        {
            "categoryId": 2,
            "name": "Oatmeal 3 Salad",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/oAAAP9CAYAAAA94xYZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+",
            "description": "lorem ipsum",
            "weight": "400 g",
            "discount": "3%",
            "price": "50"
        }
    ]
}

const allCategorySection = document.querySelector('.category-sections')

const barCategorySection = document.querySelector('#bar')
const {categories, items} = datas
const mealCategory = Object.keys(items).map(key => [items[key]])
const barCategory = Object.keys(categories).map((key) => [categories[key]]);

// ------------------------------------
const dataBarCategoryItem = barCategory.map(categoryItem => {
    return renderBarItems(categoryItem)
})

function renderBarItems(dataItem) {
    const { name, id } = dataItem[0]
    console.log(id, name);
    return `
    <section id="${id}">
        <h2>${name}</h2>
    </section>`
}

allCategorySection.innerHTML += dataBarCategoryItem.join("")
// ---------------

const dataMealCategoryItem = mealCategory.map(categoryItem => {
    const mealCategorySection = document.querySelector('#meal')
    console.log(mealCategorySection);
    mealCategorySection.innerHTML += dataMealCategoryItem.join("")
    return renderMealItems(categoryItem)
})

function renderMealItems(dataItem) {
    const { categoryId, description, id, image, name, price, weight} = dataItem[0]
    console.log(dataItem[0]);
    
    return `
    <div id="${categoryId}" class="card-section d-flex">
        <div class="card-sec-img">
            <img src="${image}" alt="">
        </div>
        <div class="card-sec-info">
            <h3>${name}</h3>
            <p>${description}</p>
            <p>${weight}</p>
            <p>${price} <span>$</span></p>
        </div>
    </div>`
}
// const mealCategorySection = document.querySelector('#BREAKFASTS')
// mealCategorySection.innerHTML += dataMealCategoryItem.join("")



// ----------------------------------------------

// const dataBarCategoryItem = categories.filter(category => category.name.toLowerCase().includes('bar'))
//     .map(categoryItem => renderBarItems(categoryItem));

// function renderBarItems(dataItem) {
//     const { id, name } = dataItem;
//     return `
//     <section id="bar-${id}">
//         <h2>${name}</h2>
//     </section>`;
// }

// barCategorySection.innerHTML = dataBarCategoryItem.join("");