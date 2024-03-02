import axios from "axios";

export async function fetchProducts() {
    const { data } = await axios.get('https://api.storerestapi.com/products');
    return data.data;
}

