
// const categoryPageData = fetch('https://fakestoreapi.com/products')
// .then(categoryPageData=>categoryPageData.json())
// .then(json=>console.log(json))

// console.log(categoryPageData);


async function postData() {
    const categoryPageDatas = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(categoryPageData => console.log(categoryPageData))
    categoryPageDatas.map(item => {
        console.log(item);
    })
}

postData()