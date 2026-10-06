'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  role: string;
  description: string;
  note?: string;
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    title: 'PRINT Research Platform',
    role: 'Capstone Project • Project Manager',
    description:
      'Led a 5-person team in updating and improving the UCF CHDR PRINT research site across the backend and frontend, adding keyword analysis, topic modeling, and a refined search. Built a Natural Language Query feature to make research more intuitive, and reconciled the MySQL PRINT database with older databases to remove duplicate and missing data, with automated exports to partner organizations.',
    note: 'The full research site is only accessible to approved researchers.',
    links: [
      {
        label: 'About PRINT',
        href: 'https://cah.ucf.edu/publichistory/initiatives/people-religion-information-networks-and-travel-migration-in-the-early-modern-world-print/',
      },
      {
        label: 'Natural Language Query Demo',
        href: 'https://chdr.cs.ucf.edu/print_frontend_demo/querytool',
      },
    ],
  },
  {
    title: 'CloudSaver',
    role: 'Hackathon Project • Project Manager',
    description:
      'A full-stack cloud cost optimization tool that analyzes cloud billing CSVs and returns LLM-driven, human-readable recommendations and cost-saving actions. Built with an asynchronous FastAPI backend (Pandas, Uvicorn, asyncio) that cut analysis latency nearly 10x through concurrent LLM calls, and a React + Vite frontend with Chart.js visual analytics.',
    links: [
      {
        label: 'View on Devpost',
        href: 'https://devpost.com/software/cloudsaver',
      },
    ],
  },
];

export function ProjectsCard() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className="flex justify-center items-start min-h-screen pt-16">
      <div
        className={`
          transition-all duration-700 ease-out transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}
      >
        <Card
          className="w-full max-w-[900px] rounded-3xl shadow-2xl bg-black text-white overflow-hidden flex flex-col"
          {...({} as React.ComponentProps<typeof Card>)}
        >
          <CardBody
            className="p-8 flex flex-col justify-center space-y-8"
            {...({} as React.ComponentProps<typeof CardBody>)}
          >
            <Typography
              variant="h2"
              className="text-5xl font-bold mb-6 text-center"
              {...({} as React.ComponentProps<typeof Typography>)}
            >
              Projects
            </Typography>

            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900 rounded-2xl p-6 shadow-md"
              >
                <Typography
                  variant="h4"
                  className="text-2xl font-semibold mb-1"
                  {...({} as React.ComponentProps<typeof Typography>)}
                >
                  {project.title}
                </Typography>
                <Typography
                  className="text-sm text-gray-400 mb-3"
                  {...({} as React.ComponentProps<typeof Typography>)}
                >
                  {project.role}
                </Typography>
                <Typography
                  className="text-base text-gray-300"
                  {...({} as React.ComponentProps<typeof Typography>)}
                >
                  {project.description}
                </Typography>

                {project.note && (
                  <Typography
                    className="text-sm text-gray-500 italic mt-3"
                    {...({} as React.ComponentProps<typeof Typography>)}
                  >
                    {project.note}
                  </Typography>
                )}

                <div className="flex flex-wrap gap-3 mt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}