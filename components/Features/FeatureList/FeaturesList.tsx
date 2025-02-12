import React from "react";
import Image from "next/image";
import FeatureLayer from "./FeatureLayer";
import {
  anchorIdentityLayer,
  ingressionLayer,
  dispatchLayer,
  queryingLayer,
} from "./FeatureData";
import NodeBud from "./NodeBud";
import VectorLogo from "@/assets/Features/Diamand.svg";
import PolygonLogo from "@/assets/Features/sicon-2.png";
import {
  FaXTwitter as XIcon,
  FaWhatsapp as Whatsapp,
  FaTelegram as Telegram,
} from "react-icons/fa6";
import NodeFeatureList from "../../../assets/Features/NodeFeatureList.svg";
import { useParallax } from "react-scroll-parallax";

const FeatureList: React.FC = () => {

  return (
    <div className="relative h-auto">
      <div className="pb-10" >
        <p className="text-4xl text-center text-white" >
          Sync Node <br />
          The building blocks <br />
          <span className="bg-gradient-to-b from-[#F2f2f2] to-[#888888] bg-clip-text text-transparent">
            to democratize comms <br />
            on Cardano using
          </span>
        </p>
      </div>
      <div className="relative" >
        <NodeBud />
        <div className="absolute top-0 flex w-full justify-between px-16 2xl:px-[10%] h-full">
          <div className="flex flex-col items-end z-10 2xl:gap-20 justify-around">
            <div className="flex items-center justify-start relative z-10">
              <div className="flex flex-col gap-3 z-10">
                <div className="bg-gradient-to-b p-[1px] from-blue-500 to-slate-500 rounded-xl">
                  <div className="flex items-center justify-end p-3 gap-3 rounded-xl bg-[#151515]">
                    <Image
                      src={VectorLogo}
                      width={30}
                      height={30}
                      alt="Vector Logo"
                    />
                    <Image
                      src={PolygonLogo}
                      width={30}
                      height={30}
                      alt="Polygon Logo"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-b p-[1px] from-blue-500 to-slate-500 rounded-xl">
                  <div className="flex items-center justify-start p-3 gap-3 rounded-xl bg-[#151515] text-white text-2xl">
                    <XIcon />
                    <Telegram />
                    <Whatsapp />
                  </div>
                </div>
              </div>
              <FeatureLayer layer={anchorIdentityLayer} />
            </div>

            <FeatureLayer layer={ingressionLayer} />
            
            <div className="w-[100px] flex flex-col gap-16 absolute top-[15%] left-[10%] z-0 2xl:hidden">
              <div>
                <hr />
                <hr />
                <hr />
              </div>
              <div>
                <hr />
                <hr />
                <hr />
              </div>
            </div>
          </div>


          <div className="flex flex-col relative items-start z-10 justify-center 2xl:justify-around h-auto">
            <FeatureLayer layer={dispatchLayer} />
            <FeatureLayer layer={queryingLayer} />
          </div>
        </div>
        <div className="absolute -top-[10%] z-0 left-0 w-full h-full flex justify-center items-center">
          <div style={{ width: "100%", height: "100%" }}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 720"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "100%", height: "100%" }}
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#E0FFFF", stopOpacity: 1 }} // Brighter Light Blue
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#1E90FF", stopOpacity: 1 }} // Brighter Dark Blue
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#E0FFFF", stopOpacity: 1 }} // Brighter Light Blue
                  />
                </linearGradient>
              </defs>

              <path
                d="M0 0 C38.61 0 77.22 0 117 0 C117 1.98 117 3.96 117 6 C79.71 6 42.42 6 4 6 C4 35.04 4 64.08 4 94 C41.29 94 78.58 94 117 94 C117 95.65 117 97.3 117 99 C79.71 99 42.42 99 4 99 C4 120.78 4 142.56 4 165 C41.95 165 79.9 165 119 165 C119 166.65 119 168.3 119 170 C81.05 170 43.1 170 4 170 C4 251.51 4 333.02 4 417 C41.29 417 78.58 417 117 417 C117 418.65 117 420.3 117 422 C79.71 422 42.42 422 4 422 C4 450.05 4 478.1 4 507 C41.95 507 79.9 507 119 507 C119 508.98 119 510.96 119 513 C79.73 513 40.46 513 0 513 C0 431.82 0 350.64 0 267 C-155.43 267 -310.86 267 -471 267 C-471 265.35 -471 263.7 -471 262 C-315.57 262 -160.14 262 0 262 C0 175.54 0 89.08 0 0 Z"
                fill="url(#grad1)"
                transform="translate(890,157)"
              />
              <path
                d="M0 0 C2.26629162 0.06487274 2.26629162 0.06487274 3.26629162 1.06487274 C3.36006945 3.64481151 3.38777182 6.19774067 3.37372208 8.77796268 C3.37318755 9.59966614 3.37265302 10.42136959 3.37210229 11.26797315 C3.36904283 14.05720062 3.35875826 16.84635675 3.34858227 19.63556671 C3.34489213 21.641082 3.34164194 23.64659814 3.33879703 25.65211481 C3.32965308 31.19103685 3.31421853 36.72992672 3.29781425 42.26883137 C3.28123738 48.23137059 3.27041271 54.19392048 3.25890636 60.15647125 C3.23815771 70.49626385 3.21376064 80.83604308 3.18682575 91.1758213 C3.15858181 102.02394488 3.13239854 112.87207018 3.10898685 123.72020531 C3.10753177 124.3939011 3.10607668 125.0675969 3.1045775 125.76170772 C3.09719908 129.18286052 3.08985766 132.60401341 3.08253049 136.02516633 C3.03052219 160.27742543 2.97386422 184.52967167 2.91448498 208.78191376 C2.85679794 232.34733843 2.80120886 255.91276653 2.74846935 279.47820282 C2.74603098 280.56717229 2.74603098 280.56717229 2.74354335 281.67814114 C2.72722138 288.9685138 2.71094217 296.25888655 2.69469429 303.54925937 C2.66159246 318.4015052 2.62820523 333.25375038 2.5946455 348.10599518 C2.59310272 348.7889255 2.59155994 349.47185583 2.58997041 350.17548102 C2.48685733 395.80528976 2.37644998 441.43508034 2.26629162 487.06487274 C-37.66370838 487.06487274 -77.59370838 487.06487274 -118.73370838 487.06487274 C-118.73370838 485.41487274 -118.73370838 483.76487274 -118.73370838 482.06487274 C-80.45370838 482.06487274 -42.17370838 482.06487274 -2.73370838 482.06487274 C-2.73370838 450.05487274 -2.73370838 418.04487274 -2.73370838 385.06487274 C-41.01370838 385.06487274 -79.29370838 385.06487274 -118.73370838 385.06487274 C-118.73370838 383.08487274 -118.73370838 381.10487274 -118.73370838 379.06487274 C-80.45370838 379.06487274 -42.17370838 379.06487274 -2.73370838 379.06487274 C-2.73370838 255.97487274 -2.73370838 132.88487274 -2.73370838 6.06487274 C-38.70370838 6.06487274 -74.67370838 6.06487274 -111.73370838 6.06487274 C-111.73370838 4.41487274 -111.73370838 2.76487274 -111.73370838 1.06487274 C-97.60822935 0.93420915 -83.48274788 0.80381196 -69.35726357 0.67372131 C-62.79841787 0.61330892 -56.23957298 0.55281109 -49.68072987 0.49211884 C-43.3524662 0.43356338 -37.02420051 0.37523126 -30.69593334 0.31705475 C-28.2801929 0.29480716 -25.8644532 0.27247876 -23.44871426 0.25006866 C-20.06820966 0.21872245 -16.68770256 0.18766217 -13.30719471 0.15666962 C-12.30594059 0.14731888 -11.30468647 0.13796814 -10.27309132 0.12833405 C-9.3490752 0.11991989 -8.42505909 0.11150574 -7.47304249 0.10283661 C-6.67384797 0.09546227 -5.87465345 0.08808792 -5.05124092 0.08049011 C-3.36731843 0.06914251 -1.68348677 0.03995028 0 0 Z"
                fill="url(#grad1)"
                transform="translate(415.73370838165283,174.93512725830078)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
