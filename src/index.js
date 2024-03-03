import { fetchProducts } from "./servises/api";
import { MarkupMain } from "./helpers/markup";
import { addEventListeners } from "./helpers/events";

    const drugsList = document.querySelector('#drugs');

    async function renderDrugs() {
        try {
            const products = await fetchProducts();
            const markup = MarkupMain(products);
            drugsList.innerHTML = markup;
            addEventListeners();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    renderDrugs();

  











