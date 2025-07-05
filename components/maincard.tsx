'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function HorizontalCard() {
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
          
          {/* Left content area */}
          <CardBody className="p-25 sm:w-2/3 flex flex-col justify-center">
            <Typography variant="h2" className="text-5xl font-bold ">
              Welcome.
            </Typography>
            <Typography className="text-gray-300 text-lg leading-relaxed">
              My name is Aryan Saraswat, I am a Software Engineering Candidate based in Orlando, Florida. My passions include coding and web / application development, I enjoy building user-friendly outputs that bring ideas to life through coding.”
            </Typography>
            <a
              href="/resume.pdf"
              download
              className="mt-4 inline-block px-16 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              Download Resume
            </a>
          </CardBody>

          {/* Right image area */}
          <CardHeader
            shadow={false}
            floated={false}
            className="w-full sm:w-1/2 h-64 sm:h-auto overflow-hidden m-0"
          >
            <img
              src="/IMG_1675.png"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
