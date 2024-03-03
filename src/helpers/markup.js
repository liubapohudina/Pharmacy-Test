 export function MarkupMain(data) {
        return data.map(item => {
            const imgSrc = (item.image && item.image.trim() !== '') ? item.image : 'https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png';
            return `<li class="itemDrugs" id="${item._id}">
                <img src="${imgSrc}" alt="${item.title}" loading="lazy" />
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="addToCart" type="button">Add to Cart</button>
            </li>`;
        }).join('');
}

export function MarkupBasket(data) {
     return data.map(item => {
            const imgSrc = (item.image && item.image.trim() !== '') ? item.image : 'https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png';
            return `<li class="itemDrugsBasket" id="${item._id}">
                <img src="${imgSrc}" alt="${item.title}" loading="lazy" width="300"/>
                <div class="infoDrug"
                <h3>${item.title}</h3>
                <p id="price">${item.price}</p>
                    <div id="counter">
                    <button type="button" data-action="decrement">-1</button>
                      <span id="value">1</span>
                    <button type="button" data-action="increment">+1</button>
                 </div>
                </div>
            </li>`;
        }).join('');
}

export function BasketEmpty() {
    return `<p>Basket is empty!Please add products</p>`
}
