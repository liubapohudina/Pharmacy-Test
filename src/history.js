import { MarkupHistoryOrders } from "./helpers/markup";
import { getLocalStorage } from "./helpers/localStorage";

const orderList = document.querySelector('.orderList')

function getHistory() {
    try {
        const dataOrders = getLocalStorage();
        const markup = MarkupHistoryOrders(dataOrders);
        orderList.innerHTML = markup;
    } catch (error) {
        alert(error)
        return error;
    }
}
getHistory()