"use client";

import Searchbar from "@/components/Searchbar";
import useStore from "@/hooks/amz-products"; // Assuming you have the store setup correctly
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  const products = useStore((state) => state.products);

  const exportAll = (products) => {
    const dataStr = JSON.stringify(products, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "scraped-products.json";
    a.click();

    URL.revokeObjectURL(url);
  };
  function Header() {
    return (
      <header class="bg-black p-4 shadow-md flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-bold text-white">Insight</h1>
        </div>
        <div class="w-full ml-6 text-center flex flex-col md:flex-row md:justify-center md:items-center">
          <Searchbar />
          <a
            class="inline-flex text-center items-center tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-10 text-md md:mt-0 focus:shadow-outline"
            href="/bulk-scrape"
          >
            <div class="flex text-lg">
              <span class=" text-center">Scrape Bulk</span>
            </div>
          </a>
        </div>
      </header>
    );
  }

  function Footer() {
    return (
      <footer class="bg-black text-white p-4 fixed bottom-0 w-full text-center">
        <p>&copy; 2024 Insight - All Rights Reserved.</p>
      </footer>
    );
  }

  const handleExport = (product) => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(product, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${product.productName}.json`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div class="bg-gray-100 min-h-screen">
      <Header />

      <main class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 class="text-3xl font-bold text-gray-900 leading-tight">
          Insight.
        </h1>
        <p class="text-lg text-gray-600">Amazon scraping made easy.</p>

        {/* Export All Button */}
        {products.length > 0 && (
          <div class="mt-6 flex justify-end">
            <button
              onClick={() => exportAll(products)}
              class="py-2 px-6 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md"
            >
              Export All
            </button>
          </div>
        )}

        {/* Display Scraped Products */}
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              class="border border-gray-300 rounded-lg shadow-sm p-4 bg-white"
            >
              {/* Product Image */}
              {product.imageUrl && (
                <div class="flex justify-center mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    class="w-40 h-40 object-contain"
                  />
                </div>
              )}

              {/* Product Details */}
              <div class="text-center">
                <h2 class="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.productName}
                </h2>
                <p class="text-xl font-semibold text-green-600 mb-4">
                  {product.productPrice}
                </p>
              </div>

              {/* Export Button */}
              <div class="flex justify-center">
                <button
                  onClick={() => handleExport(product)}
                  class="py-2 px-6 text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md"
                >
                  Export
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
