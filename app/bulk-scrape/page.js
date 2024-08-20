"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { scrapeAmzProduct } from "@/actions/scrape-product";
import useStore from "@/hooks/amz-products";
import Footer from "../components/Footer";

export default function BulkScrape() {
  const [urls, setUrls] = useState("");
  const [scraping, setScraping] = useState(false);
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);

  // Handle bulk scraping from URLs
  const handleBulkScrape = async () => {
    const urlArray = urls.split("\n").filter((url) => url.trim() !== "");
    setScraping(true);

    for (let url of urlArray) {
      try {
        const product = await scrapeAmzProduct(url);
        if (product) {
          addProduct(product);
        }
      } catch (err) {
        console.error(`Failed to scrape ${url}`, err);
      }
    }

    setScraping(false);
    setUrls(""); // Reset the input after scraping
  };
  function Header() {
    return (
      <header className="bg-gray-800 p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">Insight</h1>
        </div>
      </header>
    );
  }

  // Handle Excel file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      const urlArray = rows.flat().filter((url) => url); // Flatten and filter out empty values

      setScraping(true);

      for (let url of urlArray) {
        try {
          const product = await scrapeAmzProduct(url);
          if (product) {
            addProduct(product);
          }
        } catch (err) {
          console.error(`Failed to scrape ${url}`, err);
        }
      }

      setScraping(false);
    };

    reader.readAsArrayBuffer(file);
  };

  // Export all scraped products
  const exportAll = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "bulk-scraped-products.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto p-8 flex-grow">
        <header className="bg-black p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">Bulk Scrape.</h1>
          </div>
        </header>
        <h1 className="text-3xl font-bold text-gray-900 mb-1 pt-5">Insight.</h1>
        <p className="text-lg text-gray-600">Amazon scraping made easy.</p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <textarea
            className="w-full h-32 p-4 text-sm text-gray-800 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter multiple Amazon product URLs, one per line..."
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          />

          <div className="flex items-center space-x-4">
            <button
              onClick={handleBulkScrape}
              className={`py-2 px-6 text-sm text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                scraping ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={scraping}
            >
              {scraping ? "Scraping..." : "Scrape Bulk"}
            </button>

            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="py-2 px-4 text-sm text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {products.length > 0 && (
          <div className="mb-6 flex justify-end">
            <button
              onClick={exportAll}
              className="py-2 px-6 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md"
            >
              Export All
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm p-4 bg-white"
            >
              {product.imageUrl && (
                <div className="flex justify-center mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              )}

              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.productName}
                </h2>
                <p className="text-xl font-semibold text-green-600 mb-4">
                  {product.productPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          © 2024 Insight - All Rights Reserved.
        </div>
      </footer>
    </div>

    
  );
}
