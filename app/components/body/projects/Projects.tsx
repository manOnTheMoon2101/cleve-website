"use client";
import { IoOpenOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import { Prompt } from "next/font/google";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const Projects = () => {
  const data: any = {
    weather: {
      title: "Weather App⛅",
      image: (
        <Spline
          scene="https://prod.spline.design/vtIduBwoNJF6F78X/scene.splinecode"
          className="flex flex-row justify-center"
        />
      ),
      link: "https://weather-app-one-mu-88.vercel.app/",
    },
    weight: {
      title: "Weight Management App🥩",
      image: (
        <Spline
          scene="https://prod.spline.design/SJ34J7ldVR52xZ-S/scene.splinecode"
          className="flex flex-row justify-center"
        />
      ),

      link: "https://weight-management.vercel.app/",
    },
  };
  return (
    <div className="clear-both">
      <h2
        className={`text-6xl md:text-8xl font-bold text-center tracking-wide ${prompt.className}`}
      >
        Some personal <br />
        <span className="text-emerald-400 italic underline">Projects</span>{" "}
        <br /> I've worked on
      </h2>
      <p className="block md:hidden border rounded text-center bg-emerald-400 text-black">
        Mobile Users
        <br />
        Use Two Fingers to play around with the assets
      </p>

      <div className="flex flex-col m-5 md:flex-row justify-around">
        {Object.values(data).map((x: any) => (
          <div className="flex flex-col border border-4 my-5 rounded border-emerald-400">
            <div className="flex flex-row justify-end">
              <a
                className={`text-4xl text-center hover:text-emerald-400 p-2`}
                target="_blank"
                rel="noopener noreferrer"
                href={x.link ? x.link : ""}
              >
                <IoOpenOutline />
              </a>
            </div>
            <div className="max-w-full h-96 flex flex-row justify-center ">
              {x.image}
            </div>
            <h3 className="text-xl font-semibold text-center tracking-tight">
              {x.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
