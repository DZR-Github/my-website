"use client";
import React, { useEffect, useRef, useState } from "react";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../../api/uploadthing/core";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, message } from "antd";
import Image from "next/image";

interface resProps {
  fileKey: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
  key: string;
  name: string;
  size: number;
  url: string;
}

const Token = process.env.NEXT_PUBLIC_UPLOADTHING_TOKEN;

export default function Uploadthing() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const text = "Click to copy!";

  const successMsg = (msg: string) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };

  const errorMsg = (msg: string) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  const CopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    successMsg("copied!");
  };

  useEffect(() => {
    const imgs = localStorage.getItem("IMGS");
    if (imgs) {
      const urlArr = JSON.parse(imgs);
      setArr(urlArr);
    }
  }, []);

  return (
    <div className="w-full h-full bg-white">
      <p className="mt-[10px] text-center text-[#12a698] font-extrabold text-[40px]">
        Uploadthing
      </p>
      {contextHolder}
      <div className="w-[40%] mx-auto">
        <div className="mt-[20px] mb-5 flex py-3">
          <Input
            className="focus:border-gray-500 mr-5 bg-white border-gray-300 placeholder:text-gray-400"
            type="password"
            placeholder="Please enter the Token!"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
          <Button
            onClick={() => {
              if (value === Token) {
                setShow(true);
                successMsg("You have access to uploadthings!");
              } else {
                errorMsg("Wrong Token!");
              }
            }}
            className="bg-sky-400 hover:bg-sky-500 text-white"
          >
            Confirm
          </Button>
        </div>
        <div className={show ? "block" : "hidden"}>
          <UploadDropzone<OurFileRouter>
            className="bg-gray-100"
            endpoint="imageUploader"
            onClientUploadComplete={(res?: resProps[]) => {
              // Do something with the response
              const imgs = localStorage.getItem("IMGS");
              let urlArr;
              if (imgs) {
                urlArr = JSON.parse(imgs);
              } else {
                urlArr = [];
              }
              if (res) urlArr.push(res[0].fileUrl);
              setArr(urlArr);
              localStorage.setItem("IMGS", JSON.stringify(urlArr));
              successMsg("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              errorMsg(`ERROR! ${error.message}`);
            }}
            onUploadBegin={(name) => {}}
          />
        </div>
      </div>
      <div className="w-[70%] mx-auto mt-10 flex flex-wrap items-center">
        {arr.length ? (
          arr.map((url) => {
            return (
              <div
                className="w-[100px] h-[100px] relative m-1 flex items-center"
                key={url}
              >
                <Tooltip className="pt-[10px]" placement="top" title={text}>
                  <Image
                    onClick={() => CopyUrl(url)}
                    className="hover:cursor-pointer w-[100px]"
                    fill
                    sizes="100px"
                    src={url}
                    alt="Image"
                  />
                </Tooltip>
              </div>
            );
          })
        ) : (
          <p className="text-center w-full">
            You have not uploaded any pictures!
          </p>
        )}
      </div>
    </div>
  );
}
