'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';

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
          className="w-full max-w-[800px] rounded-3xl shadow-2xl bg-black text-white overflow-hidden flex flex-col sm:flex-row"
          {...({} as React.ComponentProps<typeof Card>)}
        >
          <CardBody
            className="p-8 sm:w-2/3 flex flex-col justify-center"
            {...({} as React.ComponentProps<typeof CardBody>)}
          >
            <Typography
              variant="h2"
              className="text-5xl font-bold mb-4"
              {...({} as React.ComponentProps<typeof Typography>)}
            >
              Projects
            </Typography>
            <Typography
              className="text-lg mb-6"
              {...({} as React.ComponentProps<typeof Typography>)}
            >
              Explore my projects that showcase my skills in web development, data science, and more.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
