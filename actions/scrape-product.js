"use server";
import { revalidatePath } from "next/cache";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

const isProduction = process.env.NODE_ENV === "production";

async function launchBrowser() {
  if (isProduction) {
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
  } else {
    return puppeteer.launch({
      headless: true,
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
