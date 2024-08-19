# Insight

![Insight Logo](public/insight-logo.png)

**Insight** is a powerful Amazon product detail scraper built with Next.js, Tailwind CSS, and Puppeteer. It allows users to scrape detailed product information from Amazon using either individual product URLs or by bulk scraping from a list of URLs or Excel files. This README provides a comprehensive guide to get you started with Insight.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Scrape Individual Products**: Enter Amazon product URLs to fetch detailed product information.
- **Bulk Scrape**: Add multiple product URLs (one per line) or upload Excel files (`.csv`, `.xlsx`, `.xls`) to scrape data in bulk.
- **Export Data**: Export scraped product data to JSON files for easy access and manipulation.
- **Responsive Design**: Modern and responsive UI designed with Tailwind CSS.

## Getting Started

To get started with Insight, you'll need to set up a few things on your local machine. Follow the instructions below to install and run the application.

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/insight.git
cd insight
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add any necessary environment variables. For example:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Usage

### Run the Development Server

Start the development server to run Insight locally:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

### Scraping Individual Products

1. Enter the Amazon product URL in the search field.
2. Click "Scrape" to fetch the product details.

### Bulk Scraping

1. Navigate to the "Bulk Scrape" page.
2. **Method 1**: Enter multiple Amazon product URLs, one per line, into the textarea and click "Scrape Bulk."
3. **Method 2**: Upload an Excel file containing product URLs and click "Scrape Bulk."
4. View and export the scraped data as needed.

### Exporting Data

- To export all scraped products to a JSON file, click "Export All" in the relevant section.

## Commands

Here's a quick overview of the commands used in Insight:

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Run Tests**: `npm test`

## Contributing

Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Additional Notes:

- **Favicon**: Make sure the favicon is correctly placed in the `public` directory.
- **File Paths**: Adjust any file paths and environment variables as necessary.

Feel free to customize this README further to better suit your project’s specifics or branding.