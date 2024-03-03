import { fetchProducts } from "./servises/api";
import {MarkupMain} from "./helpers/markup";

    const drugsList = document.querySelector('#drugs');

    async function renderDrugs() {
        try {
            const products = await fetchProducts();
            console.log(products);
            const markup = MarkupMain(products);
            drugsList.innerHTML = markup;
            addEventListeners();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    renderDrugs();

    function addEventListeners() {
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











