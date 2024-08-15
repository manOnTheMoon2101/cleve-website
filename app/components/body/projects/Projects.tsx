"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Suez_One } from "next/font/google";
import { IoOpenOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import { Ramabhadra } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const suez = Suez_One({
  subsets: ["latin"],
  weight: "400",
});
const ram = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
});
const Projects = () => {
  const data: any = {
    weather: {
      title: "Weather App⛅",
      image: (
        <Spline scene="https://prod.spline.design/vtIduBwoNJF6F78X/scene.splinecode" />
      ),
      link: "https://weather-app-next-js-pi.vercel.app/",
    },
    weight: {
      title: "Weight Management App🥩",
      image: (
        <Spline scene="https://prod.spline.design/SJ34J7ldVR52xZ-S/scene.splinecode" />
      ),

      link: "https://weight-management.vercel.app/",
    },
  };
  return (
    <div className="clear-both">
      <div className="flex flex-col m-5 md:flex-row justify-around">
        {Object.values(data).map((x: any) => (
          <div className="flex flex-col border border-8">
            <div className="max-w-full h-96 flex flex-row justify-center bg-red-400">
              {x.image}
            </div>
            <h3 className="text-xl font-semibold text-center">{x.title}</h3>

            <div className="flex flex-row justify-center">
              <IoOpenOutline />
              <a
                className={`text-lg text-center  ${poppins.className}`}
                target="_blank"
                rel="noopener noreferrer"
                href={x.link ? x.link : ""}
              >
                {x.link ? x.link : ""}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
