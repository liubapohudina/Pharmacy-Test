import { fetchProducts } from "./api";

const refs = {
    drugsList: document.querySelector('#drugs')
};

async function renderDrugs() {
    try {
        const products = await fetchProducts();
        console.log(products)
        const markup = Markup(products);
        refs.drugsList.innerHTML = markup;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

renderDrugs();

function Markup(data) {
    return data.map(item => {
        const imgSrc = (item.image && item.image.trim() !== '') ? item.image : 'https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png';
        return `<li class="itemDrugs" id="${item._id}">
            <img src="${imgSrc}" alt="${item.title}" loading="lazy" />
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button type="button">Add to Cart</button>
        </li>`;
    }).join('');
}






