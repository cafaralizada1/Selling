const qutu = document.getElementById('card')

function getProducts() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    qutu.innerHTML = "";

    cart.map((item, index) => {
        let box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML = `
        <img src="${item.image}" alt="photo">
        <p>$ ${item.price}</p>
        <h1>${item.title}</h1>
        <button class = "jsBtn" onclick = "removeItem(${index})">SIL</button>
        `
        qutu.appendChild(box);
    });
}
 function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cart));
    getProducts()
 }
 getProducts()