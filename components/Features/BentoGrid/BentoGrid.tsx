import Image from "next/image";
import { FeatureImgOne, FeatureImgTwo, FetaureImgThree, FeatureImgFive, FeatureImgFour, FeatureImgSix, FeatureBGImg } from "../../../assets/Features/index";
import { RightArrow } from "@/components/ReusableComponents/IconList";
import SmallGradient from "@/components/ReusableComponents/SmallGradient";

const BentoGrid = () => {
    return (
        <div className=" my-[10%]">
            <div className=" w-[90%] mx-auto flex flex-col gap-3">

                {/** First Row */}
                <div className=" flex flex-row gap-4 items-start">
                    <div className=" relative w-[60%] ">

                        {/** First Img */}
                        <Image src={FeatureImgOne} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] w-[100%] " />

                        {/** Gray 'bg' div over the Image */}
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        {/** Content over the Image */}
                        <div className="absolute bottom-3 left-0 right-0 p-5 z-20 text-white">
                            <p className=" text-[25px]">SyncID: Your Palm is Your Public Key</p>
                            <p className="text-[14px]">Sync ID is a sybil-resistant verifiable credential, powered by palm signatures</p>
                            <p className="text-[14px]">secured by zkp, which is directly linked to your Cardano public key and Twitter.</p>
                        </div>
                    </div>

                    {/** Second Img */}
                    <Image src={FeatureImgTwo} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] w-[40%]" />
                </div>

                {/** Second Row */}
                <div className=" flex flex-row gap-4 items-start">
                    {/** First Img */}
                    <Image src={FetaureImgThree} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] w-[40%]" />

                    {/** Second Img */}
                    <Image src={FeatureImgFour} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] w-[60%]" />
                </div>

                {/** Third row */}
                <div className=" flex flex-row gap-4 items-center">
                    {/** First Img */}
                    <Image src={FeatureImgFive} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] w-[60%]" />
                    {/** Second Img */}
                    <Image src={FeatureImgSix} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] w-[40%]" />
                </div>

                {/** Gradient */}
                <SmallGradient innerClass="w-[70px]" outerClass="bottom-0 top-[70%] left-[45%]" />
            </div>
        </div>
    )
}

export default BentoGrid;