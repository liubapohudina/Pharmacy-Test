

const refs = {
    drugsList: document.querySelector('#drugs')
}




function Markup(data) {
    return data.map(item => {
        return `<li>
            <img src="${item.url}" alt="${image.brand_name}" loading="lazy" />
            <h3>${item.brand_name}</h3>
            <p>${item.unit_price}</p>
            <button type="button">Add to Cart</button>
        </li>`
    })
}