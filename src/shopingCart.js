import { MarkupBasket, BasketEmpty } from "./helpers/markup";
//import totalPrice from "./helpers/totalPrice";
import counterBasket from "./helpers/counter";



const productsList = document.querySelector("#drugsBasket");
const totalPriceInfo = document.querySelector("#totalPrice");


function getProductsBasket() {
    try {
        let products = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (products.length > 0) {
            const markup = MarkupBasket(products);
            productsList.innerHTML = markup;
            counterBasket(products)
            // const totPrice = totalPrice(products);
            // totalPriceInfo.innerHTML = totPrice;

        } else {
           productsList.innerHTML =  BasketEmpty()
        }
        

    } catch (error) {
        console.log(error)
        return error;
    }
}
getProductsBasket()

