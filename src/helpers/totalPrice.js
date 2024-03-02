function totalPrice(data) {
    let totalPrice = data.reduce((acc, item) => acc + parseFloat(item.price), 0);
    let totalPriceFixed = totalPrice.toFixed(2);
    return `<p>Total price: ${totalPriceFixed}</p>`
}
export default totalPrice;