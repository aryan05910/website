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
          <CardBody className="p-15 sm:w-2/3 flex flex-col justify-start">
            <Typography variant="h2" className="text-5xl font-bold mb-4">
              Welcome.
            </Typography>
            <Typography className="text-gray-300 text-lg leading-relaxed mb-6">
              My name is <span className="text-white font-semibold">Aryan Saraswat</span>. I'm a Software Engineering Candidate based in <span className="text-white font-semibold">Orlando, Florida</span>.
              <br /><br />
              I specialize in coding and web/application development. My passion lies in building clean, user-friendly interfaces that bring ideas to life through code.
            </Typography>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-25 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
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
