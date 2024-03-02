import { MarkupBasket, BasketEmpty } from "./helpers/markup";
import totalPrice from "./helpers/totalPrice";


const productsList = document.querySelector("#drugsBasket");
const totalPriceInfo = document.querySelector("#totalPrice");


function getProductsBasket() {
    try {
        let products = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (products.length > 0) {
            const markup = MarkupBasket(products);
            productsList.innerHTML = markup;
            const totPrice = totalPrice(products);
            totalPriceInfo.innerHTML = totPrice;

        } else {
           productsList.innerHTML =  BasketEmpty()
        }
        

    } catch (error) {
        alert(error)
        return error;
    }
}
getProductsBasket()

