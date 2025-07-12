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
              I’m a Computer Science student at the University of Central Florida with over 3 years of hands-on experience in coding, application development, system programming, and automation.
              <br /><br />
              I’m passionate about software engineering, working with data structures and algorithms, and solving complex problems through clean, efficient code. Whether it’s building new applications or optimizing existing systems, I love transforming ideas into scalable and real-world solutions.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
