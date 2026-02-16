/**
 * why choose us section
 */

const chooseUsData = [
  {
    id: 1,
    icon: `<i class="ri-truck-line text-2xl text-indigo-600"></i>`,
    title: "Fast Delivery",
    description:
      "Get your orders delivered to your doorstep quickly and efficiently.",
  },
  {
    id: 2,
    icon: `<i class="ri-customer-service-line text-2xl text-indigo-600"></i>`,
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you.",
  },
  {
    id: 3,
    icon: `<i class="ri-shield-check-line text-2xl text-indigo-600"></i>`,
    title: "Secure Payment",
    description:
      "Experience safe and secure transactions with our encrypted payment systems.",
  },
  {
    id: 4,
    icon: `<i class="ri-loop-right-line text-2xl text-indigo-600"></i>`,
    title: "Easy Returns",
    description: "Not satisfied? Return your products easily within 30 days.",
  },
];

const whyChooseUsCardContainer = document.getElementById(
  "why_choose_us_card_container",
);

chooseUsData.forEach((item) => {
  whyChooseUsCardContainer.innerHTML += `
    <div class="bg-white rounded-lg border border-gray-100 px-6 py-8">
        <div class="space-y-6">
            <!-- icon -->
            <div class="size-12 bg-indigo-50 rounded-lg grid place-items-center">
                <span> ${item.icon} </span>
            </div>

            <!-- text contents -->
            <div class="space-y-3">
                <h1 class="text-gray-900 text-lg font-semibold">${item.title}</h1>
                <p class="text-gray-500 text-sm font-normal leading-relaxed">${item.description}</p>
            </div>
        </div>
    </div>
  `;
});
// why choose us section end
