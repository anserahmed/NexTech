import React from "react";
import "./services.css";
import ServiceCard from "./cards/ServiceCard";

export default function Services() {
  const details = [
    {
      frontpic: "./website.png",
      lastpic: "Doe",
      title: "Website Development",
      bio: " Specializing in designing dynamic websites customized to your needs, we ensure a seamless user experience and optimal performance.",
      button: "jieaijd",
    },

    {
      frontpic: "./appdev.png",
      lastpic: "Doe",
      title: "App Development",
      bio: "Cutting-edge mobile solutions customized to your specifications, engineered for user engagement, functionality, and smooth performance across all platforms.",
      button: "jieaijd",
    },
    {
      frontpic: "./ecom.png",
      lastpic: "Doe",
      title: "E-Commerce Website",
      bio: "Expertise in developing dynamic websites precisely tailored to your needs, ensuring a seamless user experience and optimal functionality.",
      button: "jieaijd",
    },
    // {
    //   frontpic: "./game.png",
    //   lastpic: "Doe",
    //   title: "Game Development",
    //   bio: "fd",
    //   button: "jieaijd",
    // },

    {
      frontpic: "./maintain.png",
      lastpic: "Doe",
      title: " Maintainence Support",
      bio: "Tailored software solutions crafted to optimize processes, boost productivity, and address the specific needs of your business or organization.",
      button: "jieaijd",
    },
  ];

  return (
    <>
      <div className="justify-center flex flex-col h-full bg-slate-300/80  top-0 start-1/2   bg-[url('https://i.postimg.cc/YqzDVj11/Simple-Shiny-5.png')]  bg-no-repeat bg-top bg-cover size-full z-[1] transform  items-center">
        {/* services */}
        <div className="flex flex-col px-7 justify-center items-center pt-10">
          <h1 className="items-center font-bold pb-2 text-5xl">
            <span className="text-skin-500">Services</span> we offer
          </h1>
          <p className="lg:max-w-[60vw] justify-center">
            We develop bespoke software solutions designed to elevate your
            business, with a strategic approach that deeply understands your
            needs and aligns seamlessly with your vision.
          </p>
        </div>
        {/* card container */}
        <div className="flex h-full justify-center items-center gap-10 flex-wrap py-10">
          {/* cards */}
          {details.map((detail, index) => (
            <ServiceCard
              key={index}
              frontpic={detail.frontpic}
              title={detail.title}
              bio={detail.bio}
            />
          ))}
        </div>
      </div>
    </>
  );
}
