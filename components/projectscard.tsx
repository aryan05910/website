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
          className="w-full max-w-[900px] rounded-3xl shadow-2xl bg-black text-white overflow-hidden flex flex-col"
          {...({} as React.ComponentProps<typeof Card>)}
        >
          <CardBody className="p-8 flex flex-col justify-center space-y-8">
            <Typography
              variant="h2"
              className="text-5xl font-bold mb-6 text-center"
              {...({} as React.ComponentProps<typeof Typography>)}
            >
              Projects
            </Typography>

            {/* File Organizer Project */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
              <Typography
                variant="h4"
                className="text-2xl font-semibold mb-2"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                File Organizer
              </Typography>
              <Typography
                className="text-base text-gray-300"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                A background-running macOS menu bar app built with Python that
                automatically organizes downloads by file type or custom keywords.
                Includes a simple interface to manage rules and launches at login.
              </Typography>
            </div>

            {/* Sign Language Detector Project */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
              <Typography
                variant="h4"
                className="text-2xl font-semibold mb-2"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                Sign Language Detector
              </Typography>
              <Typography
                className="text-base text-gray-300"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                A real-time computer vision project using TensorFlow’s Object
                Detection API to recognize and classify hand gestures for sign
                language. Demonstrates machine learning, image processing, and
                live prediction capabilities.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
