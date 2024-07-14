// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HeroImage from "../assets/hero.png";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <div className="container flex flex-col gap-20 pt-20">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <div className="relative flex gap-1.5 text-3xl font-black">
          <div className="relative bottom-4 flex rotate-[5deg] gap-2">
            <div className="h-8 w-2 rotate-12 bg-red-500"></div>
            <div className="h-8 w-2 rotate-12 bg-red-500"></div>
            <div className="h-8 w-2 rotate-12 bg-red-500"></div>
          </div>
          <p className="-rotate-[4deg] whitespace-nowrap">Sat Myo Htin</p>
          <div className="relative top-4 flex rotate-[6deg] gap-2">
            <div className="h-8 w-2 rotate-12 bg-red-500"></div>
            <div className="h-8 w-2 rotate-12 bg-red-500"></div>
            <div className="h-8 w-2 rotate-12 bg-red-500"></div>
          </div>
        </div>
        <div className="relative z-10 mt-6 max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure
          amet ratione inventore assumenda labore maiores ipsam ducimus
          voluptate impedit!
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-black">
          <div className="rounded-md bg-red-500 px-5 py-2.5 text-xs text-white">
            Join Now
          </div>
          <FaFacebookF />
          <FaTiktok />
          <FaYoutube />
        </div>
      </div>
      <div className="mx-auto">
        <img src={HeroImage} />
      </div>
    </div>
  );
}

export default Hero;
