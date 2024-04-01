import Hero_section from "@/components/Hero-section/Hero";
import Navbarr from "@/components/Navbar/Navbar";
import Trending_search_mobile from "@/components/Trending-search-mobile/Trending_search_mobile";
import Trending_search from "@/components/Trending-search/Trending_search";
import Car from "@/components/Car/Car";
import What_we_do from "@/components/What-we-do/What_we_do";
import Explore_mobile from "@/components/Explore_mobile/Explore_mobile";
import Drive from "@/components/Drive/Drive";
import Explore from "@/components/Explore/Explore";
import Blogs from "@/components/Blogs/Blogs";
import Trip from "@/components/Trip/Trip";
import Eateries_to_explore from "@/components/Eateries_to_explore/Eateries_to_explore";
import Review from "@/components/Review/Review";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      {/* navbar component */}
      <Navbarr />

      {/* Hero section component */}

      <Hero_section />

      {/* Trending Search Mobile component */}

      <Trending_search_mobile />

      {/* Trending Search */}

      <Trending_search/>

      {/* car component */}

      <Car />

      {/* What we do component */}

      <What_we_do/>

      {/* Explore Mobile component */}

      <Explore_mobile/>

      {/* Drive component */}

      <Drive/>

      {/* Explore component */}

      <Explore/>

      {/* Blogs component */}

      <Blogs/>

      {/* Trip  Component*/}

      <Trip/>

      {/* Eateries to Explore component */}

      <Eateries_to_explore/>

      {/* Review Component */}

      <Review/>

      {/* FAQ Component */}

      <Faq/>

      {/* Footer Component */}
      <Footer/>
    </>
  );
}
