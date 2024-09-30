"use client";
import { IoOpenOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import { Prompt } from "next/font/google";
import { CiCircleInfo } from "react-icons/ci";
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
      link: "https://weather-app-one-mu-88.vercel.app/",
    },
    weight: {
      title: "Weight Management App🥩",
      link: "https://weight-management.vercel.app/",
    },
  };
  const contributed: any = {
    match: {
      title: "Match Exchange",
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
      title: "Loglive",
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
      <h2
        className={`text-6xl md:text-8xl font-bold text-left tracking-wide ${prompt.className}`}
      >
        <span className="text-emerald-400 italic underline mx-2">projects</span>
        <br /> i've contributed to...
      </h2>
      <div className="flex flex-col m-5 md:flex-row justify-around">
        {Object.values(contributed).map((x: any) => (
          <div className="flex flex-col border border-4 my-5 rounded">
            <Card title={x.title} link={x.link} image={x.image} body={x.body} />
          </div>
        ))}
      </div>
      <h2
        className={`text-6xl md:text-8xl font-bold text-left tracking-wide ${prompt.className}`}
      >
        <span className="text-emerald-400 italic underline mx-2">
          personal projects
        </span>
        <br /> i've made...
      </h2>

      <div className="flex flex-col m-5 md:flex-row justify-around">
        {Object.values(data).map((x: any) => (
          <div className="flex flex-col border border-4 my-5 rounded">
            <Card title={x.title} link={x.link} image={x.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
