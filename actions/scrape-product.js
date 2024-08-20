"use server";
import { revalidatePath } from "next/cache";

let puppeteer;
let chrome;

if (process.env.VERCEL) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

// This IIFE runs immediately to perform an initial scrape (if necessary)
(async () => {
  let browser;
  try {
    if (process.env.VERCEL) {
      browser = await puppeteer.launch({
        args: chrome.args,
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      });
    } else {
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"], // For local environments, especially with Docker
      });
    }

    const page = await browser.newPage();
    await page.goto('https://example.com');
    // Add your scraping logic here

  } catch (error) {
    console.error('Error during scraping:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();

// This function can be called to scrape a product from Amazon
export async function scrapeAmzProduct(url) {
  let browser;
  try {
    console.log("Launching Puppeteer...");
    
    if (process.env.VERCEL) {
      browser = await puppeteer.launch({
        args: chrome.args,
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      });
    } else {
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"], // For local environments, especially with Docker
      });
    }

    const page = await browser.newPage();

    console.log("Navigating to:", url);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

    console.log("Extracting product data...");
    const data = await page.evaluate(() => {
      const productName = document.querySelector("#productTitle")?.innerText.trim() || "N/A";
      const productPrice = document.querySelector(".a-price .a-offscreen")?.innerText.trim() || "N/A";
      const imageUrl = document.querySelector("#imgTagWrapperId img")?.src || "";
      
      return { productName, productPrice, imageUrl };
    });

    console.log("Scraped Data:", data);

    await browser.close();
    revalidatePath("/");
    return { ...data, url };
  } catch (err) {
    console.error("Error during scraping:", err);
    if (browser) await browser.close(); // Ensure the browser is closed in case of an error
    return null;
  }
}
