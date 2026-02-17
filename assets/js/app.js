/**
 * load and display category button
 */
const loadCategoryButtons = () => {
  const url = "https://fakestoreapi.com/products/categories";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoryButtons(data));
};

const displayCategoryButtons = (btns) => {
  const categoryButtonsContainer = document.getElementById(
    "category_buttons_container",
  );

  btns.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button class="text-slate-400 text-sm font-medium px-5 py-2 bg-transparent rounded-xl border border-black/10 hover:bg-slate-100">
            ${makeUpperCase(category)}
        </button>
    `;

    // append
    categoryButtonsContainer.appendChild(div);
  });
};
/** --------------------------------------------------------------------- */

/**
 * load and display products cards
 */
const loadAllProducts = () => {
  const url = "https://fakestoreapi.com/products";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllProducts(data));
};

const displayAllProducts = (products) => {
  const productsCardContainer = document.getElementById(
    "products_card_container",
  );
  // empty products card container
  productsCardContainer.innerHTML = "";

  // loop through on all products
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="p-6 rounded-lg space-y-6 bg-white border border-gray-100">
        <!-- product image -->
        <div class="w-full h-72 bg-gray-50 p-6 rounded-sm">
            <img
                class="w-full h-full object-contain"
                src=${product.image}
                alt="product"
            />
        </div>

        <!-- contents -->
        <div class="">
            <!-- category and rating -->
            <div class="mb-3 flex items-center justify-between">
                <div class="">
                    <span class="text-indigo-600 text-xs font-medium px-3 py-1 bg-indigo-50 rounded-xl"
                        >${makeUpperCase(product.category)}</span
                    >
                </div>

                <div class="flex items-center gap-1">
                    <span>
                        <i class="ri-star-fill text-yellow-400"></i>
                    </span>

                    <span class="text-gray-900 text-sm font-semibold"> ${product.rating.rate} </span>

                    <span class="text-gray-600 text-sm font-normal"> (${product.rating.count}) </span>
                </div>
            </div>

            <!-- title and price -->
            <div class="mb-6 space-y-2">
                <h1 class="text-gray-900 text-base font-semibold line-clamp-1">
                    ${product.title}
                </h1>

                <!-- price -->
                <div class="">
                    <p class="text-gray-900 text-lg font-bold">$${product.price}</p>
                </div>
            </div>

            <!-- buttons div -->
            <div class="grid grid-cols-2 gap-4">
                <button
                    class="w-full px-4 py-3.5 rounded-sm border border-gray-200 bg-transparent flex items-center justify-center gap-2.5 text-gray-700 text-sm font-medium hover:bg-gray-200"
                >
                    <span>
                        <i class="ri-eye-line"></i>
                    </span>
                    <span>Details</span>
                </button>

                <button
                    class="w-full px-4 py-3.5 rounded-sm bg-indigo-600 hover:bg-indigo-800 flex items-center justify-center gap-2.5 text-white text-sm font-medium"
                >
                    <span>
                        <i class="ri-shopping-cart-line"></i>
                    </span>
                    <span> Add </span>
                </button>
            </div>
        </div>
    </div>
    `;

    // append
    productsCardContainer.appendChild(div);
  });
};

// make first latter to uppercase function
const makeUpperCase = (str) => {
  const word = str.split(" ");
  const fullCategory = [];

  word.forEach((word) => {
    const fullWord = word.slice(1).toLowerCase();
    const makeUpperCaseFirstLatter = word.slice(0, 1).toUpperCase();
    const completeWord = makeUpperCaseFirstLatter + fullWord;
    fullCategory.push(completeWord);
  });
  // return fullCategory
  return fullCategory.join(" ");
};

// call all functions
loadCategoryButtons();
loadAllProducts();
