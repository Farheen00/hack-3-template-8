import React from "react";
import Image from "next/image";

export default function TopCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-gray-600 body-font">
        <div className="py-16">
          <h1 className="text-3xl md:text-2xl font-semibold font-[Inter] text-left ml-14 mb-8">
            Top Categories
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          

            {/* Product 2 */}
            <div className="p-4 hover:scale-105 duration-150">
              <div className="relative h-48 rounded overflow-hidden">
                <Image
                  src="/product5.png"
                  width={600}
                  height={600}
                  className=" w-full h-full"
                  alt="Wooden Chair"
                />
                <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
                  <p className="text-sm font-semibold">Wooden Chair</p>
                  <p className="text-xs font-light">157 Products</p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="p-4 hover:scale-105 duration-150">
              <div className="relative h-48 rounded overflow-hidden">
                <Image
                  src="/product6.png"
                  width={600}
                  height={600}
                  className=" w-full h-full"
                  alt="Wing Chair"
                />
                <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
                  <p className="text-sm font-semibold">Wing Chair</p>
                  <p className="text-xs font-light">3,584 Products</p>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="p-4 hover:scale-105 duration-150">
              <div className="relative h-48 rounded overflow-hidden">
                <Image
                  src="/product7.png"
                  width={600}
                  height={600}
                  className=" w-full h-full"
                  alt="Desk Chair"
                />
                <div className="absolute bottom-0 h-11 w-full text-white bg-black bg-opacity-70 p-2 text-center">
                  <p className="text-sm font-semibold">Desk Chair</p>
                  <p className="text-xs font-light">154 Products</p>
                </div>
              </div>
            </div>

           </div>
        </div>
      </section>
    </div>
  );
}

// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { client } from "@/sanity/lib/client";

// type ChairsData = {
//   title: string;
//   image: string;
// };

// export default async function TopCategory() {
//   const data = await client.fetch(`*[_type == "categories"] {
//   title,
//   "imageUrl": image.asset->url
// }
// `);

//   return (
//     <header className="container mx-auto px-4 py-12 lg:py-16 ml-20 md:ml-0 w-[700px] md:w-full">
//       <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
//         <div className="relative lg:w-2/3 hidden sm:flex items-center justify-center px-4 lg:px-0">
//           <h1 className="absolute right-16 lg:left-[10px] top-[90%] -translate-y-[50%] rotate-[-90deg] text-sm lg:text-lg font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap">
//             Explore New and Popular Styles
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-[48%]">
//             {data.slice(0, 1).map((chair: ChairsData, index: number) => (
//               <Image
//                 key={index}
//                 src={urlFor(chair.image).url()}
//                 alt={chair.title}
//                 className="h-full w-full object-cover"
//                 width={500}
//                 height={500}
//                 priority
//               />
//             ))}
//           </div>
//           <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
//             {data.slice(1).map((chair: ChairsData, index: number) => (
//               <div className="aspect-square" key={index}>
//                 <Image
//                   src={urlFor(chair.image).url()}
//                   alt={chair.title}
//                   className="h-full w-full object-cover"
//                   width={500}
//                   height={500}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
