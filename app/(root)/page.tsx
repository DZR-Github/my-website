import { Feature } from "@/components/cards/Feature";
import { Header } from "@/components/shared/Header";
import { Welcome } from "@/components/shared/Welcome";
import Image from "next/image";
import React from "react";

const features = [
  {
    name: "Blog",
    pathname: "blog",
  },
  {
    name: "Uploadthing",
    pathname: "uploadthing",
  },
  {
    name: "ChatGPT",
    pathname: "chatgpt",
  },
];

export default async function Home() {
  return (
    <React.Fragment>
      <Header></Header>
      <div>
        <div className="w-[50vw] pl-5 mt-[100px]">
          <p className="text-[50px] font-[900] text-white mb-10">
            {/* <Welcome />  */}
            Personal website of zrDeng
          </p>
          <p className="text-white">
            Built by a front-end developer. Mainly used Nextjs 13, Typescript,
            Tailwindcss, Uploadthing. In here, you can read my Blog, which is
            about the knowledge of front-end. Besides, you can upload your image
            file if you have the Token! The most interesting is the ChatGPT
            feature. Just have a try!
          </p>
        </div>
      </div>
      <Image
        className="z-[-100] fixed left-[60vw] top-[150px]"
        alt="bg"
        src={
          "https://utfs.io/f/30d4f531-0184-41a3-ae00-6aced086f495-l9n0x1.png"
        }
        width={468}
        height={300}
      />

      <Image
        className="z-[-100] fixed left-0 top-[350px]"
        alt="bg"
        src={
          "https://utfs.io/f/949c06d3-1340-413b-8e06-7b2fd7c42a86-l9n0x0.png"
        }
        width={530}
        height={300}
      />
      <div className="w-[80%] mx-auto mt-[100px]">
        <p className="text-center text-[#48dcbc] text-[50px] font-[900]">
          Features
        </p>
        <div className="flex flex-wrap justify-center mt-10">
          {features.map((feature) => {
            return <Feature key={feature.pathname} feature={feature} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
