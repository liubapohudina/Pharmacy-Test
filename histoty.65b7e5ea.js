function t(t){let i="";return t.forEach((t=>{t.products.map((t=>{const n=t.image&&""!==t.image.trim()?t.image:"https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png";i+=`<li class="itemDrugs" id="${t._id}">\n                <img src="${n}" alt="${t.title}" loading="lazy" />\n                <h3>${t.title}</h3>\n                <p>${t.price}</p>\n                <p>Quantity: ${t.quantity}</p>\n                <p>Total: ${t.total}</p>\n            </li>`}))})),i}const i=document.querySelector(".orderList");!function(){try{const n=t(JSON.parse(localStorage.getItem("cartOrders")));i.innerHTML=n}catch(t){return alert(t),t}}();
//# sourceMappingURL=histoty.65b7e5ea.js.map
