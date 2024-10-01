"use client";
import { IoOpenOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import { Prompt } from "next/font/google";
import weight from "@/public/images/graph.png";
import weather from "@/public/images/weather.png";
import Card from "./Card/Card";
import loglive from "@/public/images/loglive.png";
import match from "@/public/images/match.png";
import Image from "next/image";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const ProjectsContent = () => {
  const data: any = {
    weather: {
      title: "Weather App⛅",
      image: (
        <Image
          alt="image"
          src={weather}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ),
      link: "https://weather-app-one-mu-88.vercel.app/",
      body: "Simple Weather App",
    },
    weight: {
      title: "Weight Management App🥩",
      image: (
        <Image
          alt="image"
          src={weight}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ),
      link: "https://weight-management.vercel.app/",
      body: "Weight Management App",
    },
  };
  const contributed: any = {
    match: {
      title: "Match Exchange🌾",
      image: (
        <Image
          alt="image"
          src={match}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ),
      link: "https://matchmx.com/",
      body: "Grain Platform",
    },
    loglive: {
      title: "Loglive🍊",
      image: (
        <Image
          alt="image"
          src={loglive}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ),
      link: "https://loglive.ai/",
      body: "Fruit Platform",
    },
  };
  return (
    <div className="clear-both">
      <h2 className="text-center md:text-left">
        <span
          className={`text-emerald-400 italic font-bold tracking-wide text-6xl md:text-8xl ${prompt.className}`}
        >
          projects
        </span>
        <br /> <span className="text-5xl">i've contributed to</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
        {Object.values(contributed).map((x: any) => (
          <div className="my-48">
            <Card title={x.title} link={x.link} image={x.image} body={x.body} />
          </div>
        ))}
      </div>
      <h2 className="text-center md:text-left">
        <span
          className={`text-emerald-400 italic font-bold tracking-wide text-6xl md:text-8xl ${prompt.className}`}
        >
          projects
        </span>
        <br />
        <span className="text-5xl">i've made</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
        {Object.values(data).map((x: any) => (
          <div className="my-48">
            <Card title={x.title} link={x.link} image={x.image} body={x.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
