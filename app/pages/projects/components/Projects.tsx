"use client";
import { Prompt } from "next/font/google";
import x from "@/public/images/health.png";
import weather from "@/public/images/cleveland.png";
import loglive from "@/public/images/test.png";
import splitline from "@/public/images/splitline.png";
import match from "@/public/images/match.png";
import dogs from "@/public/images/cool.jpg";
import "animate.css";
import { InView } from "@/components/ui/in-view";
import { Spline_Sans_Mono } from "next/font/google";
import { MorphingDialogBasicOne } from "./Dialog/Dialog";
import { CiMobile1 } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
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
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Pet Adoption App",
      image: dogs.src,
      link: "https://find-animal-umber.vercel.app/",
      body: "Pet Adoption App that allows users to find and adopt pets in their area(Currently only in Wellington,South Africa).",
    },
    weather: {
      title: "Weather App⛅",
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Weather App",
      image: weather.src,
      link: "https://weather-app-one-mu-88.vercel.app/",
      body: "Weather App that allows users to view the weather in their area and other areas.",
    },
    weight: {
      title: "Weight Management App🥩",
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Weight Management App",
      image: x.src,
      link: "https://weight-management.vercel.app/",
      body: "Weight Management App that allows users to track their weight and view their progress.",
    },
  };
  const contributed: any = {
    match: {
      title: "Match Exchange🌾",
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Grain Platform",
      image: match.src,
      link: "https://matchmx.com/",
      body: "Connecting stakeholders in the agricultural supply chain involves facilitating communication and collaboration among farmers, suppliers, distributors, retailers, and consumers to ensure efficient production, distribution, and consumption of agricultural products.",
    },
    splitline: {
      title: "Splitline🧴",
      devices: <div className="flex flex-row">{<CiLaptop />}</div>,
      description: "Plastic Molding",
      image: splitline.src,
      link: "https://www.splitline.co.za",
      body: "Splitline is a plastic manufacturing company that manufactures plastic products for the industry.",
    },
    metaship: {
      title: "Metaship🍊",
      devices: <div className="flex flex-row">{<CiLaptop />}</div>,
      description: "Fruit Plaform",
      image: loglive.src,
      link: "https://metaship.ai/",
      body: "Metaship is a fully-managed AI platform that empowers import, export, clearance, trade, and logistics companies to streamline operations. It enables data transformation, storage, and real-time monitoring of the supply chain, using AI and Big Data to enhance efficiency. By leveraging cloud technologies, Metaship addresses inefficiencies in the logistics industry for a more seamless global supply chain.",
    },
  };
  return (
    <div className="clear-both">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h2 className="text-center md:text-left animate__animated animate__zoomInRight ">
          <span
            className={`text-primary italic font-bold tracking-wide text-6xl md:text-8xl ${spline.className}`}
          >
            Projects
          </span>
          <br />{" "}
          <span className="text-5xl text-gray-500  italic">
            I Have Contributed To
          </span>
        </h2>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          {Object.entries(contributed).map(([key, x]: [string, any]) => (
            <div key={key} className="my-48">
              <MorphingDialogBasicOne
                title={x.title}
                link={x.link}
                devices={x.devices}
                image={x.image}
                body={x.body}
                description={x.description}
              />
            </div>
          ))}
        </div>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h2 className="text-center  md:text-left">
          <span
            className={`text-primary italic font-bold tracking-wide text-6xl md:text-8xl ${spline.className}`}
          >
            Projects
          </span>
          <br />
          <span className="text-5xl text-gray-500  italic">
            I Have Developed
          </span>
        </h2>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          {Object.entries(data).map(([key, x]: [string, any]) => (
            <div key={key} className="my-48">
              <MorphingDialogBasicOne
                title={x.title}
                link={x.link}
                devices={x.devices}
                image={x.image}
                body={x.body}
                description={x.description}
              />
            </div>
          ))}
        </div>
      </InView>
    </div>
  );
};

export default ProjectsContent;
