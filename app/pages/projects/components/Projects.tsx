"use client";
import { Prompt } from "next/font/google";
import x from "@/public/images/weight7.png";
import weather from "@/public/images/weather.png";
import Card from "./Card/Card";
import loglive from "@/public/images/test.png";
import match from "@/public/images/match.png";
import dogs from "@/public/images/dogs3.jpg";
import "animate.css";
import Image from "next/image";
import { Spline_Sans_Mono } from "next/font/google";
import { MorphingDialogBasicOne } from "./Dialog/Dialog";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});
const ProjectsContent = () => {
  const data: any = {
    animal: {
      title: "Find🐕nimal",
      image: dogs.src,
      link: "https://findanimal-omega.vercel.app/",
      body: "Pet Adoption App",
    },
    weather: {
      title: "Weather App⛅",
      image: weather.src,
      link: "https://weather-app-one-mu-88.vercel.app/",
      body: "Simple Weather App",
    },
    weight: {
      title: "Weight Management App🥩",
      image: x.src,
      link: "https://weight-management.vercel.app/",
      body: "Weight Management App",
    },
  };
  const contributed: any = {
    match: {
      title: "Match Exchange🌾",
      description: "Grain Delivery",
      image: match.src,
      link: "https://matchmx.com/",
      body: "Grain Platform",
    },
    loglive: {
      title: "Loglive🍊",
      description: "Fruit Delivery",
      image: loglive.src,
      link: "https://loglive.ai/",
      body: "Fruit Platform",
    },
  };
  return (
    <div className="clear-both">
      <h2 className="text-center md:text-left animate__animated animate__zoomInRight ">
        <span
          className={`text-emerald-400 italic font-bold tracking-wide text-6xl md:text-8xl ${spline.className}`}
        >
          projects
        </span>
        <br />{" "}
        <span className="text-5xl underline italic">I Have Contributed To</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
        {Object.values(contributed).map((x: any) => (
          <div className="my-48">
            <MorphingDialogBasicOne
              title={x.title}
              link={x.link}
              image={x.image}
              body={x.body}
              description={x.description}
            />
          </div>
        ))}
      </div>
      <h2 className="text-center md:text-left">
        <span
          className={`text-emerald-400 italic font-bold tracking-wide text-6xl md:text-8xl ${spline.className}`}
        >
          projects
        </span>
        <br />
        <span className="text-5xl underline italic">
          Projects I Have Developed
        </span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
        {Object.values(data).map((x: any) => (
          <div className="my-48">
            <MorphingDialogBasicOne
              title={x.title}
              link={x.link}
              image={x.image}
              body={x.body}
              description={x.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
