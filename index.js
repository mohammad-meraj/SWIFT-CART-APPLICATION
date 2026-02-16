const url="https://fakestoreapi.com/products";
const loadTrand=()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((json)=> DisplayTrand(json.slice(0,3)))
}

const DisplayTrand=(Data)=>{
    const trendingContainer=document.getElementById("trending-container");
    Data.forEach(product => {
        const DressBox=document.createElement("div");
        DressBox.innerHTML=`
             <div class="bg-white space-y-5 rounded-xl shadow-slate-600 shadow-lg">
                <div class="flex justify-center items-center bg-slate-400 p-5"><img src='${product.image}' alt="" srcset="" class="h-60 object-contain"></div>
               <div class="px-4 pb-4 space-y-3">
                 <div class="flex justify-between">
                    <div class="bg-blue-300 text-blue-900 font-semibold rounded-xl text-center px-3"><h2 class="">${product.category}</h2></div> 
                    <div>
                        <span><i class="fa-solid fa-star text-yellow-300"></i>rating</span>
                        <span>taka</span>
                    </div>
                </div>
                <h2 class="">description</h2>
                <h2 class=""><i class="fa-solid fa-dollar-sign"></i>price</h2>
                <div class="flex justify-between">
                    <a href="" class="btn btn-primary md:px-8"><i class="fa-regular fa-eye"></i>detail</a>
                    <a href="" class="btn btn-primary md:px-10"><i class="fa-solid fa-cart-shopping"></i>add</a>
                </div>
               </div>

               </div>
        `;
        trendingContainer.append(DressBox);
    });
}

loadTrand();


// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }