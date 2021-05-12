import Head from "next/head";

export default function Home() {
  const categories = [
    "Running Shoes",
    "Everyday Sneakers",
    "High Tops",
    "Boat Shoes",
    "Flats",
    "Weather Repellent Shoes",
  ];

  const products = [
    {
      name: "Women's Wool Runner Mizzles",
      description:
        "Our weather-ready sneaker made with merino wool and Puddle Guard™.",
      styles: [
        {
          name: "Lichen (White Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2O53FQJOYt6EMWfFkefnNl/1",
        },
        {
          name: "Bough (Beige Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7sTEUqZ6kJHOR9OfoxJHxa/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MTBK_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_TRUE_BLACK_BLACK_6e5c1872-ae70-4024-994a-173c71b2d11f.png?v=1604682308",
        },
        {
          name: "Ironbark (Light Grey Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MIRB_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_IRONBARK_LIGHT_GREY_327dcaee-4432-4837-bed8-83fa5057796b.png?v=1612260118",
        },
        {
          name: "Savanna Night (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MSVN_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_SAVANNA_NIGHT_CREAM_290f92ff-73a3-4942-b7d8-14c739a200df.png?v=1598997128",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MBKS_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_BLACK_SANDS_328ca317-9440-418f-a825-91a40937845e.png?v=1598997149",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MGIN_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_GINSENG_BEIGE_04839587-7b79-4da4-a8a7-5feffbf9f840.png?v=1598997213",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MPAC_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_PACIFIC_88693a9e-9c00-469f-9f20-8610ae2d7d04.png?v=1598997180",
        },
        {
          name: "Peppercorn (Dark Grey Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WW1MPEP_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_MIZZLE_PEPPERCORN_DARK_GREY_d23787ab-8bb0-46b0-953e-2356ba2bad8c.png?v=1598997203",
        },
      ],
    },
  ];

  return (
    <div className="font-poppins">
      <Head>
        <title>Allbirds</title>
      </Head>
      <div className="bg-lime px-4 py-1">
        <p className="text-white font-normal text-sm text-center">
          We're raising prices on all products by $1 today in support of the
          planet.{" "}
          <a href="#" className="underline cursor-pointer">
            Learn More.
          </a>
        </p>
      </div>
      <header className="z-10 sticky top-0 bg-white flex items-center justify-between px-4 py-3 ">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img
            className="h-8"
            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
            alt="Allbirds"
          />
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </header>
      <main>
        <div>
          <div className="flex justify-between items-center px-8 py-4">
            <div>
              <div className="text-xs font-medium text-gray-900 space-x-1">
                <a href="#" className="underline">
                  Home
                </a>
                <span>/</span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                Women's Shoes
              </div>
            </div>
            <div>
              <button className="block">
                <svg
                  className="h-6 w-6 transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 px-8 py-3 overflow-x-auto scrollbars-hidden">
            <div className="inline-flex space-x-5 px-1 text-sm">
              {categories.map((category) => (
                <a href="#" className="text-gray-800 whitespace-nowrap">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="flex items-center space-x-4 bg-green-700 bg-opacity-20 px-8 py-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 transform rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div>
              <div className="flex space-x-2">
                <h2 className="text-sm font-medium text-gray-900">
                  Pay It The Planet
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-sm font-light text-gray-900 text-opacity-90">
                Every Black Friday purchase supports Fridays For Future
              </p>
            </div>
          </div>
          <div className="py-12 px-8">
            {products.map((product) => (
              <div>
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-800">{product.description}</p>
                </div>
                <div className="shadow-xl mt-4">
                  <div className="shadow-lg">
                    <a href="">
                      <div>
                        <img src={product.styles[0].image} alt="" />
                      </div>
                      <div className="px-4 pt-3">
                        <h3 className="text-sm font-semibold">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-800">
                          {product.styles[0].name}
                        </p>
                      </div>
                    </a>
                    <div className="mt-1 px-4 pb-4">
                      <p className="text-sm text-gray-800">
                        {product.styles[0].price}
                      </p>
                      <div className="mt-4 flex space-x-4">
                        {product.styles.slice(0, 6).map((style, i) => (
                          <button
                            className={`h-6 w-6 outline-none focus:outline-none flex flex-col rounded-full overflow-hidden transform -rotate-45 border border-gray-300 ${
                              i === 0
                                ? "ring-2 ring-offset-1 ring-gray-300"
                                : ""
                            }`}
                          >
                            <span className="sr-only">{style.name}</span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[0] }}
                            />
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[1] }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="border-t">
                      <button className="px-4 py-2 flex text-sm w-full items-center outline-none focus:outline-none justify-between">
                        <span className="font-semibold">Quick Add</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
