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
      link: "https://weather-app-next-js-pi.vercel.app/",
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
      <h2 className={`text-6xl md:text-8xl font-bold text-center ${prompt.className}`}>
        some <span className="text-emerald-400 italic underline">projects</span>{" "}
        i've worked on
      </h2>
      <div className="flex flex-col m-5 md:flex-row justify-around">
        {Object.values(data).map((x: any) => (
          <div className="flex flex-col border border-4 my-5 rounded border-emerald-400">
            <div className="max-w-full h-96 flex flex-row justify-center ">
              {x.image}
            </div>
            <h3 className="text-xl font-semibold text-center">{x.title}</h3>

            <div className="flex flex-row justify-center">
              <a
                className={`text-lg text-center`}
                target="_blank"
                rel="noopener noreferrer"
                href={x.link ? x.link : ""}
              >
                {x.link ? x.link : ""}
              </a>
              <IoOpenOutline />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
