var e=function(e){return`<p>Total price: ${e.reduce(((e,t)=>e+parseFloat(t.price)*parseInt(t.quantity)),0).toFixed(2)}</p>`};var t=function(t){const n=document.querySelectorAll("#counter button"),o=document.querySelector("#totalPrice");let i=e(t);o.innerHTML=i,n.forEach((n=>{n.addEventListener("click",(()=>{const a=n.dataset.action,r=n.closest(".itemDrugsBasket"),c=r.querySelector("#value");let l=parseInt(c.textContent);if("increment"===a)l+=1;else if("decrement"===a)if(l>0)l-=1;else{const e=confirm("Error. Click cannot be a negative number");console.log(e)}c.textContent=l.toString();const s=r.id;t.find((e=>e._id===s)).quantity=l,i=e(t),o.innerHTML=i}))}))};var n=function(e){e.preventDefault();const t=e.target;console.log(t);const n=t.elements.name.value,o=t.elements.email.value,i=t.elements.phone.value,a=t.elements.address.value;if(""===n||""===o||""===i||""===a)return console.log("Please fill in all the fields!");console.log(`Name: ${n}, Email: ${o}, Phone: ${i}, Address: ${a}`),t.reset()};const o=document.querySelector("#drugsBasket");document.querySelector(".contact-form").addEventListener("submit",n),function(){try{let e=JSON.parse(localStorage.getItem("cartItems"))||[];if(e.length>0){const n=e.map((e=>{const t=e.image&&""!==e.image.trim()?e.image:"https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png";return`<li class="itemDrugsBasket" id="${e._id}">\n                <img src="${t}" alt="${e.title}" loading="lazy" width="300"/>\n                <div class="infoDrug"\n                <h3>${e.title}</h3>\n                <p id="price">${e.price}</p>\n                    <div id="counter">\n                    <button type="button" data-action="decrement">-1</button>\n                      <span id="value">1</span>\n                    <button type="button" data-action="increment">+1</button>\n                 </div>\n                </div>\n            </li>`})).join("");o.innerHTML=n,t(e)}else o.innerHTML="<p>Basket is empty!Please add products</p>"}catch(e){return console.log(e),e}}();
//# sourceMappingURL=shopingCart.9e2a95fb.js.map