const qutu = document.getElementById('card')

function getProducts() {
    let heart = JSON.parse(localStorage.getItem('heart')) || [];
    qutu.innerHTML = "";

    heart.map((item, index) => {
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
    let heart = JSON.parse(localStorage.getItem('heart')) || [];
    heart.splice(index,1);
    localStorage.setItem('heart',JSON.stringify(heart));
    getProducts()
 }
 getProducts()