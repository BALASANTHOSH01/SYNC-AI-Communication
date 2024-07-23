import Image from "next/image";
import { FeatureImgOne, FeatureImgTwo, FetaureImgThree, FeatureImgFive, FeatureImgFour, FeatureImgSix, FeatureBGImg } from "../../../assets/Features/index";
import { RightArrow } from "@/components/ReusableComponents/IconList";
import SmallGradient from "@/components/ReusableComponents/SmallGradient";

const BentoGrid = () => {
    return (
        <div className=" my-[10%]">
            <div className=" w-[90%] mx-auto flex flex-col gap-3">
                <div className=" flex flex-row gap-4 items-start">

                    <div className=" relative w-[60%] ">
                        <Image src={FeatureImgOne} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[789px] w-[1247px]" />

                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        <div className="absolute bottom-3 left-0 right-0 p-5 z-20 text-white">
                            <p className=" text-[25px]">SyncID: Your Palm is Your Public Key</p>
                            <p className="text-[14px]">Sync ID is a sybil-resistant verifiable credential, powered by palm signatures</p>
                            <p className="text-[14px]">secured by zkp, which is directly linked to your Cardano public key and Twitter.</p>
                        </div>
                    </div>
                    <Image src={FeatureImgTwo} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[789px] w-[789px]" />
                </div>
                <div className=" flex flex-row gap-4 items-start">
                    <Image src={FetaureImgThree} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[789px] w-[1247px]" />
                    <Image src={FeatureImgFour} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[789px] w-[789px]" />
                </div>
                <div className=" flex flex-row gap-4 items-center">
                    <Image src={FeatureImgFive} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[789px] w-[1247px]" />
                    <Image src={FeatureImgSix} alt="" className="border-[var(--primaryBlueText)] border-[1px] rounded-3xl lg:h-[80vh] xl:h-[70vh] 2xl:h-[789px] w-[789px]" />
                </div>
                <SmallGradient innerClass="w-[70px]" outerClass="bottom-0 top-[70%] left-[45%]" />
            </div>
        </div>
    )
}

export default BentoGrid;