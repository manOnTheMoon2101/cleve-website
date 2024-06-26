"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      title: "Weather App",
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
      title: "Weight Management App",
      techStack: "",
      github: "",
      link: "",
    },
  };
  return (
    <div className="clear-both">
      {Object.values(data).map((x: any) => (
        <Dialog key={x.stack}>
          <DialogTrigger asChild>
            <p>{x.stack}</p>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
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
              <div className="w-6/12 float-left">image</div>

              <div className="w-6/12 float-right">{x.descriptionFirst}</div>
            </DialogDescription>

            <DialogDescription>
              <div className="w-6/12 float-left">{x.descriptionSecond}</div>

              <div className="w-6/12 float-right">image</div>
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
