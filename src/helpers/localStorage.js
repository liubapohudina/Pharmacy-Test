export function setLocalStorageOrder(products) {
    try {
        localStorage.setItem('cartOrders', JSON.stringify(products));
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartOrder');

    } catch (error) {
        alert(error)
        return error;
    }
}
export function getLocalStorage() {
  return JSON.parse(localStorage.getItem('cartOrders'))
}
