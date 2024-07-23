'use client'

import Consortium from "@/components/Consortium/Consortium";
import FeatureBoard from "@/components/Features/FeatureBoard/FeatureBoard";
import FeaturesList from "@/components/Features/FeatureList/FeaturesList";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { NavBar } from "@/components/Index";
import Questions from "@/components/Questions/Questions";
import { GradientContainer } from "@/components/ReusableComponents";
import TeamOfSyncAI from "@/components/TeamOfSyncAI/TeamOfSyncAI";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className=" bg-[var(--darkBg)] text-white overflow-hidden">
        {/* <GradientContainer/> */}
        <ParallaxProvider>
     <NavBar/>
     <Hero/>
     <FeatureBoard/>
     <FeaturesList/>
     <Consortium/>
     <TeamOfSyncAI/>
     <Questions/>
     <Footer/>
     </ParallaxProvider>
    </div>
  );
}
