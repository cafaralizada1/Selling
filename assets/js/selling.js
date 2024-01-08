const qutu = document.getElementById('card')

let limit = 3
let page = 1

async function getProducts(){
    const response = await axios.get(`https://65685e799927836bd974a707.mockapi.io/products?limit=${limit}&page=${page}`)
    const data = await response.data

    db = data

    db.map(item => {
        const box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML = `
        <img src="${item.image}" alt="photo">
        <p>$ ${item.price}</p>
        <h1>${item.title}</h1>
        <div class = "javabtn ">
        <button class = "jsBtn" onclick = "addToCard(${item.id})">SEPETE EKLE</button>
        <button class = "jsBtn" onclick = "addToWishlist(${item.id})"><i class="fa-solid fa-heart heart"></i></button>
        </div>
        `
        qutu.appendChild(box)   
    })
    page++
}
document.getElementById("btnnn").addEventListener('click', getProducts)


function addToWishlist(id){
    let heart = JSON.parse(localStorage.getItem('heart')) || []
    heart.push(db.find(item => item.id == id))
    localStorage.setItem('heart', JSON.stringify(heart))
}

function addToCard(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart)) 
}
getProducts()



const form = document.getElementById('form')
const emaill = document.getElementById('email')
const passwordd = document.getElementById('password')
const namee = document.getElementById('name')

form.addEventListener('submit',function(e){
    e.preventDefault()

    axios.post(`https://65685e799927836bd974a707.mockapi.io/form`,{
        email: emaill.value,
        password: passwordd.value,
        name: namee.value
    })

    .then(res => {
        console.log(res.data);
    })

})
