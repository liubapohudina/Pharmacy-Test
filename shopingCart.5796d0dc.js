!function(){var e=function(e){var t=e.reduce((function(e,t){return e+parseFloat(t.price)*parseInt(t.quantity)}),0).toFixed(2);return"<p>Total price: ".concat(t,"</p>")};function t(e){try{localStorage.setItem("cartOrders",JSON.stringify(e)),localStorage.removeItem("cartItems"),localStorage.removeItem("cartOrder")}catch(e){return alert(e),e}}var n=function(t){var n=document.querySelectorAll("#counter button"),r=document.querySelector("#totalPrice"),a=e(t);r.innerHTML=a,n.forEach((function(n){n.addEventListener("click",(function(){var o=n.dataset.action,c=n.closest(".itemDrugsBasket"),i=c.querySelector("#value"),l=parseInt(i.textContent);if("increment"===o)l+=1;else if("decrement"===o)if(l>0)l-=1;else{var s=confirm("Error. Click cannot be a negative number");console.log(s)}i.textContent=l.toString();var u=c.id;t.find((function(e){return e._id===u})).quantity=l,a=e(t),r.innerHTML=a,localStorage.setItem("cartOrder",JSON.stringify(t))}))}))};var r=function(e){e.preventDefault();var n=e.target;console.log(n);var r=n.elements.name.value,a=n.elements.email.value,o=n.elements.phone.value,c=n.elements.address.value;if(""===r||""===a||""===o||""===c)return console.log("Please fill in all the fields!");var i={name:r,email:a,phone:o,address:c},l=JSON.parse(localStorage.getItem("cartOrder"))||JSON.parse(localStorage.getItem("cartItems")),s=Date.now(),u=JSON.parse(localStorage.getItem("cartOrders"))||[];u.push({number:s,user:i,products:l}),t(u),n.reset()},a=document.querySelector("#drugsBasket");document.querySelector(".contact-form").addEventListener("submit",r),function(){try{var e=JSON.parse(localStorage.getItem("cartItems"))||[];if(e.length>0){var t=e.map((function(e){var t=e.image&&""!==e.image.trim()?e.image:"https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png";return'<li class="itemDrugsBasket" id="'.concat(e._id,'">\n                <img src="').concat(t,'" alt="').concat(e.title,'" loading="lazy" width="300"/>\n                <div class="infoDrug"\n                <h3>').concat(e.title,'</h3>\n                <p id="price">').concat(e.price,'</p>\n                    <div id="counter">\n                    <button type="button" data-action="decrement">-1</button>\n                      <span id="value">1</span>\n                    <button type="button" data-action="increment">+1</button>\n                 </div>\n                </div>\n            </li>')})).join("");a.innerHTML=t,n(e)}else a.innerHTML="<p>Basket is empty!Please add products</p>"}catch(e){return console.log(e),e}}()}();
//# sourceMappingURL=shopingCart.5796d0dc.js.map