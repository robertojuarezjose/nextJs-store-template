import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import {Suspense} from 'react';
import LoadingContainer from "@/components/global/LoadingContainer";


export default function HomePage() {
  return (

     <>
         <Hero></Hero>
         <Suspense fallback={<LoadingContainer/>}>

            <FeaturedProducts></FeaturedProducts>
         </Suspense>

     </>


  );
}
