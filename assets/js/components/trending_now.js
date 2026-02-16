/**
 * trending now section
 */
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

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

const trendingContainer = document.getElementById("trending_card_container");

products.forEach((item) => {
  trendingContainer.innerHTML += `
    <div class="p-6 rounded-lg space-y-6 bg-white border border-gray-100">
    <!-- product image -->
    <div class="w-full h-72 bg-gray-50 p-6 rounded-sm">
        <img
            class="w-full h-full object-contain"
            src=${item.image}
            alt="product"
        />
    </div>

    <!-- contents -->
    <div class="">
        <!-- category and rating -->
        <div class="mb-3 flex items-center justify-between">
            <div class="">
                <span class="text-indigo-600 text-xs font-medium px-3 py-1 bg-indigo-50 rounded-xl"
                    >${makeUpperCase(item.category)}</span
                >
            </div>

            <div class="flex items-center gap-1">
                <span>
                    <i class="ri-star-fill text-yellow-400"></i>
                </span>

                <span class="text-gray-900 text-sm font-semibold"> ${item.rating.rate} </span>

                <span class="text-gray-600 text-sm font-normal"> (${item.rating.count}) </span>
            </div>
        </div>

        <!-- title and price -->
        <div class="mb-6 space-y-2">
            <h1 class="text-gray-900 text-base font-semibold line-clamp-1">
                ${item.title}
            </h1>

            <!-- price -->
            <div class="">
                <p class="text-gray-900 text-lg font-bold">$${item.price}</p>
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
});
