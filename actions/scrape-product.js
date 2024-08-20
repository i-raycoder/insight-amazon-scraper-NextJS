"use server";
import { revalidatePath } from "next/cache";

const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
    });

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


export async function scrapeAmzProduct(url) {
  try {
    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({ headless: true }); // Headless mode
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
    return {...data, url};
  } catch (err) {
    console.error("Error during scraping:", err);
    return null;
  }
}
