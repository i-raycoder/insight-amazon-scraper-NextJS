"use server";
import { revalidatePath } from "next/cache";
import puppeteer from "puppeteer";

const isProduction = process.env.NODE_ENV === "production";

async function launchBrowser() {
  if (isProduction) {
    // Ensure this path is correct or set as an environment variable in Vercel
    const executablePath = process.env.CHROME_EXECUTABLE_PATH || "/usr/bin/chromium-browser";
    return puppeteer.launch({
      headless: true,
      executablePath,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  } else {
    return puppeteer.launch({
      headless: true
    });
  }
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

export async function scrapeAmzProduct(url) {
  if (!isValidURL(url)) {
    console.error("Invalid URL:", url);
    return null;
  }

  let browser;
  try {
    console.log("Launching Puppeteer...");
    browser = await launchBrowser();
    const page = await browser.newPage();

    console.log("Navigating to:", url);
    await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

    console.log("Extracting product data...");
    const data = await page.evaluate(() => {
      const productName =
        document.querySelector("#productTitle")?.innerText.trim() || "N/A";
      const productPrice =
        document.querySelector(".a-price .a-offscreen")?.innerText.trim() ||
        "N/A";
      const imageUrl =
        document.querySelector("#imgTagWrapperId img")?.src || "";

      return { productName, productPrice, imageUrl };
    });

    console.log("Scraped Data:", data);

    revalidatePath("/");
    return { ...data, url };
  } catch (err) {
    console.error("Error during scraping:", err);
    return null;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
