import Companylogo from "./components/CompanyLogo"
import ExploreStyles from "./components/ExploreStyles"
import FeaturedProducts from "./components/FeaturedProducts"
import Hero from "./components/Hero"

import TopCategory from "./components/TopCategory"

export default function Home() {
  return(
  <main className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
  
    <Hero />
    <Companylogo />
    <FeaturedProducts />
    <TopCategory />
    <ExploreStyles />
    

  
  </main>)
}