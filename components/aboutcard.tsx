'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function AboutCard() {
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
              About
            </Typography>
            <Typography className="text-gray-300 text-lg leading-relaxed">
              I’m a Computer Science student at the University of Central Florida with 3+ years of hands-on experience in coding, app development, system programming, and automation. I enjoy in-depth software engineering, coding, working with data structures and algorithms, and solving complex problems through clean, efficient code. 
              Whether it’s building apps from the ground up or streamlining / optimizing existing systems, I’m all about turning ideas into real, working solutions. 
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
