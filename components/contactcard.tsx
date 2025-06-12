'use client';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contactLinks = [
  {
    title: "Email",
    url: "mailto:aryansaraswat5@gmail.com",
    icon: <FaEnvelope className="text-red-400 text-4xl" />,
    text: "Send me an email",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aryan-saraswat-001a5b336/",
    icon: <FaLinkedin className="text-blue-500 text-4xl" />,
    text: "Connect with me on LinkedIn",
  },
  {
    title: "GitHub",
    url: "https://github.com/aryan05910",
    icon: <FaGithub className="text-white text-4xl" />,
    text: "Check out my GitHub projects",
  },
];

export function ContactCard() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen pt-16 space-y-8">
      {contactLinks.map((link, index) => (
        <div
          key={index}
          className={`
            transition-all duration-700 ease-out transform
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
          `}
        >
          <Card className="w-full max-w-[600px] rounded-3xl shadow-2xl bg-black text-white overflow-hidden flex items-center gap-6 p-6">
            <div>{link.icon}</div>
            <CardBody className="p-0">
              <Typography variant="h5" className="font-bold">
                {link.title}
              </Typography>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                {link.text}
              </a>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
