import { Prompt } from "next/font/google";
import weight from "@/public/images/weightNew.png";
import animal from "@/public/images/animal-updated.png";
import food from "@/public/images/recipeNew.png";

import "animate.css";
import { InView } from "@/components/ui/in-view";
import { Spline_Sans_Mono } from "next/font/google";
import { MorphingDialogBasicOne } from "./Dialog/Dialog";
import { CiMobile1 } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
import { FaGolang } from "react-icons/fa6";
import WebCareerTimeline from "./Timeline/timeline";
import weather from "@/public/images/weatherNew.png";
import go from "@/public/images/go.png";
import weightV2 from "@/public/images/newDash.png";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { SiDrizzle, SiPostgresql, SiShadcnui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { SiCheerio } from "react-icons/si";
import { RiSvelteFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "800",
});
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});
const ProjectsContent = () => {
  const data: any = {
    weather: {
      title: "Weather App",
      github: "https://github.com/manOnTheMoon2101/weather_app",
      stack: [
        {
          icon: <FaReact color="#4b9fb3" />,
          tooltip: "React 19",
        },
        {
          icon: <RiNextjsFill color="black" />,
          tooltip: "NextJS 14",
        },
        {
          icon: <SiShadcnui color="black" />,
          tooltip: "Shadcn UI",
        },
        {
          icon: <RiTailwindCssFill color="#00bbff" />,
          tooltip: "Tailwind CSS",
        },
        {
          icon: <TbBrandThreejs />,
          tooltip: "Three.js",
        },
      ],
      devices: (
        <div className="flex flex-row">
          {<RiNextjsFill />}
          {<CiLaptop />}
        </div>
      ),
      description: "Weather App",
      image: weather.src,
      link: "https://weather-app-one-mu-88.vercel.app/",
      body: "A sleek and simple weather app that shows real-time weather updates for your chosen city, complete with stunning visuals and an interactive 3D model",
    },
    weight: {
      title: "Health Tracker App V1",
      github: "https://github.com/manOnTheMoon2101/weight_management",
      stack: [
        {
          icon: <FaReact color="#4b9fb3" />,
          tooltip: "React 19",
        },
        {
          icon: <RiNextjsFill color="black" />,
          tooltip: "NextJS 14",
        },
        {
          icon: <SiShadcnui color="black" />,
          tooltip: "Shadcn UI",
        },
        {
          icon: <RiTailwindCssFill color="#00bbff" />,
          tooltip: "Tailwind CSS",
        },
        {
          icon: <DiMongodb color="#00ed63" />,
          tooltip: "MongoDB",
        },
        {
          icon: <SiPrisma color="#15a395" />,
          tooltip: "PrismaORM",
        },
      ],
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Weight Management App",
      image: weight.src,
      link: "https://weight-management.vercel.app/",
      body: "A weight tracker app that displays your main nutrients through advanced, visually stunning graphs and detailed table for comprehensive health tracking.",
    },
    weight2: {
      title: "Health Tracker App V2",
      github: "https://github.com/manOnTheMoon2101/weight-managementV2",
      link:"https://weight-management-v2.vercel.app/",
      stack: [
        {
          icon: <RiSvelteFill color="#ff5805" />,
          tooltip: "Sveltekit",
        },
        {
          icon: <SiShadcnui color="black" />,
          tooltip: "Shadcn UI",
        },
        {
          icon: <RiTailwindCssFill color="#00bbff" />,
          tooltip: "Tailwind CSS",
        },
        {
          icon: <SiPostgresql color="#2d628d" />,
          tooltip: "NeonDB",
        },
        {
          icon: <SiDrizzle color="#abd546" />,
          tooltip: "DrizzleORM",
        },
      ],
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Health Tracker App V2",
      image: weightV2.src,
      body: "Weight Tracker v2 gives you a faster, smoother way to track your health. Now with water intake, step counting, and new pie charts alongside detailed nutrient graphs and tables for a complete, visually engaging view of your progress.",
    },
    animal_scraper: {
      title: "Animal Adoption App",
      stack: [
        {
          icon: <FaReact color="#4b9fb3" />,
          tooltip: "React 19",
        },
        {
          icon: <RiNextjsFill color="black" />,
          tooltip: "NextJS 15",
        },
        {
          icon: <SiShadcnui color="black" />,
          tooltip: "Shadcn UI",
        },
        {
          icon: <RiTailwindCssFill color="#00bbff" />,
          tooltip: "Tailwind CSS",
        },
        {
          icon: <SiCheerio color="#e88d1e" />,
          tooltip: "Cheerio",
        },
      ],
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Animal-Adoption App",
      github: "https://github.com/manOnTheMoon2101/animal-scraper",
      image: animal.src,
      link: "https://animal-scraper.vercel.app/",
      body: "An adoption app that currently features animals from the Wellington SPCA, with more adoption centers to be added soon.",
    },
    recipeReel: {
      title: "Recipe Finder App",
      body: "This app helps users discover delicious recipes by simply entering an ingredient. Just type in what you have on hand, and the site instantly shows a variety of recipe ideas that feature that ingredient.",
      stack: [
        {
          icon: <RiSvelteFill color="#ff5805" />,
          tooltip: "SvelteKit",
        },
        {
          icon: <SiShadcnui color="black" />,
          tooltip: "Shadcn UI",
        },
        {
          icon: <RiTailwindCssFill color="#00bbff" />,
          tooltip: "Tailwind CSS",
        },
        // {
        //   icon: <FaUtensilSpoon color="#009644" />,
        //   tooltip: "Spoonacular API",
        // },
      ],
      devices: (
        <div className="flex flex-row">
          {<CiMobile1 />}
          {<CiLaptop />}
        </div>
      ),
      description: "Recipe Finder App",
      github: "https://github.com/manOnTheMoon2101/recipe-finder",
      link: "https://recipe-finder-alpha-one.vercel.app/",
      image: food.src,
    },
    // cli: {
    //   title: "Golang Project...(Soon)",
    //   image:go.src,
    //   body: "",
    //   stack: [
    //     {
    //       icon: <FaGolang color="#007c9c" />,
    //       tooltip: "Golang",
    //     },
    //   ],
    //   devices: (
    //     <div className="flex flex-row">
    //       {<CiMobile1 />}
    //       {<CiLaptop />}
    //     </div>
    //   ),
    //   description: "Demo",
    //   link: "",
    //   // image: demo.src,
    // },
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
      link: "https://matchmx.com/",
      body: "Connecting stakeholders in the agricultural supply chain involves facilitating communication and collaboration among farmers, suppliers, distributors, retailers, and consumers to ensure efficient production, distribution, and consumption of agricultural products.",
    },
    splitline: {
      title: "Splitline🧴",
      devices: <div className="flex flex-row">{<CiLaptop />}</div>,
      description: "Plastic Molding",
      link: "https://www.splitline.co.za",
      body: "Splitline is a plastic manufacturing company that manufactures plastic products for the industry.",
    },
    metaship: {
      title: "Metaship🍊",
      devices: <div className="flex flex-row">{<CiLaptop />}</div>,
      description: "Fruit Plaform",
      link: "https://metaship.ai/",
      body: "Metaship is a fully-managed AI platform that empowers import, export, clearance, trade, and logistics companies to streamline operations. It enables data transformation, storage, and real-time monitoring of the supply chain, using AI and Big Data to enhance efficiency. By leveraging cloud technologies, Metaship addresses inefficiencies in the logistics industry for a more seamless global supply chain.",
    },
  };
  return (
    <div className="clear-both">
      <WebCareerTimeline />

      {/* <InView
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
      </InView> */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* <h2 className="text-center  md:text-left">
          <span
            className={`text-primary italic font-bold tracking-wide text-6xl md:text-8xl ${spline.className}`}
          >
            Stuff
          </span>
          <br />
          <span className="text-5xl text-gray-500  italic">
            I've been messing around with
          </span>
        </h2> */}

        <h2
          className={`${spline.className} text-4xl md:text-8xl font-bold  flex items-center gap-2 p-6 mt-48`}
        >
          {/* <Laptop className="text-accent" /> */}
          Did I mention I L❤️ve programming?
        </h2>

        <span
          className={`${spline.className}  font-italic text-accent  flex items-center gap-2 p-6`}
        >
          Some Side Projects I've been working on(always for the lookout and testing
          new stacks)
        </span>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {Object.entries(data).map(([key, x]: [string, any]) => (
            <div key={key} className="my-24 md:my-0">
              <MorphingDialogBasicOne
                title={x.title}
                link={x.link}
                devices={x.devices}
                image={x.image}
                body={x.body}
                description={x.description}
                stack={x.stack}
                github={x.github}
              />
            </div>
          ))}
        </div>
      </InView>
    </div>
  );
};

export default ProjectsContent;
