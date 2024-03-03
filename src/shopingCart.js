import { MarkupBasket, BasketEmpty } from "./helpers/markup";
import counterBasket from "./helpers/counter";
import handleSubmit from "./helpers/eventSubmit";


const productsList = document.querySelector("#drugsBasket");
/*---------слухач на відправлення форми--------------*/
const orderForm = document.querySelector(".contact-form");
orderForm.addEventListener("submit", handleSubmit);



function getProductsBasket() {
    try {
        let products = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (products.length > 0) {
            const markup = MarkupBasket(products);
            productsList.innerHTML = markup;
            counterBasket(products);
        } else {
           productsList.innerHTML =  BasketEmpty()
        }        
    } catch (error) {
        console.log(error)
        return error;
    }
}
getProductsBasket()

