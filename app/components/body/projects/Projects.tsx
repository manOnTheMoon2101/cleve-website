import { Button } from "@/components/ui/button";
import Link from "next/link";
import bosch from "../../../../public/images/stellenbosch.png";
import spline from "../../../../public/images/spline_sun.png";
import { CopyBlock, dracula } from "react-code-blocks";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
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
      techStack: "NextJS | OpenWeatherAPI | cheerio | shadcn/ui | TailwindCSS",
      link: "https://weather-app-next-js-pi.vercel.app/",
      descriptionFirst: "Simple Weather App that displays current weather data",
      descriptionSecond:
        "Used Openweather API and scraping from other websites to get weather data.",
    },
    weight: {
      image: (
        <Spline scene="https://prod.spline.design/JfqER1MP23EKSc3N/scene.splinecode" />
      ),
      title: "Weight Management App🥩",
      techStack:
        "NextJS | Prisma | MongoDB | cheerio | NextAuth | shadcn/ui | TailwindCSS",
      link: "https://weight-management.vercel.app/",
      info: "Weight/Nutrion tracker",
      descriptionFirst: "Weight Management App displays relevant data.",
      descriptionSecond: "Used Prisma as the ORM for the REST APIs",
      misc: "DASHBOARD-WEB-2024",
      code: (
        <CopyBlock
          text={`
export const GET = async (
  req: any,
  { params }: { params: { month: string } }
) => {
  try {
    const { month } = params;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let session: any;
    session = await getServerSession(authOptions);

    let user: any;
    user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    const data = await prisma.data.findMany({
      where: {
        userId: user.id,
        createdAt: {
          gte: new Date({currentYear}-{month}-01T01:00:00.459+00:00),
          lte: new Date({currentYear}-{month}-31T01:00:00.459+00:00),
        },
      },
    });

    data.map((x: any) => (x.createdAt = x.createdAt.toDateString()));

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        message: "GET filter month Error",
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
                <DialogTitle className="text-center text-4xl font-bold">
                  {x.title}
                </DialogTitle>
                <div className="flex flex-row justify-between">
                  <DialogDescription>{x.techStack}</DialogDescription>
                  <DialogDescription>@2024</DialogDescription>
                </div>
                <Separator className="my-4" />
                <DialogDescription>
                  <a
                    className="underline text-cyan-400 flex flex-row justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={x.link ? x.link : ""}
                  >
                    {x.link ? x.link : ""}
                  </a>
                </DialogDescription>
              </DialogHeader>
              <DialogDescription>
                {/* <div className="flex flex-row justify-center">
                  {x.imageFirst}
                </div> */}

                <div className="text-center text-2xl">
                  <h3>{x.descriptionFirst}</h3>
                </div>
              </DialogDescription>

              <DialogDescription>
                {/* <div className="text-left text-2xl">
                  {x.descriptionSecond}
                </div> */}

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
