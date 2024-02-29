let products = [
    {id: 1, name: 'scinecare 1'},
    {id: 2, name: 'scinecare 2'},
    {id: 3, name: 'scinecare 3'},
    {id: 4, name: 'scinecare 4'},
    {id: 5, name: 'scinecare 5'},
    {id: 6, name: 'scinecare 6'},
    {id: 7, name: 'scinecare 7'},
    {id: 8, name: 'scinecare 8'},
]

let cart = []; 

function loadProducts(){
    let container = document.getElementById('container')
    let containerHtml = '';
    products.forEach(elem => {
        containerHtml += `<div><h3>${elem.name}</h3><button onclick='addProductToCart(${elem.id})'>CLICK </button></div>`
    })
    container.innerHTML = containerHtml;
}

function addProductToCart(id){
    cart.push(products.find(elem => elem.id === id));
    console.log(cart);
}

function openCart(){
    let cartItems = document.getElementById('cart-items');
    let containerHtml = '';
    cart.forEach(elem => {
        containerHtml += `<div><h3>${elem.name}</h3><button onclick='addProductToCart(${elem.id})'>CLICK </button></div>`
    })
    cartItems.innerHTML = containerHtml;
    let cartDiv = document.getElementById('cart');
    cartDiv.style.display = 'block';
}

function closeCart(){
    let cartDiv = document.getElementById('cart');
    cartDiv.style.display = 'none';
}


loadProducts();