"use client"

import Searchbar from "@/components/Searchbar";
import useStore from "@/hooks/amz-products"; // Assuming you have the store setup correctly
import Link from 'next/link'; // Import Link for navigation

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
      <header className="bg-gray-800 p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">
            Insight
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center">
  <Searchbar />
  <Link href="/bulk-scrape">
    <button className="ml-2 md:ml-4 py-2 px-6 text-sm text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      Scrape Bulk
    </button>
  </Link>
</div>

      </header>
    );
  }

  function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full text-center">
        <p>&copy; 2024 Insight. All rights reserved.</p>
      </footer>
    );
  }
  
  const handleExport = (product) => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(product, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = `${product.productName}.json`;
    document.body.appendChild(element);
    element.click();
  };
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">Insight.</h1>
        <p className="text-lg text-gray-600">Amazon scraping made easy.</p>

        {/* Export All Button */}
        {products.length > 0 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => exportAll(products)}
              className="py-2 px-6 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md"
            >
              Export All
            </button>
          </div>
        )}

        {/* Display Scraped Products */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-sm p-4 bg-white">
              {/* Product Image */}
              {product.imageUrl && (
                <div className="flex justify-center mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              )}

              {/* Product Details */}
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.productName}
                </h2>
                <p className="text-xl font-semibold text-green-600 mb-4">
                  {product.productPrice}
                </p>
              </div>

              {/* Export Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleExport(product)}
                  className="py-2 px-6 text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md"
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