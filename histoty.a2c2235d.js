!function(){function e(e){var t="";return e.forEach((function(e){t+='<div class="orderBlock">',t+="<h2>Order Number: ".concat(e.number,"</h2>"),t+="<h3>User: ".concat(e.user.name,"</h3>"),t+='<ul class="orderList drugsList">',e.products.forEach((function(e){var r=e.image&&""!==e.image.trim()?e.image:"https://cdn1.iconfinder.com/data/icons/pikku-ui/16/image-512.png";t+='<li class="itemDrugs historyItem" id="'.concat(e._id,'">\n                <img src="').concat(r,'" alt="').concat(e.title,'" loading="lazy" />\n                <h3>').concat(e.title,"</h3>\n                <p>").concat(e.price,"</p>\n                <p>Quantity: ").concat(e.quantity,"</p>\n                <p>Total: ").concat(e.total,"</p>\n            </li>")})),t+="</ul>",t+="</div>"})),t}var t=document.querySelector(".orderList"),r=document.querySelector(".history-form"),n=[];r.addEventListener("input",(function(r){var a=r.currentTarget,c=a.elements.name.value.toLowerCase(),o=a.elements.phone.value.toLowerCase();try{var i=e(n.filter((function(e){return e.user.name.toLowerCase().includes(c)&&e.user.phone.toLowerCase().includes(o)})));t.innerHTML=i}catch(e){return alert(e),e}})),function(){try{var r=e(n=JSON.parse(localStorage.getItem("cartOrders")));t.innerHTML=r}catch(e){return alert(e),e}}()}();
//# sourceMappingURL=histoty.a2c2235d.js.map
