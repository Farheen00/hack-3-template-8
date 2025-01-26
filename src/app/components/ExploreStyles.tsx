// // import Image from "next/image";

// // export default function ExploreStyles() {
// //   return (
// //     <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
      
// //       {/* First Div with Main Image */}
// //       <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
// //         <div className="w-full h-full relative">
// //           <Image
// //             src="/product3.png"
// //             alt="Main Image"
// //             width={400}
// //             height={560}
// //             className="object-cover shadow-lg"
// //           />
// //         </div>
// //       </div>

// //       {/* Second Div with Grid of Images */}
// //       <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
// //         {/* 4 Images */}
// //         <div className="relative">
// //           <Image
// //             src="/product4.png"
// //             alt="Image 1"
// //             width={200}
// //             height={280}
// //             className="rounded-lg object-cover shadow-lg"
// //           />
// //         </div>
// //         <div className="relative">
// //           <Image
// //             src="/product2.png"
// //             alt="Image 2"
// //             width={200}
// //             height={280}
// //             className="rounded-lg object-cover shadow-lg"
// //           />
// //         </div>
// //         <div className="relative">
// //           <Image
// //             src="/product10.png"
// //             alt="Image 3"
// //             width={200}
// //             height={280}
// //             className="rounded-lg object-cover shadow-lg"
// //           />
// //         </div>
// //         <div className="relative">
// //           <Image
// //             src="/product2.png"
// //             alt="Image 4"
// //             width={200}
// //             height={280}
// //             className="rounded-lg object-cover shadow-lg"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // // }
// //  import Image from "next/image";
// // import { urlFor } from "@/sanity/lib/image";
// // import { client } from "@/sanity/lib/client";

// // type ChairsData = {
// //   title: string;
// //   image: string;
// // };

// // export default async function ExploreStyles() {
// //   const data = await client.fetch(`*[_type == "products" && "gallery" in tags] {
// //   title,
// //   image,
// // }
// // `);

// //   return (
// //     <header className="container mx-auto px-4 py-12 lg:py-16 ml-20 md:ml-0 w-[700px] md:w-full">
// //       <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
// //         <div className="relative lg:w-2/3 hidden sm:flex items-center justify-center px-4 lg:px-0">
// //           <h1 className="absolute right-16 lg:left-[10px] top-[90%] -translate-y-[50%] rotate-[-90deg] text-sm lg:text-lg font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap">
// //             Explore New and Popular Styles
// //           </h1>
// //         </div>
// //         <div className="flex flex-col md:flex-row items-center gap-8">
// //           <div className="w-full md:w-[48%]">
// //             {data.slice(0, 1).map((chair: ChairsData, index: number) => (
// //               <Image
// //                 key={index}
// //                 src={urlFor(chair.image).url()}
// //                 alt={chair.title}
// //                 className="h-full w-full object-cover"
// //                 width={500}
// //                 height={500}
                
// //               />
// //             ))}
// //           </div>
// //           <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
// //             {data.slice(1,5).map((chair: ChairsData, index: number) => (
// //               <div className="aspect-square" key={index}>
// //                 <Image
// //                   src={urlFor(chair.image).url()}
// //                   alt={chair.title}
// //                   className="h-full w-full object-cover"
// //                   width={500}
// //                   height={500}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// //previous//

// // "use client"
// // import Image from "next/image";
// // import { urlFor } from "@/sanity/lib/image";
// // import { client } from "@/sanity/lib/client";
// // import { useEffect, useState } from "react";

// // type ChairsData = {
// //   title: string;
// //   image: string;
// // };

// // export default function ExploreStyles() {
// //   const [data, setData] = useState<ChairsData[]>([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const result = await client.fetch(`*[_type == "products" && "gallery" in tags] {
// //         title,
// //         image,
// //       }`);
// //       setData(result);
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <header className="container mx-auto px-4 py-12 lg:py-16 ml-20 md:ml-0 w-[700px] md:w-full">
// //       <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
// //         <div className="relative lg:w-2/3 hidden sm:flex items-center justify-center px-4 lg:px-0">
// //           <h1 className="absolute right-16 lg:left-[10px] top-[90%] -translate-y-[50%] rotate-[-90deg] text-sm lg:text-lg font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap">
// //             Explore New and Popular Styles
// //           </h1>
// //         </div>
// //         <div className="flex flex-col md:flex-row items-center gap-8">
// //           <div className="w-full md:w-[48%]">
// //             {data.slice(0, 1).map((chair: ChairsData, index: number) => (
// //               <Image
// //                 key={index}
// //                 src={urlFor(chair.image).url()}
// //                 alt={chair.title}
// //                 className="h-full w-full object-cover"
// //                 width={500}
// //                 height={500}
// //               />
// //             ))}
// //           </div>
// //           <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
// //             {data.slice(1, 5).map((chair: ChairsData, index: number) => (
// //               <div className="aspect-square" key={index}>
// //                 <Image
// //                   src={urlFor(chair.image).url()}
// //                   alt={chair.title}
// //                   className="h-full w-full object-cover"
// //                   width={500}
// //                   height={500}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// "use client"
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { client } from "@/sanity/lib/client";
// import { useEffect, useState } from "react";

// type ChairsData = {
//   title: string;
//   image: string;
// };

// export default function ExploreStyles() {
//   const [data, setData] = useState<ChairsData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await client.fetch(`*[_type == "products" && "gallery" in tags] {
//         title,
//         image,
//       }`);
//       setData(result);
//     };

//     fetchData();
//   }, []);

//   return (
//     <header className="container mx-auto px-4 py-12 lg:py-16 sm:px-6 md:px-8">
//       <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[auto_1fr]">
//         <div className="relative hidden md:flex items-center justify-center px-4 lg:px-0">
//           <h1 className="absolute right-8 md:right-12 lg:left-4 top-[90%] -translate-y-1/2 rotate-[-90deg] text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap">
//             Explore New and Popular Styles
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Large Image */}
//           <div className="w-full md:w-[48%] lg:w-[60%]">
//             {data.slice(0, 1).map((chair: ChairsData, index: number) => (
//               <Image
//                 key={index}
//                 src={urlFor(chair.image).url()}
//                 alt={chair.title}
//                 className="h-full w-full object-cover rounded-lg"
//                 width={500}
//                 height={500}
//               />
//             ))}
//           </div>

//           {/* Grid of Smaller Images */}
//           <div className="grid grid-cols-2 gap-4 w-full md:w-[48%] lg:w-[40%]">
//             {data.slice(1, 5).map((chair: ChairsData, index: number) => (
//               <div className="aspect-square" key={index}>
//                 <Image
//                   src={urlFor(chair.image).url()}
//                   alt={chair.title}
//                   className="h-full w-full object-cover rounded-lg"
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
"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

type ChairsData = {
  title: string;
  image: string;
};

export default function ExploreStyles() {
  const [data, setData] = useState<ChairsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`*[_type == "products" && "gallery" in tags] {
        title,
        image,
      }`);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
      {/* Large Image Section */}
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          {data.slice(4,5).map((item, index) => (
            <Image
              key={index}
              src={urlFor(item.image).url()}
              alt={item.title}
              width={400}
              height={560}
              className="object-cover shadow-lg rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Grid of Smaller Images */}
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        {data.slice(1, 5).map((item, index) => (
          <div className="relative" key={index}>
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              width={200}
              height={280}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}