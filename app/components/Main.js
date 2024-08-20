export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Insight: Amazon scraping made easy
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Insight is an Amazon product scraper designed specifically for e-com
          businesses
          <br />
          to increase and enhance product sales.
        </h2>
        <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="/scrape"
          >
            <div className="flex text-lg">
              <span className="justify-center">Scrape</span>
            </div>
          </a>
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="/bulk-scrape"
          >
            <div className="flex text-lg">
              <span className="justify-center">Scrape Bulk</span>
            </div>
          </a>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt="Placeholder Image"
          src="./ins.png"
        ></img>
      </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Reliable and efficient to use.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Insight is designed to provide and ensure reliability and efficiency.
      </p>
      <div className="pt-40 pb-24 max-w-4xl mx-auto px-3 md:px-6">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img className="w-16 mb-3" src="./rocket.png" alt="Fast" />
            <h3 className="text-xl font-extrabold uppercase text-white">
              Fast
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 mb-3" src="./secure.png" alt="Secure" />
            <h3 className="text-xl font-extrabold uppercase text-white">
              Secure
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 mb-3" src="./money.png" alt="Affordable" />
            <h3 className="text-xl font-extrabold uppercase text-white">
              Affordable
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-16 mb-3" src="./rely.png" alt="Reliable" />
            <h3 className="text-xl font-extrabold uppercase text-white">
              Reliable
            </h3>
          </div>
        </div>
      </div>

      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get news about my latest projects.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
