'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function AboutCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-start min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`
          transition-all duration-700 ease-out transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}
      >
        <Card
          className="w-full max-w-4xl rounded-3xl shadow-2xl bg-black text-white overflow-hidden"
          {...({} as React.ComponentProps<typeof Card>)}
        >
          <CardBody
            className="p-8 sm:p-12"
            {...({} as React.ComponentProps<typeof CardBody>)}
          >
            <Typography
              variant="h2"
              className="text-4xl sm:text-5xl font-bold mb-6"
              {...({} as React.ComponentProps<typeof Typography>)}
            >
              About Me
            </Typography>
            <Typography
              className="text-gray-300 text-base sm:text-lg leading-relaxed"
              {...({} as React.ComponentProps<typeof Typography>)}
            >
              I'm a Master of Science in Digital Forensics student at the University of Central Florida, building on a B.S. in Computer Science and over 4 years of hands-on experience in coding, systems programming, and automation. I'm focused on a career in digital forensic analysis, and I'm currently developing practical skills in evidence acquisition, disk imaging, hashing and integrity verification, and hex-level file system analysis using tools like WinHex, Hex Fiend, FTK Imager, and dd.
              <br /><br />
              My software engineering background shapes how I approach investigations. I'm comfortable with data structures, algorithms, and scripting, which helps me automate repetitive analysis and dig into how systems actually store and handle data. I've also led teams from concept to delivery, including my capstone project, where I managed a five-person team improving a university research platform. I'm now looking for an opportunity where I can apply both sides of that background to real casework.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
