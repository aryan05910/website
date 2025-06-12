'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function ProjectsCard() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-start min-h-screen pt-16">
      <div
        className={`
          transition-all duration-700 ease-out transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}
      >
        <Card className="w-full max-w-[800px] rounded-3xl shadow-2xl bg-black text-white overflow-hidden flex flex-col sm:flex-row">
          
          <CardBody className="p-25 sm:w-2/3 flex flex-col justify-center">
            <Typography variant="h2" className="text-5xl font-bold mb-4 ">
              Projects
            </Typography>
            <Typography className="text-lg mb-6">
              Explore my projects that showcase my skills in web development, data science, and more.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
