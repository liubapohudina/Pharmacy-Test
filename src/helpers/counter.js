import totalPrice from './totalPrice';

function counterBasket(products) {
    const buttons = document.querySelectorAll("#counter button");
    const totalPriceInfo = document.querySelector("#totalPrice");
    /*------------------перший рендер товарів------------------*/
    let total = totalPrice(products); 
    totalPriceInfo.innerHTML = `<p>Total price: ${total}</p>`;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.action;
            const item = button.closest(".itemDrugsBasket");
            const counter = item.querySelector("#value");
            let counterValue = parseInt(counter.textContent);

            if (action === "increment") {
                counterValue += 1;
            } else if (action === "decrement") {
                if (counterValue > 0) {
                    counterValue -= 1;
                } else {
                    const message = confirm("Error. Click cannot be a negative number");
                    console.log(message);
                }
            }
            /*-------------змінює значення спану на сторінці------------*/
            counter.textContent = counterValue.toString();
            /*-------------змінює значення quantity в об'єкті products----*/
            const itemId = item.id;
            const updatedProduct = products.find(product => product._id === itemId);
            updatedProduct.quantity = counterValue;
            
            /*------------викликаємо тотал з новим quantity------*/
            total = totalPrice(products); 
            totalPriceInfo.innerHTML = `<p>Total price: ${total}</p>`;
            /*------------записуємо новий тотал------------------*/
            updatedProduct.total = total;

             localStorage.setItem('cartOrder', JSON.stringify(products))
        });
    });
}

export default counterBasket;
