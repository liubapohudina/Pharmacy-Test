import { setLocalStorageOrder, getLocalStorage } from "./localStorage";

function handleSubmit(event) {
  event.preventDefault();
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
export default handleSubmit;