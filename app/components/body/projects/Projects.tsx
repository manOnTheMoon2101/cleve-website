"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bosch from "../../../../public/images/stellenbosch.png";
import spline from "../../../../public/images/spline_sun.png";
import { CopyBlock, dracula } from "react-code-blocks";
import Image from "next/image";
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
      stack: "weather",
      title: "Weather App⛅",
      image: (
        <Image
          className="rounded-xl"
          src={bosch}
          height={600}
          width={500}
          alt="stellenbosch"
        />
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
      techStack: "",
      github: "",
      link: "https://weather-app-next-js-pi.vercel.app/",
      descriptionFirst:
        "made this project purelly because i wanted to test my 3d assets i've created using spline.",
      descriptionSecond:
        "used openweather api and scraping from other websites to get weather data.",
    },
    weight: {
      stack: "weight",
      title: "Weight Management App🥩",
      techStack: "",
      github: "",
      link: "",
    },
  };
  return (
    <div className="clear-both flex flex-row justify-around">
      {Object.values(data).map((x: any) => (
        <Dialog key={x.stack}>
          <DialogTrigger asChild className="m-32 w-1/2 cursor-pointer">
            <div>
              <div>
                <div>{x.image}</div>
                <h3>{x.title}</h3>
                <h4>{x.info}</h4>
                <h4>{x.misc}</h4>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-fit overflow-y-scroll max-h-screen">
            <DialogHeader>
              <DialogTitle className="text-center">{x.title}</DialogTitle>
              <DialogDescription>Tech Stack:</DialogDescription>
              <DialogDescription>Github:</DialogDescription>
              <DialogDescription>
                Live Web:
                <Link href={x.link ? x.link : ""}>{x.link ? x.link : ""}</Link>
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
  );
};

export default Projects;
