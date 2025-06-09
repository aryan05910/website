'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCard() {
  return (
    <Card className="w-full max-w-[64rem] flex-row bg-black text-white">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="/IMG_1675.png"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" className="mb-4 text-white">
          Hi, My Name Is Aryan
        </Typography>
        <Typography className="mb-8 font-normal text-white">
          I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I love coding and enjoy working on challenging projects that push my limits.
        </Typography>
        <a href="#" className="inline-block">
          <Button color="white" className="text-black">
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
