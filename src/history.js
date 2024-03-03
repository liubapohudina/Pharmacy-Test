import { MarkupHistoryOrders } from "./helpers/markup";
import { getLocalStorage } from "./helpers/localStorage";

const orderList = document.querySelector('.orderList');
const form = document.querySelector('.history-form');

let initialOrders = []; // Зберігатиме початкові замовлення

/*------------------функція для першого рендеру------------*/
function getHistory() {
  try {
    initialOrders = getLocalStorage();
    const markup = MarkupHistoryOrders(initialOrders);
    orderList.innerHTML = markup;
  } catch (error) {
    alert(error);
    return error;
  }
}
/*--------------функція для рендеру з оновленням згідно пошуку по юзеру--------*/
function handleInput(event) {
  const form = event.currentTarget;
  const name = form.elements.name.value.toLowerCase();
  const phone = form.elements.phone.value.toLowerCase();

  try {
    const searchResult = initialOrders.filter(order => 
      order.user.name.toLowerCase().includes(name) && 
      order.user.phone.toLowerCase().includes(phone)
    );

    const markup = MarkupHistoryOrders(searchResult);
    orderList.innerHTML = markup;
  } catch (error) {
    alert(error);
    return error;
  }
}

form.addEventListener('input', handleInput);
getHistory();

/*-------------------працююча функція але без першого рендеру------*/

// function handleInput(event) {
//   const form = event.currentTarget;
//     const name = form.elements.name.value.toLowerCase();
//     console.log(name)
//   const phone = form.elements.phone.value.toLowerCase();
//       try {
//           const dataOrders = getLocalStorage();
//           const searchResult = dataOrders.filter(order => 
//                order.user.name.toLowerCase().includes(name) 
//             && order.user.phone.toLowerCase().includes(phone)
//     );
//     console.log(searchResult);
//           const markup = MarkupHistoryOrders(searchResult);
//           orderList.innerHTML = markup;
        
//     } catch (error) {
//         alert(error)
//         return error;
//     }
 
  
// }

