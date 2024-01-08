const inp = document.getElementById('inp')
const btn = document.getElementById('search')
const searchDiv = document.getElementById('card')


function getSearch() {
    searchDiv.innerHTML =""
    axios.get('https://65685e799927836bd974a707.mockapi.io/products')
    .then(res => {
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item => {
            const box = document.createElement('div');
            box.className ="cardList"
            box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>$ ${item.price}</p>
        `
        searchDiv.appendChild(box)
        })
    })
}
btn.addEventListener('click',getSearch)