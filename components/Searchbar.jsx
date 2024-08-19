'use client'
import React, { useState } from 'react';
import useStore from '@/hooks/amz-products';
import { scrapeAmzProduct } from '@/actions/scrape-product'; // Adjust the path to where scrape.js is located

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [scraping, setScraping] = useState(false);

  // From Zustand
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with URL:", searchPrompt);
    setScraping(true);
    try {
      const product = await scrapeAmzProduct(searchPrompt);
      if (product) {
        console.log("Product added to store:", product);
        addProduct(product);
      }
      setSearchPrompt("");
    } catch (err) {
      console.error("Error in handleSubmit:", err);
    } finally {
      setScraping(false);
    }
  };

  const handleExport = (product) => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(product, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = `${product.productName}.json`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center">
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter Amazon product URL"
        className="w-full md:w-1/2 p-2 pl-10 text-sm text-gray-700"
      />
      <button
  onClick={handleSubmit}
  className={`ml-2 md:ml-4 py-2 px-6 text-sm text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
    scraping ? 'opacity-50 cursor-not-allowed' : ''
  }`}
  disabled={scraping}
>
  {scraping ? 'Scraping...' : 'Scrape'}
</button>


        

    </div>
  );
};

export default Searchbar;
