import { setLocalStorageOrder, getLocalStorage } from "./localStorage";

/*-------------------------------EVENT SUBMIT----------------------------------------------------*/
export function handleSubmit(event) {
    const form = event.target;
    console.log(form)
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const address = form.elements.address.value;
  if (name === "" || email === "" || phone === '' || address === '') {
    return console.log("Please fill in all the fields!");
  }
  /*---------------збираємо дані--------------*/
       const userData = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };
  
    const cartOrder = JSON.parse(localStorage.getItem('cartOrder')) || JSON.parse(localStorage.getItem('cartItems'));
    const orderNumber = Date.now();
    /*--------------зберігаємо карту з замовленням----------------*/
    /*----------отримуємо попередні замовлення---------------------*/
    let existOrders = getLocalStorage() || [];
    /*-------------додаємо поточне замовлення------------------*/
    existOrders.push({
        number: orderNumber,
        user: userData,
        products: cartOrder
    });
    /*---------------зберігаємо попередні і поточне замовлення-----------*/
    setLocalStorageOrder(existOrders)
    form.reset();
}


/*-------------------------------------------EVENT CLICK-----------------------------------*/
const drugsList = document.querySelector('#drugs');
/*-----------------------ADD PRODUCT----------------*/
 export function addEventListeners() {
    drugsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('addToCart')) {
            const listItem = event.target.closest('li');
            if (listItem) {
                const itemId = listItem.getAttribute('id');
                const itemTitle = listItem.querySelector('h3').innerText;
                const itemPrice = listItem.querySelector('p').innerText;
                const itemImage = listItem.querySelector('img').innerText;
                const itemData = {
                    _id: itemId,
                    title: itemTitle,
                    price: itemPrice,
                    image: itemImage,
                    quantity: 1,
                    total : itemPrice,
                };

                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const isItemInCart = cartItems.some(item => item._id === itemId);
                if (!isItemInCart) {
                    cartItems.push(itemData);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    alert('Item added to cart!');
                } else {
                    alert('Item is already in the cart!');
                }
            }
        }
    });
}
/*----------------------DELETE PRODUCT---------------------*/
export function handleClickDelete(productsList) {
    productsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('btnDelete')) {
            const listItem = event.target.closest('li');
            if (listItem) {
                const itemId = listItem.getAttribute('id');
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                cartItems = cartItems.filter(item => item._id !== itemId);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                listItem.remove();
            }
        }
    });
}