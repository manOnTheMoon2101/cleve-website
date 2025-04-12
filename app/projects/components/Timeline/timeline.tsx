import { useState } from "react";
import {
  Code,
  Database,
  Layout,
  Globe,
  Briefcase,
  Award,
  ChevronDown,
  ChevronUp,
  Shovel,
  Milk,
  Monitor,
  Brush,
} from "lucide-react";
import edge from "@/public/images/organisations/edge.png";
import isipani from "@/public/images/organisations/isipani.png";
import splitline from "@/public/images/organisations/splitline.png";
import match from "@/public/images/organisations/match.svg";
import meta from "@/public/images/organisations/meta.png";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Spline_Sans_Mono } from "next/font/google";
const spline = Spline_Sans_Mono({
  subsets: ["latin"],
});
export default function WebCareerTimeline() {
  const [expanded, setExpanded] = useState(null);

  const careerMilestones = [
    {
      id: 1,
      date: "2019 (December Vacation)",
      company: " Isipani Construction (Pty) Ltd",
      title: "General Worker",
      fallBack:'ISI',
      image: isipani.src,
      description:
        "Assisted in daily site operations including material handling, site clean-up, and basic carpentry tasks ",
      skills: ["Basic Construction Knowledge", "Manual Labor"],
      icon: <Shovel className="text-white" />,
    },
    {
      id: 2,
      date: "2022 (10 months)",
      company: "Splitline Manufacturing",
      image: splitline.src,
      fallBack:'SLM',
      title: "General Worker",
      description:
        "Managed a warehouse for packaged plastic goods and developed a basic Point of Sale (POS) system to maintain product inventory records.",
      skills: ["Python", "Microsoft Excel", "Windows 10"],
      icon: <Milk className="text-white" />,
    },
    {
      id: 3,
      date: "2023 (3 months)",
      title: "It Intern",
      company: "The Cutting Edge Group",
      fallBack:'TCE',
      image: edge.src,
      description:
        "Assisted with customer computer hardware failures including network monitoring etc... ",
      skills: ["Computer Hardware", "Network Protocols"],
      icon: <Monitor className="text-white" />,
    },
    {
      id: 4,
      date: "2024 (3 months)",
      image: match.src,
      title: "Frontend Developer",
      fallBack:'MXE',
      company: "The Match Exchange",
      description:
        "Contributed in improving the UI/UX of the organisation's web app.",
      skills: ["AngularJS", "Firebase", "CSS", "Figma"],
      icon: <Brush className="text-white" />,
    },
    {
      id: 5,
      date: "2024 (Present)",
      image: meta.src,
      title: "Full Stack Developer",
      fallBack:'MET',
      company: "Metaship",
      description:
        "Contributing to the improvement of both the frontend and backend of the organization's web application by enhancing user experience, optimizing performance, and implementing new features.",
      skills: ["VueJS", "ExpressJS", "SQL", "UI/UX", "Teamwork"],
      icon: <Database className="text-white" />,
    },
  ];

  const toggleExpand = (id: any) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="mx-auto p-6">
      <h2  className={`${spline.className} text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2`}>
        <Globe className="text-accent" />
        My Adventure
      </h2>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-background to-accent"></div>

        {careerMilestones.map((milestone) => (
          <div key={milestone.id} className="mb-12 relative z-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-primary shadow-md border-2 border-gray-200 z-20 mr-4">
                {milestone.icon}
              </div>

              <div
                className={`p-5 rounded-lg shadow-md flex-grow transition-all duration-300 border ${
                  expanded === milestone.id
                    ? "border-l-4 border-primary"
                    : "border-gray-200"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(milestone.id)}
                >
                  <div>
                    <span className="text-sm font-medium text-accent mb-1 block">
                      {milestone.date}
                    </span>
                    <div className="flex flex-row items-center">
                      <Avatar>
                        <AvatarImage src={`${milestone.image}`} />
                        <AvatarFallback>{milestone.fallBack}</AvatarFallback>
                      </Avatar>
                      <h4 className="text-xl font-semibold text-gray-400 mx-2">
                        {milestone.company}
                      </h4>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {milestone.title}
                    </h3>
                  </div>
                  <div className="text-gray-500">
                    {expanded === milestone.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </div>

                {expanded === milestone.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">
                      {milestone.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {milestone.skills.map((skill, index) => (
                        <Badge className="bg-primary" key={index}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
