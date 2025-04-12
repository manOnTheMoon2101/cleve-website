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
} from "lucide-react";
import edge from "@/public/images/organisations/edge.png"
import isipani from "@/public/images/organisations/isipani.png"
import splitline from "@/public/images/organisations/splitline.png"
import match from "@/public/images/organisations/match.svg"
import meta from "@/public/images/organisations/meta.png"
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WebCareerTimeline() {
  const [expanded, setExpanded] = useState(null);

  const careerMilestones = [
    {
      id: 1,
      date: "2019 (December Vacation)",
      company: "Isipany Construction",
      title: "General Worker",
      image:isipani.src,
      description:
        "Assisted in daily site operations including material handling, site clean-up, and basic carpentry tasks ",
      skills: ["Basic Construction Knowledge", "Manual Labor"],
      icon: <Code className="text-blue-600" />,
    },
    {
      id: 2,
      date: "2022 (10 months)",
      company: "Splitline",
      image:splitline.src,
      title: "General Worker / It Intern",
      description:
        "Supported warehouse of packaged plastic goods.Wrote a simple POS(Point of Sale) program,which took records of the products in the warehouse.",
      skills: ["Python", "Microsoft Excel", "Windows 10"],
      icon: <Layout className="text-indigo-600" />,
    },
    {
      id: 3,
      date: "2023 (3 months)",
      title: "It Intern",
      company: "Cutting Edge",
      image:edge.src,
      description:
        "Assisted with customer computer hardware failures including network monitoring etc... ",
      skills: ["Computer Hardware", "Network Protocols"],
      icon: <Database className="text-emerald-600" />,
    },
    {
      id: 4,
      date: "2024 (3 months)",
      image:match.src,
      title: "Frontend Developer",
      company: "The Match Exchange",
      description:
        "Contributed in improving the UI/UX of the organisation's web app.",
      skills: ["AngularJS", "Firebase", "CSS", "Figma"],
      icon: <Briefcase className="text-amber-600" />,
    },
    {
      id: 5,
      date: "2024-Present",
      image:meta.src,
      title: "Full Stack Developer",
      company: "Metaship",
      description:
        "Contributing to the improvement of both the frontend and backend of the organization's web application by enhancing user experience, optimizing performance, and implementing new features.",
      skills: ["VueJS", "ExpressJS", "SQL", "UI/UX", "Teamwork"],
      icon: <Award className="text-rose-600" />,
    },
  ];

  const toggleExpand = (id: any) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <Globe className="text-blue-600" />
        My Career
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

        {/* Timeline items */}
        {careerMilestones.map((milestone) => (
          <div key={milestone.id} className="mb-12 relative z-10">
            <div className="flex items-start">
              {/* Timeline node with icon */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border-2 border-gray-200 z-20 mr-4">
                {milestone.icon}
              </div>

              {/* Content */}
              <div
                className={`p-5 rounded-lg shadow-md flex-grow transition-all duration-300 border ${
                  expanded === milestone.id
                    ? "border-l-4 border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(milestone.id)}
                >
                  <div>
                    <span className="text-sm font-medium text-blue-600 mb-1 block">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">
                    <Avatar>
  <AvatarImage src={`${milestone.image}`} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar> {milestone.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-400">
                      {milestone.company}
                    </h4>
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
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
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
