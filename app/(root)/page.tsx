import { Feature } from "@/components/cards/Feature";
import { Header } from "@/components/shared/Header";
import { Welcome } from "@/components/shared/Welcome";
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
      <p className="welcome">
        <Welcome />
      </p>
      <div className="flex flex-wrap justify-center w-[80%] ml-auto mr-auto">
        {features.map((feature) => {
          return <Feature key={feature.pathname} feature={feature} />;
        })}
      </div>
    </React.Fragment>
  );
}
