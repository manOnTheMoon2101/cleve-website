import { Button } from "@/components/ui/button";
import Link from "next/link";
import bosch from "../../../../public/images/stellenbosch.png";
import spline from "../../../../public/images/spline_sun.png";
import { Poppins } from "next/font/google";
import { Suez_One } from "next/font/google";
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
import { Ramabhadra } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const suez = Suez_One({
  subsets: ["latin"],
  weight: "400",
});
const ram = Ramabhadra({
  subsets: ["latin"],
  weight: "400",
});
const Projects = () => {
  const data: any = {
    weather: {
      title: "Weather App⛅",
      image: (
        <Spline
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          scene="https://draft.spline.design/6YVF9rFIh9M-O92I/scene.splinecode"
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
      //       code: (
      //         <CopyBlock
      //           text={`
      // export const GET = async (
      //   requests: any,
      //   { params }: { params: { town: string } }
      // ) => {
      //   try {
      //     const { town } = params;
      //     const apiKey = process.env.API_KEY;
      //     const res = await fetch(
      //       https://api.openweathermap.org/data/2.5/weather?q=\${town}&units=metric&appid=\${apiKey},
      //       {
      //         next: { revalidate: 900 },
      //       }
      //     );

      //     if (!res.ok) {
      //       throw new Error("Failed to fetch data");
      //     }

      //     const data = await res.json();

      //     return Response.json(data);
      //   } catch (err) {
      //     return NextResponse.json(
      //       {
      //         message: "GET Error",
      //         err,
      //       },
      //       { status: 500 }
      //     );
      //   }
      // };
      //   `}
      //           language={"typescript"}
      //           theme={dracula}
      //         />
      //       ),
      info: "Basic Weather API",
      misc: "NextJS",
      techStack: "NextJS | OpenWeatherAPI | cheerio | shadcn/ui | TailwindCSS",
      link: "https://weather-app-next-js-pi.vercel.app/",
      descriptionFirst: "Simple Weather App that displays current weather data",
      descriptionSecond:
        "Used Openweather API and scraping from other websites to get weather data.",
    },
    weight: {
      image: (
        <Spline
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          scene="https://draft.spline.design/CaV8DHEV-RdWjjEE/scene.splinecode"
        />
      ),
      title: "Weight Management App🥩",
      techStack:
        "NextJS | Prisma | MongoDB | cheerio | NextAuth | shadcn/ui | TailwindCSS",
      link: "https://weight-management.vercel.app/",
      info: "Weight/Nutrion tracker",
      descriptionFirst: "Weight Management App displays relevant data.",
      descriptionSecond: "Used Prisma as the ORM for the REST APIs",
      misc: "NextJS",
      //       code: (
      //         <CopyBlock
      //           text={`
      // export const GET = async (
      //   req: any,
      //   { params }: { params: { month: string } }
      // ) => {
      //   try {
      //     const { month } = params;
      //     const currentDate = new Date();
      //     const currentYear = currentDate.getFullYear();
      //     let session: any;
      //     session = await getServerSession(authOptions);

      //     let user: any;
      //     user = await prisma.user.findUnique({
      //       where: {
      //         email: session?.user?.email,
      //       },
      //     });
      //     const data = await prisma.data.findMany({
      //       where: {
      //         userId: user.id,
      //         createdAt: {
      //           gte: new Date({currentYear}-{month}-01T01:00:00.459+00:00),
      //           lte: new Date({currentYear}-{month}-31T01:00:00.459+00:00),
      //         },
      //       },
      //     });

      //     data.map((x: any) => (x.createdAt = x.createdAt.toDateString()));

      //     return NextResponse.json(data);
      //   } catch (err) {
      //     return NextResponse.json(
      //       {
      //         message: "GET filter month Error",
      //         err,
      //       },
      //       { status: 500 }
      //     );
      //   }
      // };
      //   `}
      //           language={"typescript"}
      //           theme={dracula}
      //         />
      //       ),
    },
  };
  return (
    <div className="clear-both">
      <div>
        <h2 className={`text-8xl font-bold text-center ${ram.className}`}>
          some <span className="text-emerald-400"> projects</span> i worked
          on...
        </h2>
      </div>
      <div className="">
        {Object.values(data).map((x: any) => (
          <Dialog key={x.stack}>
            <DialogTrigger
              asChild
              className="cursor-pointer flex flex-col md:flex-row justify-around"
            >
              <div className="grid gap-4 grid-rows-auto">
                <div className="flex-row justify-center items-center">
                  <div className="max-w-full h-96">{x.image}</div>
                </div>
                <h3 className="text-xl font-semibold text-center">{x.title}</h3>
                <h4 className={`text-lg text-center  ${poppins.className}`}>
                  {x.info}
                </h4>
                {/* <h4 className={`text-lg text-center`}>{x.misc}</h4> */}
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-fit overflow-y-scroll max-h-screen">
              <div>
                <DialogTitle className="text-center text-4xl font-bold">
                  {x.title}
                </DialogTitle>
              </div>
              <div>
                <p className="text-center">{x.techStack}</p>

                <a
                  className="underline text-cyan-400 flex flex-row justify-center text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={x.link ? x.link : ""}
                >
                  {x.link ? x.link : ""}
                </a>
              </div>
              <Separator className="my-4" />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Projects;
