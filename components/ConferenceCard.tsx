"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  align: number;
  item: any;
};

const ConferenceCard: FC<Props> = ({ align, item }) => {
  return (
    <>
      <div className="hidden md:grid grid-cols-11 items-start gap-10">
        <Link
          href={`/${item.id}`}
          className={`${
            align % 2 === 0 ? "order-3" : "order-1"
          } col-span-5 flex items-start gap-[10px] border-t-4 border-[#CDCDCD] bg-[#F9FAFB] py-7 px-4 rounded-lg overflow-hidden hover:shadow transition-all duration-150 ease-in-out`}
        >
          <Image src={"/Marker.svg"} width={16} height={16} alt="mark" />
          <div className="flex flex-col gap-[10px]">
            <div className="text-lg font-medium text-primary leading-none">
              {item.name}
            </div>
            <div className="text-[#617187] text-sm font-normal">
              {item.slogan}
            </div>
          </div>
        </Link>
        <div className="order-2 col-span-1 flex flex-col items-center justify-center gap-1">
          <Image
            src={"/circle.svg"}
            alt="mark"
            width={48}
            height={48}
            className={align !== 1 ? "grayscale" : ""}
          />
          <Image
            src={"/stLine.svg"}
            alt="line"
            width={2}
            height={100}
            className={align !== 1 ? "grayscale" : ""}
          />
        </div>
        <div
          className={`${
            align % 2 === 0 ? "order-1 text-right" : "order-3 text-left"
          } text-[#617187] col-span-5 text-sm font-normal`}
        >
          {item.startDate}
        </div>
      </div>

      <div className="md:hidden grid grid-cols-6 items-start gap-1">
        <div className="col-span-1 flex flex-col items-center justify-center gap-1">
          <Image
            src={"/circle.svg"}
            alt="mark"
            width={48}
            height={48}
            className={align !== 1 ? "grayscale" : ""}
          />
          <Image
            src={"/stLine.svg"}
            alt="line"
            width={2}
            height={100}
            className={align !== 1 ? "grayscale" : ""}
          />
        </div>

        <div className="col-span-5 relative">
          <div
            className={`text-[#617187] col-span-5 text-sm font-normal absolute -top-2 left-0 -translate-y-full`}
          >
            {item.startDate}
          </div>
          <div
            className={`flex items-start gap-[10px] border-t-4 border-[#CDCDCD] bg-[#F9FAFB] py-7 px-4 rounded-lg overflow-hidden hover:shadow transition-all duration-150 ease-in-out`}
          >
            <Image src={"/Marker.svg"} width={16} height={16} alt="mark" />
            <div className="flex flex-col gap-[10px]">
              <div className="text-lg font-medium text-primary leading-none">
                {item.name}
              </div>
              <div className="text-[#617187] text-sm font-normal">
                {item.slogan}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConferenceCard;
