"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bosch from "../../../../public/images/stellenbosch.png";
import spline from "../../../../public/images/spline_sun.png";
import { CopyBlock, dracula } from "react-code-blocks";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Projects = () => {
  const data: any = {
    weather: {
      title: "Weather App⛅",
      image: (
        <Spline scene="https://draft.spline.design/6YVF9rFIh9M-O92I/scene.splinecode" />
      ),
      imageFirst: (
        <Image
          className="rounded-xl"
          src={spline}
          height={600}
          width={500}
          alt="spline 3d sun asset"
        />
      ),
      code: (
        <CopyBlock
          text={`
export const GET = async (
  requests: any,
  { params }: { params: { town: string } }
) => {
  try {
    const { town } = params;
    const apiKey = process.env.API_KEY;
    const res = await fetch(
      https://api.openweathermap.org/data/2.5/weather?q=\${town}&units=metric&appid=\${apiKey},
      {
        next: { revalidate: 900 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        message: "GET Error",
        err,
      },
      { status: 500 }
    );
  }
};
  `}
          language={"typescript"}
          theme={dracula}
        />
      ),
      info: "Basic Weather API",
      misc: "API-WEB-2024",
      techStack: "NextJS,OpenWeatherAPI,cheerio,Shadcn,TailwindCSS",
      link: "https://weather-app-next-js-pi.vercel.app/",
      descriptionFirst:
        "made this project purelly because i wanted to test my 3d assets i've created using spline.",
      descriptionSecond:
        "used openweather api and scraping from other websites to get weather data.",
    },
    weight: {
      image: (
        <Spline scene="https://draft.spline.design/6YVF9rFIh9M-O92I/scene.splinecode" />
      ),
      title: "Weight Management App🥩",
      techStack: "NextJS,Prisma,MongoDB,Cheerio,NextAuth,Shadcn,TailwindCSS",
      link: "https://weight-management.vercel.app/",
      info: "Weight/Nutrion tracker",
      misc: "DASHBOARD-WEB-2024",
    },
  };
  return (
    <div className="clear-both">
      <div>
        <h2 className="text-8xl font-bold text-center">
          some <span className="text-emerald-400"> projects</span> i worked
          on...
        </h2>
      </div>
      <div className="flex flex-row justify-around">
        {Object.values(data).map((x: any) => (
          <Dialog key={x.stack}>
            <DialogTrigger asChild className="m-32 w-1/2 cursor-pointer">
              <div className="flex flex-row justify-center">
                <div>
                  <div>{x.image}</div>
                  <h3 className="text-4xl font-bold">{x.title}</h3>
                  <h4>{x.info}</h4>
                  <h4>{x.misc}</h4>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-fit overflow-y-scroll max-h-screen bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-center">{x.title}</DialogTitle>
                <DialogDescription>Tech Stack:{x.techStack}</DialogDescription>
                <DialogDescription>
                  Live Web:
                  <a
                    className="underline text-sky-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={x.link ? x.link : ""}
                  >
                    {x.link ? x.link : ""}
                  </a>
                </DialogDescription>
              </DialogHeader>
              <DialogDescription>
                <div>{x.imageFirst}</div>

                <div>{x.descriptionFirst}</div>
              </DialogDescription>

              <DialogDescription>
                <div>{x.descriptionSecond}</div>

                <div>{x.code}</div>
              </DialogDescription>
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Projects;
