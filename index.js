const url="https://fakestoreapi.com/products";

const loadTrand=()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((json)=> DisplayTrand(json.slice(0,3)))
}

let allProducts = [];

const loadProduct = async () => {
    const res = await fetch(url);
    const data = await res.json();

    allProducts = data;        
    DisplayCategories(data);  
    DisplayProducts(data); 
};

const loadModal=async(id)=>{
    const res= await fetch(`https://fakestoreapi.com/products/${id}`);
    const data= await res.json();
    displayModal(data);
}

const ActiveButton =(active) => {
    const buttons = document.querySelectorAll("#Product-container button");
    buttons.forEach(btn => btn.classList.remove("btn-active"));
    buttons.forEach(btn => btn.classList.add("btn-outline"));
    
    active.classList.add("btn-active");
    active.classList.remove("btn-outline");
};

const displayModal=(info)=>{
    const modalData=document.getElementById("modal-container");
       const modalInfo=document.createElement("div");
        modalData.innerHTML=`
    <h3 class="text-lg text-center text-blue-400 font-bold pb-1">${info.title}</h3>
    <p class="font-semibold text-center text-gray-600 pb-2">"${info.description}"</p>
    <div class="flex justify-between py-2">
       <div><span class="font-bold">Rating:<i class="fa-solid fa-star text-yellow-300"></i>${info.rating.rate}</span> <span>(${info.rating.count})</span></div>
       <h2 class="font-bold">Price:<i class="fa-solid fa-dollar-sign"></i>${info.price}</h2>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Buy Now</button>
        <button class="btn btn-primary">Add to Cart</button>
      </form>
    </div>
        `
        document.getElementById("my_modal_5").showModal();
}

const DisplayTrand=(Data)=>{
    const trendingContainer=document.getElementById("trending-container");
    Data.forEach(product => {
        const DressBox=document.createElement("div");
        DressBox.innerHTML=`
             <div class="bg-white space-y-5 rounded-xl shadow-slate-600 shadow-lg">
                <div class="flex justify-center items-center rounded-t-xl bg-slate-400 p-5"><img src='${product.image}' alt="" srcset="" class="h-60 object-contain"></div>
               <div class="px-4 pb-4 space-y-3">
                 <div class="flex justify-between">
                    <div class="bg-blue-300 text-blue-900 font-semibold rounded-xl text-center px-3"><h2 class="">${product.category}</h2></div> 
                    <div>
                        <span><i class="fa-solid fa-star text-yellow-300"></i>${product.rating.rate}</span>
                        <span>(${product.rating.count})</span>
                    </div>
                </div>
                <h2 class="truncate text-base font-semibold">${product.title}</h2>
                <h2 class=""><i class="fa-solid fa-dollar-sign"></i>${product.price}</h2>
                <div class="flex flex-1 justify-between">
                    <button onClick="loadModal(${product.id})" class="btn btn-outline border-2 hover:border btn-primary rounded-lg text-gray-600 font-semibold border-gray-400 hover:text-white md:px-7"><i class="fa-regular fa-eye "></i>Detail</button>
                    <button class="btn btn-outline border-2 hover:border btn-primary rounded-lg text-gray-600 font-semibold border-gray-400 shadow-sm hover:text-white  md:px-8"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                </div>
               </div>

               </div>
        `;
        trendingContainer.append(DressBox);
    });
}

const DisplayCategories = (products) => {
    const productContainer = document.getElementById("Product-container");
    productContainer.innerHTML = "";

    const categories = [...new Set(products.map((pro) => pro.category))];
    categories.unshift("All");

    categories.forEach((data) => {
        const Catbtn = document.createElement("button");
        Catbtn.className = "btn btn-outline btn-primary rounded-3xl text-gray-600 font-semibold border-gray-400 hover:text-white m-1";
        Catbtn.innerText = data;
        Catbtn.addEventListener("click", () => {
            if (data === "All") {
                DisplayProducts(allProducts);
            } else {
                const UniqueCat = allProducts.filter(pro => pro.category === data);
                DisplayProducts(UniqueCat);
            }
            ActiveButton(Catbtn);
        });

        productContainer.appendChild(Catbtn);
    });
};

const DisplayProducts = (products) => {
    const container = document.getElementById("products-Box");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white space-y-5 rounded-xl shadow-slate-600 shadow-lg">
                <div class="flex justify-center items-center rounded-t-xl bg-slate-400 p-5"><img src='${product.image}' alt="" srcset="" class="h-60 object-contain"></div>
               <div class="px-4 pb-4 space-y-3">
                 <div class="flex justify-between">
                    <div class="bg-blue-300 text-blue-900 font-semibold rounded-xl text-center px-3"><h2 class="">${product.category}</h2></div> 
                    <div>
                        <span><i class="fa-solid fa-star text-yellow-300"></i>${product.rating.rate}</span>
                        <span>(${product.rating.count})</span>
                    </div>
                </div>
                <h2 class="truncate text-base font-semibold">${product.title}</h2>
                <h2 class=""><i class="fa-solid fa-dollar-sign"></i>${product.price}</h2>
                <div class="flex flex-1 justify-between">
                    <button onClick="loadModal(${product.id})" class="btn btn-outline border-2 hover:border btn-primary rounded-lg text-gray-600 font-semibold border-gray-400 hover:text-white md:px-7"><i class="fa-regular fa-eye "></i>Detail</button>
                    <button class="btn btn-outline border-2 hover:border btn-primary rounded-lg text-gray-600 font-semibold border-gray-400 shadow-sm hover:text-white  md:px-8"><i class="fa-solid fa-cart-shopping"></i>Add</button>
                </div>
               </div>

               </div>
        `;

        container.appendChild(card);
    });
};


loadTrand();
loadProduct();

